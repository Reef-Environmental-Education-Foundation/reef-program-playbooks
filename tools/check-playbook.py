#!/usr/bin/env python3
"""Playbook checker. Usage: python3 tools/check-playbook.py [index.html ...]
Renders each playbook in headless Chromium and checks: no script errors, unique ids,
every internal link (#tab/id) resolves, no horizontal overflow at phone width,
no banned restrictive phrases, meta.lastVerified present. Needs: pip install playwright."""
import sys, re, pathlib
from playwright.sync_api import sync_playwright
root=pathlib.Path(__file__).resolve().parent.parent
pages=[pathlib.Path(a).resolve() for a in sys.argv[1:]] or [root/'conservation-partners/new-registration/index.html', root/'derby/index.html']
BANNED=[r'\bnever change\b', r'without martha', r'do not touch', r'only martha']
TABS=['start','tasks','change','fix','ref']
PFX={'tasks':'t-','change':'c-','fix':'f-','ref':'r-'}
bad=0
def fail(m):
    global bad; bad+=1; print('  FAIL',m)
with sync_playwright() as p:
    b=p.chromium.launch()
    for f in pages:
        print(f.relative_to(root))
        pg=b.new_page(viewport={'width':390,'height':844}); errs=[]
        pg.on('pageerror',lambda e: errs.append(str(e)))
        pg.on('console',lambda m: errs.append(m.text) if m.type=='error' and 'ERR_' not in m.text else None)
        pg.goto('file://'+str(f)); pg.wait_for_timeout(300)
        if errs: fail('script errors: %s'%errs)
        meta=pg.evaluate('window.PLAYBOOK&&window.PLAYBOOK.meta')
        if not meta or not meta.get('lastVerified'): fail('meta.lastVerified missing')
        ids={}; links=set(); text=''
        for t in TABS:
            pg.goto('file://%s#%s'%(f,t)); pg.wait_for_timeout(150)
            r=pg.evaluate('''()=>({ids:[...document.querySelectorAll('[id]')].map(e=>e.id),
              nav:[...document.querySelectorAll('a[data-nav]')].map(a=>a.dataset.nav),
              txt:document.getElementById('main').innerText.toLowerCase(),
              ow:document.documentElement.scrollWidth-document.documentElement.clientWidth})''')
            if r['ow']>0: fail('horizontal overflow %dpx on %s'%(r['ow'],t))
            for i in r['ids']: ids.setdefault(t,[]).append(i)
            links|=set(r['nav']); text+=r['txt']
            d=[i for i in set(r['ids']) if r['ids'].count(i)>1]
            if d: fail('duplicate ids on %s: %s'%(t,d))
        for l in sorted(links):
            tab,_,i=l.partition('/')
            if tab not in TABS: fail('bad tab in link '+l); continue
            if i and PFX.get(tab,'')+i not in ids.get(tab,[]): fail('link target missing: '+l)
        for pat in BANNED:
            if re.search(pat,text): fail('banned phrase: '+pat)
        print('  %d internal links checked'%len(links))
        pg.close()
    b.close()
print('OK' if not bad else '%d problem(s)'%bad); sys.exit(1 if bad else 0)
