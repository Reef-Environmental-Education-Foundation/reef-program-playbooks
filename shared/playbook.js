/* REEF Program Playbook engine (v2.0)
   Renders window.PLAYBOOK (defined in each playbook's content.js) into five tabs:
   Start Here, I Need To..., Make a Change, Fix a Problem, Reference.
   Staff edit content.js. Change THIS file only for changes that apply to every playbook. */
(function(){
'use strict';
var P=window.PLAYBOOK;
var $=function(i){return document.getElementById(i)};

/* ---------- shared vocabulary (identical in every playbook) ---------- */
var STATUS={
  working:['Working','p-ok','Available and verified for routine use.'],
  interim:['Interim Process','p-int','A documented manual or alternate procedure is currently required.'],
  dev:['In Development','p-plan','Planned or being built. Not available yet.'],
  verify:['Needs Verification','p-warn','Built, but not yet tested under real operating conditions.']
};
var CTYPE={
  routine:['Routine','c-routine','●','You can make this change yourself. Check the result afterward.'],
  coord:['Coordinate first','c-coord','◐','The change touches connected systems (forms, automations, payments, access). Get a quick technical check so registrations keep flowing.'],
  decision:['Decision needed','c-decision','◆','The change needs a program, policy or financial decision first. Decide it, then coordinate the technical update.']
};
var TABS=[['start','Start Here'],['tasks','I Need To...'],['change','Make a Change'],['fix','Fix a Problem'],['ref','Reference']];
/* old bookmarks keep working */
var ALIAS={how:'ref/how-it-works',changes:'change',fixes:'fix'};

/* ---------- helpers ---------- */
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function pill(k){var m=STATUS[k];return m?'<span class="pill '+m[1]+'">'+m[0]+'</span>':''}
function cpill(k){var m=CTYPE[k];return m?'<span class="pill '+m[1]+'">'+m[2]+' '+m[0]+'</span>':''}
/* mini-markup for content strings: **bold**, `code`, [text](https://...), [text](#tab/id), {working} {interim} {dev} {verify} {routine} {coord} {decision} */
function fmt(s){
  s=esc(s);
  s=s.replace(/`([^`]+)`/g,'<code>$1</code>');
  s=s.replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>');
  s=s.replace(/\[([^\]]+)\]\(#([^)]+)\)/g,'<a href="#$2" data-nav="$2">$1</a>');
  s=s.replace(/\[([^\]]+)\]\(((?:https?:|mailto:)[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
  s=s.replace(/\{(working|interim|dev|verify)\}/g,function(m,k){return pill(k)});
  s=s.replace(/\{(routine|coord|decision)\}/g,function(m,k){return cpill(k)});
  return s.replace(/\n/g,'<br>');
}
function link(w){return '<a href="'+esc(w[1])+'" target="_blank" rel="noopener">'+esc(w[0])+'</a>'}
function row(a,b,cls){return '<div class="row'+(cls?' '+cls:'')+'"><dt>'+esc(a)+'</dt><dd>'+b+'</dd></div>'}
function ol(a){return '<ol>'+a.map(function(x){return '<li>'+fmt(x)+'</li>'}).join('')+'</ol>'}
function ul(a){return '<ul>'+a.map(function(x){return '<li>'+fmt(x)+'</li>'}).join('')+'</ul>'}
function table(t){
  return '<div class="tablewrap"><table>'+(t.head?'<thead><tr>'+t.head.map(function(h){return '<th>'+esc(h)+'</th>'}).join('')+'</tr></thead>':'')
   +'<tbody>'+t.rows.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+fmt(c)+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>';
}
function plain(html){return html.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').toLowerCase()}
function card(id,title,badges,inner,extra,open){
  return '<details class="item" id="'+id+'"'+(open?' open':'')+' data-text="'+esc(plain(title+' '+inner))+'"><summary>'+(extra||'')+'<span>'+esc(title)+'</span>'+(badges||'')+'</summary><dl class="body">'+inner+'</dl></details>';
}
function legendStatus(){
  return '<ul class="legend-defs">'+Object.keys(STATUS).map(function(k){return '<li>'+pill(k)+' '+esc(STATUS[k][2])+'</li>'}).join('')+'</ul>';
}
function legendChange(){
  return '<div class="three">'+Object.keys(CTYPE).map(function(k){return '<div>'+cpill(k)+'<p>'+esc(CTYPE[k][3])+'</p></div>'}).join('')+'</div>';
}

/* generic blocks used by Reference and by extra sections */
function blocks(arr){
  return (arr||[]).map(function(b){
    if(b.p!=null)return '<p class="blk">'+fmt(b.p)+'</p>';
    if(b.note!=null)return '<p class="blk note">'+fmt(b.note)+'</p>';
    if(b.h!=null)return '<h3>'+esc(b.h)+'</h3>';
    if(b.ul)return '<div class="blk">'+ul(b.ul)+'</div>';
    if(b.ol)return '<div class="blk">'+ol(b.ol)+'</div>';
    if(b.table)return '<div class="blk">'+table(b.table)+'</div>';
    if(b.rows)return '<div class="blk">'+b.rows.map(function(r){return row(r[0],fmt(r[1]))}).join('')+'</div>';
    if(b.callout)return '<div class="callout blk"><b>'+esc(b.callout.t)+'</b>'+fmt(b.callout.x)+'</div>';
    if(b.later)return '<div class="later blk">'+fmt(b.later)+'</div>';
    if(b.flow)return '<div class="flow blk">'+b.flow.map(function(s,i){return (i?'<div class="arrow" aria-hidden="true">&rarr;</div>':'')+'<div class="step '+(s.k||'')+'"><b>'+esc(s.t)+'</b><span>'+fmt(s.s||'')+'</span>'+(s.e?'<em>'+esc(s.e)+'</em>':'')+'</div>'}).join('')+'</div>';
    if(b.legend==='status')return '<div class="blk">'+legendStatus()+'</div>';
    if(b.legend==='change')return '<div class="blk">'+legendChange()+'</div>';
    if(b.links)return '<div class="blk">'+ul((P.links||[]).map(function(l){return '['+l[0]+']('+l[1]+')'}))+'</div>';
    if(b.pre)return '<pre class="copy blk">'+esc(b.pre)+'</pre>';
    return '';
  }).join('');
}

/* ---------- task / change / fix cards ---------- */
function whereHtml(k){
  var parts=[];
  if(k.where&&k.where.length)parts.push(k.where.map(link).join(', '));
  if(k.wt)parts.push('<span class="'+(k.where&&k.where.length?'note':'')+'">'+fmt(k.wt)+'</span>');
  return parts.join(' ');
}
function refsHtml(k){
  if(!k.refs||!k.refs.length)return '';
  return row('See also',k.refs.map(function(r){return '<a href="#'+esc(r[1])+'" data-nav="'+esc(r[1])+'">'+esc(r[0])+'</a>'}).join(' &middot; '));
}
function gapHtml(g){
  if(!g)return '';
  return '<div class="gaphead">'+esc(g.head||'Not fully built yet')+'</div><div class="gapbox">'+g.rows.map(function(r){return row(r[0],fmt(r[1]))}).join('')+'</div>';
}
function taskCard(k){
  var inner='';
  if(k.what)inner+=row("What you're doing",fmt(k.what));
  var w=whereHtml(k); if(w)inner+=row('Where to go',w);
  if(k.steps)inner+=row('Steps',ol(k.steps));
  if(k.copy)inner+=row('Copy and paste','<pre class="copy">'+esc(k.copy)+'</pre>');
  if(k.table)inner+=row(k.tableLabel||'Checks',table(k.table));
  if(k.confirm)inner+=row('How to confirm it worked',fmt(k.confirm));
  if(k.wrong)inner+=row('If something goes wrong',fmt(k.wrong));
  if(k.who)inner+=row('Who',fmt(k.who));
  if(k.status&&k.status!=='working')inner+=row('Status',pill(k.status)+(k.sn?' <span class="note">'+fmt(k.sn)+'</span>':''));
  else if(k.sn)inner+=row('Note',fmt(k.sn));
  inner+=gapHtml(k.gap);
  inner+=refsHtml(k);
  var badge=(k.status&&k.status!=='working')?pill(k.status):'';
  return card('t-'+k.id,k.t,badge,inner,k.star?'<span class="star" title="Everyday task" aria-label="Everyday task">&#9733;</span>':'');
}
function changeCard(c){
  var inner='';
  if(c.what)inner+=row('What you can change',fmt(c.what));
  var w=whereHtml(c); if(w)inner+=row('Where to go',w);
  if(c.steps)inner+=row('Steps',ol(c.steps));
  if(c.confirm)inner+=row('Check it worked',fmt(c.confirm));
  if(c.depends)inner+=row('What it connects to',fmt(c.depends));
  if(c.how)inner+=row('How to coordinate',fmt(c.how));
  if(c.who)inner+=row('Who decides',fmt(c.who));
  if(c.status&&c.status!=='working')inner+=row('Status',pill(c.status)+(c.sn?' <span class="note">'+fmt(c.sn)+'</span>':''));
  else if(c.sn)inner+=row('Note',fmt(c.sn));
  inner+=gapHtml(c.gap);
  inner+=refsHtml(c);
  var badge=cpill(c.type)+((c.status&&c.status!=='working')?' '+pill(c.status):'');
  return card('c-'+c.id,c.t,badge,inner);
}
function fixCard(f){
  var inner=row('What you might see',fmt(f.sees||f.t));
  if(f.cause)inner+=row('Likely cause',fmt(f.cause));
  if(f.check)inner+=row('What to check',fmt(f.check));
  if(f.do)inner+=row('What you can do',fmt(f.do));
  if(f.confirm)inner+=row('Confirm it is resolved',fmt(f.confirm));
  if(f.escalate)inner+=row('Get help when',fmt(f.escalate));
  if(f.who)inner+=row('Who can help',fmt(f.who));
  inner+=refsHtml(f);
  return card('f-'+f.id,f.t,'',inner);
}

/* ---------- panels ---------- */
function renderStart(){
  var s=P.start,h='';
  if(s.banner)h+='<div class="banner ok"><b>'+esc(s.banner.t)+'</b>'+fmt(s.banner.x)+'</div>';
  h+='<h2>Where to manage your program</h2><div class="grid">'+s.workspace.map(function(w){
    return '<a class="btn'+(w.primary?' primary':'')+'" href="'+esc(w.u)+'" target="_blank" rel="noopener">'+esc(w.l)+'<small>'+esc(w.s||'')+'</small></a>'}).join('')+'</div>';
  if(s.workspaceNote)h+='<p class="note" style="margin-top:8px">'+fmt(s.workspaceNote)+'</p>';
  if(s.alerts&&s.alerts.length){
    h+='<h2>Pay attention to right now</h2>'+s.alerts.map(function(a){
      return '<div class="statusnote"><b class="t">'+esc(a.t)+'</b><p>'+fmt(a.x)+'</p></div>'}).join('');
  }
  h+='<h2>Most common tasks</h2><div class="grid">'+s.common.map(function(c){
    return '<a class="btn" href="#'+esc(c.go)+'" data-nav="'+esc(c.go)+'">'+esc(c.l)+'<small>'+esc(c.s||'')+'</small></a>'}).join('')
    +'<a class="btn" href="#tasks" data-nav="tasks">See every task<small>Organized by what you are trying to do</small></a></div>';
  h+='<h2>Something not working?</h2><div class="grid">'+s.broken.map(function(c){
    return '<a class="btn" href="#'+esc(c.go)+'" data-nav="'+esc(c.go)+'">'+esc(c.l)+'<small>Open the fix</small></a>'}).join('')
    +'<a class="btn" href="#fix" data-nav="fix">See all fixes<small>Symptoms, likely causes, who can help</small></a></div>';
  if(s.help)h+='<h2>Who can help</h2><p>'+fmt(s.help)+'</p>';
  h+='<h2>Labels you will see</h2><p class="note">Labels appear only where the difference matters. Anything without a label is working.</p>'+legendStatus();
  return h;
}
var taskFilter='all';
function renderTasks(){
  var T=P.tasks,h='';
  if(T.intro)h+='<p class="note">'+fmt(T.intro)+'</p>';
  h+='<div class="filters" id="tfilters" role="group" aria-label="Filter tasks">'+[['all','All'],['star','Everyday (★)'],['notready','Not fully working yet']].map(function(f){
    return '<button class="chip" data-f="'+f[0]+'" aria-pressed="'+(f[0]===taskFilter)+'">'+f[1]+'</button>'}).join('')+'</div>';
  var any=false;
  T.groups.forEach(function(g){
    var items=g.items.filter(function(k){
      if(taskFilter==='star')return !!k.star;
      if(taskFilter==='notready')return !!k.status&&k.status!=='working';
      return true;});
    if(!items.length)return; any=true;
    h+='<div class="glabel">'+esc(g.t)+'</div>';
    if(g.intro&&taskFilter==='all')h+='<p class="note">'+fmt(g.intro)+'</p>';
    h+=items.map(taskCard).join('');
  });
  if(!any)h+='<div class="empty">No tasks match this filter.</div>';
  return h;
}
function renderChange(){
  var C=P.change,h='';
  h+='<div class="banner ok"><b>'+esc(C.banner.t)+'</b>'+fmt(C.banner.x)+'</div>';
  h+=legendChange();
  if(C.intro)h+='<p>'+fmt(C.intro)+'</p>';
  h+='<h2>Which kind of change is it?</h2>'+table({head:['I want to change...','Kind','Go to'],rows:C.cards.map(function(c){
    return [c.t,'{'+c.type+'}','[Open the card](#change/'+c.id+')']})});
  h+='<h2>Change cards</h2>'+C.cards.map(changeCard).join('');
  (C.sections||[]).forEach(function(s){h+='<h2'+(s.id?' id="c-'+esc(s.id)+'"':'')+'>'+esc(s.t)+'</h2>'+blocks(s.blocks)});
  return h;
}
function renderFix(){
  var F=P.fix,h='';
  if(F.intro)h+='<p>'+fmt(F.intro)+'</p>';
  if(F.collect)h+='<div class="callout"><b>'+esc(F.collect.t)+'</b>'+ul(F.collect.items)+'</div>';
  F.groups.forEach(function(g){
    h+='<div class="glabel">'+esc(g.t)+'</div>'+g.items.map(fixCard).join('');
  });
  return h;
}
function renderRef(){
  var R=P.ref,h='';
  if(R.intro)h+='<p class="note">'+fmt(R.intro)+'</p>';
  h+='<div class="toc" aria-label="Reference sections">'+R.sections.map(function(s){return '<a href="#ref/'+esc(s.id)+'" data-nav="ref/'+esc(s.id)+'">'+esc(s.t)+'</a>'}).join('')+'</div>';
  h+=R.sections.map(function(s){return card('r-'+s.id,s.t,'',blocks(s.blocks),'',s.open)}).join('');
  return h;
}

/* ---------- shell, tabs, routing ---------- */
function build(){
  $('h1').textContent=P.meta.title;
  $('sub').innerHTML=fmt(P.meta.sub+' '+(P.meta.stamp||('Version '+P.meta.version+'.')));
  $('q').placeholder=P.meta.searchHint||'Search...';
  $('tabs').innerHTML=TABS.map(function(t){return '<button class="tab" role="tab" id="tab-'+t[0]+'" aria-controls="p-'+t[0]+'" data-tab="'+t[0]+'" aria-selected="false">'+t[1]+'</button>'}).join('');
  var main=$('main');
  var fills={start:renderStart,tasks:renderTasks,change:renderChange,fix:renderFix,ref:renderRef};
  main.innerHTML=TABS.map(function(t){return '<section class="panel" id="p-'+t[0]+'" role="tabpanel" aria-labelledby="tab-'+t[0]+'" hidden>'+fills[t[0]]()+'</section>'}).join('');
  $('foot').innerHTML=fmt(P.meta.footer);
}
function show(tab){
  if(!$('p-'+tab))tab='start';
  TABS.forEach(function(t){$('p-'+t[0]).hidden=(t[0]!==tab)});
  Array.prototype.forEach.call(document.querySelectorAll('.tab'),function(b){b.setAttribute('aria-selected',String(b.getAttribute('data-tab')===tab))});
  var r=$('results'); if(r)r.remove();
}
function parseHash(){
  var h=(location.hash||'#start').slice(1); if(ALIAS[h])h=ALIAS[h];
  var i=h.indexOf('/'); return i<0?[h,'']:[h.slice(0,i),h.slice(i+1)];
}
var PREFIX={tasks:'t-',change:'c-',fix:'f-',ref:'r-'};
function route(){
  var p=parseHash(),tab=p[0],id=p[1];
  show(tab);
  if(id&&PREFIX[tab]){
    var el=$(PREFIX[tab]+id);
    if(!el&&tab==='tasks'&&taskFilter!=='all'){taskFilter='all';$('p-tasks').innerHTML=renderTasks();el=$('t-'+id)}
    if(el){el.open=true;el.scrollIntoView({block:'start'});return}
  }
  window.scrollTo(0,0);
}
function go(t){ if(location.hash==='#'+t)route(); else location.hash=t; }

document.addEventListener('click',function(e){
  var t=e.target.closest('[data-tab]'); if(t){$('q').value='';go(t.getAttribute('data-tab'));return}
  var n=e.target.closest('[data-nav]'); if(n){e.preventDefault();$('q').value='';var r=$('results');if(r)r.remove();go(n.getAttribute('data-nav'));return}
  var f=e.target.closest('[data-f]'); if(f){taskFilter=f.getAttribute('data-f');$('p-tasks').innerHTML=renderTasks();}
});
function search(){
  var v=$('q').value.trim().toLowerCase(), old=$('results'); if(old)old.remove();
  if(!v){route();return}
  TABS.forEach(function(t){$('p-'+t[0]).hidden=true});
  var hits=Array.prototype.filter.call(document.querySelectorAll('.item'),function(n){return n.getAttribute('data-text').indexOf(v)>-1});
  var s=document.createElement('section');s.id='results';
  s.innerHTML='<h2>'+hits.length+' result'+(hits.length===1?'':'s')+' for "'+esc($('q').value.trim())+'"</h2>';
  if(!hits.length)s.innerHTML+='<div class="empty">Nothing found. Try a shorter word, or look at the Reference tab.</div>';
  hits.forEach(function(n){var c=n.cloneNode(true);c.removeAttribute('id');c.open=true;s.appendChild(c)});
  $('main').prepend(s);
}
function start(){
  try{
    build();
    $('q').addEventListener('input',search);
    window.addEventListener('hashchange',function(){if(!$('q').value)route()});
    route();
  }catch(err){
    $('main').innerHTML='<div class="banner"><b>This playbook could not be displayed.</b>There is a mistake in the content file (usually a missing comma, quote or bracket in the last edit). Technical detail: '+esc(err&&err.message)+'</div>';
    if(window.console)console.error(err);
  }
}
if(!P){$('main').innerHTML='<div class="banner"><b>This playbook could not be displayed.</b>The content file did not load or has a syntax error. Open the browser console for the exact line.</div>'}
else start();
})();
