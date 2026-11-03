# REEF Program Playbook Standard (v2.0)

Purpose: every program playbook should let a program manager find the right step in under a minute, know what is safe to do alone, and know when to ask for help. This page is the rulebook for writing and maintaining one.

## 1. Five tabs, always the same

| Tab | Question it answers | Contents |
|---|---|---|
| Start Here | "Where do I begin today?" | Alerts, links to the working screens, the 8 most common tasks, "something is not working" shortcuts, who to ask |
| I Need To... | "How do I do this?" | Task cards grouped by job |
| Make a Change | "Can I change this myself?" | Cards for changing wording, emails, forms, prices, structure |
| Fix a Problem | "Something looks wrong." | Symptom cards: what you see, likely cause, what to do |
| Reference | "How does it all fit?" | Status of every capability, how it works, roles, key dates and facts, glossary, links, about |

Do not add a sixth tab. If something does not fit, it belongs in Reference.

## 2. One status vocabulary

Use these four labels and nothing else. Write them as `{working}` `{interim}` `{dev}` `{verify}` in content.js.

| Label | Meaning |
|---|---|
| Working | Available and verified for routine use. |
| Interim Process | A documented manual or alternate procedure is currently required. |
| In Development | Planned or being built. Not available yet. |
| Needs Verification | Built, but not yet tested under real operating conditions. |

Rules: never describe an In Development capability as if it works. If there is no safe workaround, say so in plain words ("There is no safe workaround today"). Once a Needs Verification item has run for real, change it to Working and update the verified date.

## 3. Task card format

Every task card has the same fields, in this order:

1. **Use this when** (the situation, in the user's words)
2. **Before you start** (access, information needed)
3. **Steps** (numbered, one action each, say where to click)
4. **Check your work** (what you should see)
5. **Ask for help if** (the exact trigger)
6. A status label, and a gap box if the capability is unfinished (what is missing, who logs it)

Titles start with a verb the user would say: "Check a payment," not "Payment verification."

## 4. Operational versus technical

Program managers run the program. Technical support builds and repairs it. The playbook says which is which on each card.

- **Routine:** you can do this yourself. Check the result afterward.
- **Coordinate first:** touches forms, automations, payments or access. Get a quick technical check so registrations keep flowing.
- **Decision needed:** a program, policy or money decision comes first. Decide, then coordinate the technical update.

Tone rule: describe what is safe and how to check, not what is forbidden. Avoid "never," "do not touch," or "only [person] can" unless a real financial or data-loss risk exists, and then say what the risk is and who to ask.

## 5. Fix a Problem card format

Symptom as the title ("A partner says they paid but it is not recorded"), then: What you are seeing, Most likely cause, What to do, When to ask for help. Order cards by how often they happen.

## 6. Launch guidance versus mature guidance

Launch-period items (the first live registrations, temporary checks) live in one card on the I Need To... tab and one Reference card called "Launch." When the period ends, delete the card instead of leaving it to age.

## 7. Verification and versions

Every content.js has `meta.lastVerified` stating what was checked against the live systems and when, and `meta.stamp` for the header. When you change content only, update the text. When you check the live systems, update the date. When you restructure without checking, say so (this is why v2.0 says "live systems were not re-checked").

## 8. Maintenance tiers

| Tier | What | Who | How |
|---|---|---|---|
| 1. Program content | Steps, wording, contacts, dates, decisions in content.js | The playbook owner (Noa, Alli) | Edit content.js in GitHub's web editor, run the checker if available, publish |
| 2. Technical documentation | Reference cards on how automations and forms connect, the improvement backlog | Technical support | Same file, same process; owner reviews |
| 3. Shared engine | `shared/` files: look, tabs, search | Technical support only | Change once, applies to all playbooks; run the checker on every playbook |
| 4. Needs publishing help | Enabling Pages, repo permissions, new playbook folders | Repo admin | Ask technical support |

Lightweight staff edit path: open `content.js`, find the card by its title, change the text between the quotes, keep the quotes and commas, save. If the page then shows a red "content file has an error" banner, undo the last change; the banner names the problem.

## 9. Starter template for a new playbook

1. Copy a playbook folder (for example `derby/`) and rename it.
2. Keep `index.html` as is, fixing the title and the two relative paths to `shared/`.
3. In `content.js`, keep the object shape (`meta`, `start`, `tasks`, `change`, `fix`, `ref`, `links`), delete the program content, and write the new program's cards.
4. Start with the eight tasks people do most. Write those first.
5. Run `python3 tools/check-playbook.py <path>/index.html` and fix everything it reports.
6. Have the future owner try it with the usability test (see the test plan) before announcing it.

## 10. Mini-markup in content.js

`**bold**`, `` `code` ``, `[text](https://...)`, `[text](#tasks/card-id)` for an internal link (tabs: tasks, change, fix, ref), and the status tokens above.
