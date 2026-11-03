# REEF Program Playbooks

Staff-facing guides for running REEF programs. Each playbook is one `index.html` shell plus one `content.js` that holds all the words. The look and behavior come from `shared/`, so every playbook works the same way.

| Playbook | Page | Content file | Owner | Content last verified |
|---|---|---|---|---|
| Conservation Partner: New Registration | `conservation-partners/new-registration/index.html` | `content.js` in the same folder | Noa Parks | System status 2 Nov 2026; restructured 3 Nov 2026 |
| Lionfish Derby | `derby/index.html` | `content.js` in the same folder | Alli | System status 2 Nov 2026; decisions through 3 Nov 2026; restructured 3 Nov 2026 |

## Layout

- `shared/playbook.css`, `shared/playbook.js`: the common look, five tabs, status labels, search. Change these only for changes that apply to every playbook.
- `<playbook>/content.js`: the program content. This is the file staff edit.
- `standard/PLAYBOOK_STANDARD.md`: the standard every playbook follows, the maintenance tiers, and a starter template.
- `tools/check-playbook.py`: run before publishing. Catches broken links, duplicate ids, script errors, phone-width overflow.

## Publishing

GitHub Pages must be enabled by a repo admin (Settings, Pages, deploy from the main branch). Until then the pages can be opened from a downloaded copy of the repo.
