/* LIONFISH DERBY & ARTS FESTIVAL PLAYBOOK: CONTENT  (edit this file; do not edit shared/)
   ------------------------------------------------------------------------------------
   How to edit safely (see standard/PLAYBOOK_STANDARD.md for the full guide):
   - Change only the words inside "quotes". Keep the commas, brackets and quote marks around them.
   - Use curly quotes (“like this”) inside a sentence so you do not close the string by accident.
   - Mini-markup inside text: **bold**, `code`, [link text](https://...), [jump to a card](#tasks/review-teams)
     and status labels {working} {interim} {dev} {verify}. Change-type labels: {routine} {coord} {decision}.
   - Status vocabulary (same in every playbook): working = Working, interim = Interim Process,
     dev = In Development, verify = Needs Verification. Leave "status" off a card that is simply working.
   - When you change something here, update meta.lastVerified below. Questions: Alli or technical support.
*/
var DI='https://airtable.com/appCK2qlT3WHdhYKd/', VI='https://airtable.com/appCK2qlT3WHdhYKd/';
var FORM='https://forms.zoho.com/reeforg1/form/2027LionfishDerbyTeamRegistration1/builder';
var PG={teams27:DI+'pagitrwO1JewcsGrh',attn:DI+'page5Pb4bA2fhVE2V',pay:DI+'pagrDGzVdOiOfAKXh',all:DI+'pagimnl6QgRnmFUss',results:DI+'page7nkeLyF3lxire',dash:DI+'pagH5EcOVCg2kLhnn',
  review:VI+'pagD7gfDTvGK2wSke',invite:VI+'pagwmfKJGp3o3kqIF',vpay:VI+'pagv9mJxILnclh5i0',vlist:VI+'pagIDXv0lAQ8UOTCA',vattn:VI+'pagkSyuujBq6ctAQm'};
var ASANA_PRICE='https://app.asana.com/1/1147518192453984/task/1219088172933163';

window.PLAYBOOK={
meta:{
  title:'Lionfish Derby & Arts Festival Playbook',
  sub:'For Alli and the Derby team: where to go, what to do, how to make changes, and how to get help.',
  stamp:'Version 2.0. System status checked 2 Nov 2026.',
  version:'2.0',
  lastVerified:'System status last checked against the live systems on 2 Nov 2026; decisions recorded through 3 Nov 2026. Reorganized into the shared playbook structure on 3 Nov 2026 (content moved and clarified; live systems were not re-checked).',
  searchHint:'Search: waiver, refund, wrong price, captain email, vendor, roster...',
  footer:'Version 2.0, reorganized 3 Nov 2026. System status last verified 2 Nov 2026 from read-only checks of Zoho Forms notes, Zoho Flow, Airtable automations and the Airtable interface; decisions recorded through 3 Nov. This page does not update itself from Zoho or Airtable, so update it when the live system changes (see [About this playbook](#ref/about)).'
},

/* ============================ START HERE ============================ */
start:{
  banner:{t:'You own the Derby and the Arts Festival.',x:'Registrations and payments arrive in one place, matched to the right people and teams, so you spend less time chasing information across forms, PayPal and spreadsheets. You own the program and its day-to-day work. The technology is there to support you.'},
  workspace:[
    {l:'Lionfish Derby',s:'Airtable interface: teams, payments, needs attention',u:PG.teams27,primary:true},
    {l:'Arts Festival Vendors',s:'Airtable interface: applications, invites, day-of list',u:PG.review,primary:true},
    {l:'This Year’s Teams',s:'Everyone registered for the current Derby year',u:PG.teams27},
    {l:'Needs Attention',s:'Held registrations, each with a plain note',u:PG.attn},
    {l:'Payments',s:'Payment status by team',u:PG.pay},
    {l:'All Teams',s:'Search any team, in any year',u:PG.all},
    {l:'Review Applications',s:'Vendor applications waiting for a decision',u:PG.review},
    {l:'Vendor List',s:'Approved vendors with booth and contact',u:PG.vlist}
  ],
  workspaceNote:'You use the shared REEF Staff login. Work in the interface pages: they are built for you, and you can edit what they show. The Data and Automations tabs and the filters on shared pages are wired to automations, so leave those alone. If you want a different view, an extra field, or a page that does not exist yet, that is an improvement to request, not a rule to work around.',
  alerts:[
    {t:'The new public registration is not open yet',x:'Please do not tell captains the form is open until you hear it is published. What still has to happen first, and what can wait, is in [Launch readiness](#ref/launch). The three versions of the form are explained in [Which version of the form is which](#ref/forms).'},
    {t:'Four capabilities are not finished',x:'Team rosters, captain contact corrections, vendor acceptance and payment, and waiver tracking do not have working pages or flows yet. Each has a card that says what to do today, what is planned and what is missing: [Update a roster](#tasks/roster-change), [Correct a captain’s contact information](#tasks/captain-contact), [Invite a vendor and collect the $100](#tasks/vendor-invite-pay) and [Track waivers](#tasks/waivers). The build list is in the [implementation backlog](#ref/backlog).'},
    {t:'Price change on Saturday 20 March 2027',x:'Registration goes from $90 (Early Bird, through 19 March) to $120 (Regular) on 20 March 2027, which is a Saturday. The change is made by hand in the Zoho form, so decide in advance who does it and when. See [the pricing card](#change/price-change). The Asana reminder exists but has no owner or steps yet.'}
  ],
  common:[
    {l:'Review team registrations',s:'This Year’s Teams',go:'tasks/review-teams'},
    {l:'Find a team or captain',s:'All Teams',go:'tasks/find-team'},
    {l:'Check payment status',s:'Payments',go:'tasks/check-payment'},
    {l:'Manage roster information',s:'Not built yet: see the steps for today',go:'tasks/roster-change'},
    {l:'Review vendor applications',s:'Review Applications',go:'tasks/review-vendors'},
    {l:'Track waivers',s:'Not built yet: see the steps for today',go:'tasks/waivers'},
    {l:'Handle a cancellation or correction',s:'Policy, team name, captain contact',go:'tasks/cancellation'},
    {l:'Manage pricing and deadlines',s:'The 20 March price change and key dates',go:'change/price-change'}
  ],
  broken:[
    {l:'A registration isn’t appearing',go:'fix/cant-find'},
    {l:'A payment was received but the record wasn’t updated',go:'fix/payment-not-recorded'},
    {l:'A participant entered incorrect information',go:'fix/incorrect-info'},
    {l:'A confirmation email wasn’t received',go:'fix/no-confirmation'},
    {l:'A registration appears twice',go:'fix/appears-twice'},
    {l:'A link or form isn’t working',go:'fix/form-or-link'}
  ],
  help:'Start with the problem on [Fix a Problem](#fix), then use the person for the role. **Store and Finance** handle refunds, duplicate charges and PayPal disputes. **Tom** handles Zoho Campaigns sends. **Christy** has the new-member list. For the form, emails, automations, PayPal settings and page builds, send a request to **technical support** (currently Martha, with a backup still to be named). You are the contact who logs each request and gathers the details; you are not expected to build or manage the technical work. The full list is in [Roles and support](#ref/roles).'
},

/* ============================ I NEED TO... ============================ */
tasks:{
  intro:'Each task says where to go, the steps, and how to confirm it worked. A star marks everyday tasks. A label appears only where something is not fully working yet. Where a capability is not built, the card says what to do today, what is planned, and what is missing. For changing wording, forms, prices or pages, see [Make a Change](#change).',
  groups:[
  {t:'Teams, captains and rosters',items:[
   {id:'review-teams',t:'Review team registrations',star:1,
    what:'See who has registered and make sure each registration looks right.',
    where:[['Derby > This Year’s Teams',PG.teams27],['Derby > Needs Attention',PG.attn]],
    steps:['Open This Year’s Teams and set the Derby year dropdown to 2027.','Check the columns: the team, division, hunters, roster count, price tier, payment, amount and date.','If a registration is held or flagged, open Needs Attention and follow its notes.'],
    confirm:'Each registered team shows payment Paid and the amount you expect, and nothing is waiting for it on Needs Attention.',
    wrong:'A team says it registered but is not listed: see [A registration isn’t appearing](#fix/cant-find).',
    sn:'Real 2027 data: none yet. A kept TEST sample may show.'},
   {id:'find-team',t:'Find a team or captain',star:1,status:'verify',
    what:'Look up one team or its captain.',
    where:[['Derby > All Teams',PG.all],['Derby > This Year’s Teams',PG.teams27]],
    steps:['Use the page search in All Teams, or open This Year’s Teams.','Search by team name.','If you search by captain name or email and it does not work, search by team name and note it on the improvement list.'],
    confirm:'One team appears, with its captain.',
    sn:'Searching by captain name or email is not confirmed yet.'},
   {id:'roster-change',t:'Update a roster: add or replace a team member',star:1,status:'dev',
    what:'A team asks to change who is on its roster. Approved policy: teams may change their members.',
    wt:'No page shows or edits rosters yet. A roster is created automatically for every team.',
    steps:['Confirm the change with the captain.','Record it with the text below: the team, who is out, and who is in (with their email).','Send the request to technical support through the improvement list. Do not edit the Inbox row. It is the record of what was submitted.'],
    copy:'Roster change request: [Team name]\nCaptain (name, email): \nOut: [name]\nIn: [name, email]\nConfirmed with the captain on: [date]\nNeeded by: [date]',
    confirm:'Once the change is made, the roster count on This Year’s Teams is right and the new member is linked to one person record.',
    wrong:'The captain needs the change by a deadline, such as the Captains Meeting: tell technical support the date when you send the request.',
    gap:{head:'Not built yet: roster viewing and editing',rows:[
      ['Supported today','A roster is created automatically for every team. Team name and team details can be edited on Team Detail. Roster members cannot be viewed or edited on any page. Roster fields are read-only lookups.'],
      ['Interim workaround','**No verified safe way to make the roster change yourself.** The safe holding step is to record each change with the text above so nothing is lost and nobody edits the Inbox row.'],
      ['Planned','A Rosters and Waivers page on the Derby Roster table: view a roster, edit a member’s status, and add a member linked to an existing person. Approved 3 Nov. Not built.'],
      ['Follow-up needed','Build the page (backlog item 2). Until then, agree a turnaround with technical support for roster requests.']]},
    refs:[['Implementation backlog','ref/backlog'],['Waivers','tasks/waivers']]},
   {id:'captain-contact',t:'Correct a captain’s email or phone',status:'dev',
    what:'A captain’s email address or phone number is wrong, so messages do not reach them.',
    where:[['Derby > This Year’s Teams',PG.teams27],['Derby > All Teams',PG.all]],
    steps:['Confirm the correct email or phone with the captain by phone or the best contact you already have.','Search the corrected email in This Year’s Teams and All Teams. If a person already exists with it, say so in your request.','Send the request to technical support with the text below.','After the edit, search the corrected email and confirm one person only.','Do not edit the Inbox row or re-run anything. It will not fix the person.'],
    copy:'Captain contact correction: [Team name]\nOld email / phone: \nNew email / phone: \nHow confirmed (phone call, reply from the captain): \nA person already exists with the new email? [yes / no]\nCaptain has asked for the confirmation to be re-sent? [yes / no]',
    confirm:'Search the corrected email and find one person only, with the team linked.',
    wrong:'If the old address belongs to a real person who received a receipt, tell Finance. A wrong email can also create a second person on the captain’s next registration, so do not let the correction wait.',
    gap:{head:'Not built yet: editing a captain',rows:[
      ['Supported today','No Derby page edits a person. The check-in admin interface has a person page with editable Name, Email and Phone, but it lists only flagged people and is not linked from Derby, so it is not a supported route.'],
      ['Interim workaround','Confirm the details with the captain, then send the request above. An admin (currently Martha) makes the edit. This is the documented interim, and it is temporary. No turnaround has been agreed yet.'],
      ['Planned','An “Edit a Captain or Team Member” page in the Lionfish Derby interface, showing Name, Email and Phone only, with a search by team or email. A matching pattern already exists on the Conservation Partner interface (Edit a Partner Record). Approved 3 Nov. Not built.'],
      ['Follow-up needed','Build the page (backlog item 1). Meanwhile agree a turnaround and a named admin for these requests. Once the CRM sync is on, a corrected email must also reach the CRM.']]},
    refs:[['Implementation backlog','ref/backlog'],['A captain entered the wrong email address','fix/wrong-email']]},
   {id:'team-name',t:'Correct a team name',star:1,status:'verify',
    what:'Fix a typo in a team name, or another team detail.',
    where:[['Derby > All Teams',PG.all]],
    steps:['Open Derby > All Teams and click the team.','On Team Detail, click Team Name, type the corrected name, and click away. You can also edit Division, Home City, Home State and Notes.','Open Derby > This Year’s Teams, open that team’s 2027 registration, and check the Registration label. If it still holds the old spelling, correct it there as well.','Do not edit the Inbox row. It is the record of what was submitted.'],
    confirm:'Reopen the record and search the new spelling in All Teams. One team shows. The old spelling finds nothing.',
    wrong:'To merge two team records, or move a registration from one team to another, ask technical support.',
    sn:'The page is set up for editing. Do the first edit on the sample record to prove it. A team record is shared across years, so a rename shows in past results too. Fix typos freely. If the team really changed its name, put the old name in Notes so history stays findable. Teams are matched to returning captains by name plus roster, so a rename can affect matching next year.'},
   {id:'duplicate-people',t:'Review possible duplicate people',status:'verify',
    what:'Decide whether a “possible duplicate person” note means the same person was entered twice.',
    where:[['Derby > Needs Attention',PG.attn]],
    steps:['Open Needs Attention and read the “possible duplicate person” note.','Decide whether it is the same person, and write your conclusion in Processing Notes.','To merge two person records, send technical support both names, both emails and your reason. A merge is a data change.'],
    confirm:'The note shows your conclusion, and after a merge a search finds one person.',
    sn:'Whether Derby duplicate flags also show on the shared duplicate review page in the check-in admin interface is not confirmed.'}
  ]},
  {t:'Payments, cancellations and refunds',items:[
   {id:'check-payment',t:'Check payment status',star:1,
    what:'See whether a team has paid and how much.',
    where:[['Derby > Payments',PG.pay]],
    steps:['Open Payments and filter by Payment and Price tier. Values are Paid, Pending, Refunded and Unknown (historic).','Find the team and read the amount.','PayPal is the source of truth. This page shows payment fields you could edit: look, do not change them (see [Process a refund or payment exception](#tasks/refund)).'],
    confirm:'The status and amount match PayPal.',
    wrong:'See [Someone paid but the record does not show payment](#fix/payment-not-recorded).'},
   {id:'see-attention',t:'Check what needs attention',star:1,
    what:'See which registrations Airtable held for a person to look at.',
    where:[['Derby > Needs Attention',PG.attn]],
    steps:['Open Needs Attention. It shows Derby submissions in Needs Review or Error, newest first.','Read the Processing Notes on each and follow them. You can add your own note.','Leave the submitted fields as they are: they are the record of what the captain sent.'],
    confirm:'Each item has been checked and marked reviewed.',
    sn:'Several submitted fields on this page can be edited. A read-only version would make it safe to work in with no care needed. Add it to the improvement list (backlog item 11).',
    refs:[['Normal flags, not problems','ref/how-it-works']]},
   {id:'cancellation',t:'Handle a team cancellation',star:1,
    what:'A team asks to cancel. The approved policy is no refunds, and the team may change its members.',
    steps:['Reply with the policy: REEF does not issue refunds, and the team may change its members.','Do not delete records. Offer the roster change if it fits (see [Update a roster](#tasks/roster-change)).','Note the request.'],
    confirm:'The registration stays as history and you have noted the request.',
    wrong:'The captain asks for an exception: see [Handle an exception](#tasks/exception).'},
   {id:'exception',t:'Handle an exception or a duplicate, mistaken or wrong-price payment',star:1,
    what:'A payment case is different from a cancellation. You decide exceptions and payment cases.',
    steps:['Record the facts: who asked, what happened, and why.','Decide the outcome and tell the captain.','Send Store and Finance the details to process any refund (see [Process a refund](#tasks/refund)).'],
    confirm:'You have recorded your decision and replied to the captain.',
    wrong:'A PayPal or bank dispute: do not reply in PayPal. Forward the notice to Store and Finance the same day.',
    who:'You decide exceptions and payment cases. Store and Finance process any refund.',
    refs:[['Payments, refunds and exceptions (policy)','ref/payments']]},
   {id:'refund',t:'Process a refund or payment exception',
    what:'A captain is owed money back, for example for a duplicate, mistaken or wrong-price payment, or an exception you approved.',
    wt:'There is no page for this. You decide and send the details; Store and Finance process the refund in PayPal.',
    steps:['Decide the outcome (cancellations are not refunded; exceptions and payment cases are your decision).','Send Store and Finance: the team, the captain’s email, the PayPal transaction ID or IDs, the amount paid and the amount expected, and what you decided.','Do not change PayPal or the payment fields in Airtable yourself.','Reply to the captain once Finance confirms.'],
    confirm:'Finance confirms they have it, and the registration shows the amount PayPal charged.',
    wrong:'The charge looks like a form or Flow fault: also tell technical support.',
    who:'You decide. Store and Finance process any refund and handle PayPal disputes.'},
   {id:'find-missing',t:'Find a missing submission',
    what:'A captain or vendor says they registered, but you cannot find them.',
    where:[['Derby > Needs Attention',PG.attn],['Derby > This Year’s Teams',PG.teams27]],
    steps:['Search This Year’s Teams for the team name and email spellings.','Check Needs Attention, then the PayPal report, then Zoho entries if you have access.','Wait 10 minutes after a payment before worrying.'],
    confirm:'You find the record, the held row, or the PayPal payment.',
    wrong:'A payment is in PayPal but there is no Zoho entry or Airtable row after 10 minutes: see [A registration isn’t appearing](#fix/cant-find).'},
   {id:'automation-check',t:'Check whether an automation stopped',status:'interim',
    what:'Make sure every PayPal payment has a matching registration. This is a manual check; the Derby Flow has no failure alert of its own.',
    steps:['Compare the last week of PayPal payments with the registrations.','Send any mismatch to technical support with the details listed on [Fix a Problem](#fix).'],
    confirm:'The counts match and the staff alert arrives at lionfish@reef.org.',
    sn:'Your PayPal view access is not confirmed yet, so the comparison may need a weekly report from Finance. No owner or recurring reminder is set up (see backlog item 3).'}
  ]},
  {t:'Arts Festival vendors',items:[
   {id:'review-vendors',t:'Review vendor applications',star:1,status:'verify',
    what:'Review each application and set its status and fee basis.',
    where:[['Vendors > Review Applications',PG.review]],
    steps:['Open Review Applications. It shows pending applications, oldest first.','Set Status and confirm Fee Basis, then tick Fee Basis Confirmed.','A nonprofit is proposed as Waived: Nonprofit. Check the verification link.'],
    confirm:'The application shows your Status, and Fee Basis Confirmed is ticked.',
    wrong:'A vendor says they applied but you cannot find them: see [A vendor says they applied](#fix/vendor-missing).',
    sn:'No real 2027 application has been processed yet.'},
   {id:'vendor-decision',t:'Accept, waitlist or decline a vendor',status:'interim',
    what:'Make your decision on a vendor application. Capacity is 50 booths.',
    where:[['Vendors > Review Applications',PG.review]],
    steps:['Set Status, Waitlisted and Booth Assignment on the page. These changes send nothing by themselves.','Email the vendor yourself from lionfish@reef.org to tell them your decision (approved interim).'],
    confirm:'Status shows your decision and the vendor has been told.',
    sn:'Your decision. No email goes out automatically.'},
   {id:'vendor-invite-pay',t:'Invite a vendor and collect the $100',status:'dev',
    what:'Approved vendors pay a flat $100 fee. Nonprofits and government agencies are waived, and the application itself is free.',
    where:[['Vendors > Invite Queue',PG.invite]],
    wt:'The pages exist and two Acceptance forms exist, but the connection that records a vendor’s payment is not built.',
    steps:['Nothing is due before the 15 March review, so there is time. Do not send a payment link yet.','If a vendor asks, tell them applications are reviewed after 1 March and invitations with the payment link follow.'],
    confirm:'The vendor knows the timeline.',
    wrong:'A vendor needs to pay before the Acceptance flows exist: do not take payment another way. Log it on the improvement list and ask Store and Finance.',
    gap:{head:'Not built yet: vendor invitation and payment',rows:[
      ['Supported today','Applications and review work (see [Review vendor applications](#tasks/review-vendors)). Two Acceptance forms exist (paid and fee-waived), but no Flow connects them to Airtable.'],
      ['Interim workaround','You can email individual vendors from lionfish@reef.org (approved 3 Nov). **There is no safe workaround for collecting the payment.** Do not send a payment link or take payment another way.'],
      ['Planned','Two permanent links (fee-paying and fee-waived), matched to the approved vendor by business name plus contact email. Design approved 3 Nov.'],
      ['Follow-up needed','Build and test the Acceptance flows before the 15 Mar 2027 review (backlog item 5). Also open: a one-line confirmation of how vendor email opt-in is handled.']]},
    refs:[['Implementation backlog','ref/backlog']]},
   {id:'vendor-email',t:'Email a vendor or captain (one person)',
    what:'Reply to a question, confirm what you decided, or give the next step.',
    steps:['Send it from lionfish@reef.org.','Reply to questions, confirm what you decided, and give the next step. No approval is needed for routine follow-up.'],
    confirm:'The person has what they need.'},
   {id:'vendor-list',t:'See the vendor day-of list',star:1,
    what:'See the approved vendors with booth, workers and contact.',
    where:[['Vendors > Vendor List',PG.vlist]],
    confirm:'The approved vendors are listed with booth and contact.'}
  ]},
  {t:'Waivers and communications',items:[
   {id:'waivers',t:'Track waivers',star:1,status:'dev',
    what:'Check whether each hunter has signed a waiver. Each participant signs their own.',
    wt:'No page shows waiver status yet. The waiver field on each roster row is not displayed anywhere.',
    steps:['Do not tell anyone reminders are automatic. None are sent today.','If a hunter or captain asks, tell them each participant signs their own waiver before the Captains Meeting and that details will follow. Do not promise a link date.','Decide your interim method for recording status (see below).'],
    confirm:'You know where waiver status is recorded and who updates it.',
    gap:{head:'Not built yet: waiver tracking and reminders',rows:[
      ['Supported today','Nothing automated. No page shows waiver status, and the Waiver Inbox table exists but is empty.'],
      ['Interim workaround','**No approved or verified workaround yet.** You own the waiver process and set the interim (decided 3 Nov). The recommended approach: once the Rosters and Waivers page exists, update each hunter’s waiver status by hand from Smartwaiver’s list and email reminders from lionfish@reef.org. Until the page exists there is no place in Airtable to record status, so you decide where to track it in the meantime.'],
      ['Planned','Each hunter signs in Smartwaiver. Airtable tracks status. Reminders count back from the Captains Meeting date (35, 21, 14, 7 and 3 days before). Check-in is blocked until a team’s waivers are complete, with a tablet or QR code on the day so a willing hunter is never turned away.'],
      ['Follow-up needed','Choose the interim; enter the Captains Meeting date (Thursday 22 April 2027) in Airtable, which needs an admin; build the Rosters and Waivers page (backlog item 2); connect Smartwaiver and reminders (backlog item 8).']]},
    refs:[['Waivers and captain communications','ref/waivers-comms'],['A hunter or captain asks about the waiver','fix/waiver-question']]},
   {id:'announcement',t:'Send an announcement to all captains',status:'interim',
    what:'Tell all registered captains something about the event.',
    steps:['Send event-logistics updates from lionfish@reef.org to the registered captains’ registration emails (approved 3 Nov).','Marketing and fundraising messages stay in Zoho Campaigns, sent by Tom.'],
    confirm:'The captains have the message.',
    sn:'Approved until the Campaigns sync is on. Zoho Campaigns (Tom) is the long-term route; the captain segment has 0 members and the sync is off.'}
  ]},
  {t:'Pricing, deadlines and the form',items:[
   {id:'price',t:'Change the registration price on 20 March',star:1,status:'verify',
    what:'Registration goes from $90 Early Bird (through 19 March 2027) to $120 Regular on 20 March 2027, which is a Saturday. Alli owns the change and its check (decided 3 Nov).',
    wt:'The full steps, test and confirmation are on the Make a Change tab.',
    where:[['Zoho Forms: Derby form',FORM],['Asana task',ASANA_PRICE]],
    sn:'Exact clicks after the PayPal Checkout switch are not written yet. The Asana task has no owner or steps yet.',
    refs:[['Full steps, test and confirmation','change/price-change'],['Key dates','tasks/key-dates'],['A payment was made at the wrong price','fix/wrong-price']]},
   {id:'key-dates',t:'Check key dates and deadlines',star:1,
    what:'Find the dates the Derby and Arts Festival run on.',
    steps:['**Mon 1 Mar 2027:** vendor applications close.','**Mon 15 Mar 2027:** vendor review date. Invitations and payments follow.','**Sat 20 Mar 2027:** price changes from $90 (Early Bird, through 19 Mar) to $120 (Regular).','**Thu 22 Apr 2027:** Derby starts, and the Captains Meeting. Waiver reminders count back from the Captains Meeting.','**Sun 25 Apr 2027:** Arts Festival day. 50 booths.'],
    confirm:'The dates match the 2027 event record in Airtable.',
    wrong:'The Captains Meeting date is not yet entered in Airtable, and it needs an admin until an Annual Events page exists.',
    refs:[['Key dates in Reference','ref/key-dates']]},
   {id:'wording',t:'Change the confirmation email wording',status:'verify',
    what:'Words only. Practice on the TEST CLONE first.',
    where:[['Zoho Forms: Derby form',FORM]],
    sn:'Your Zoho edit rights on the Derby form are not recorded. Forms were shared with program leads on 10 Oct at an unrecorded level. Confirm once.',
    refs:[['Full steps','change/confirmation-email']]},
   {id:'form-text',t:'Update form instructions and help text',status:'verify',
    what:'Text, help text and notices only.',
    where:[['Zoho Forms: Derby form',FORM]],
    refs:[['Full steps','change/form-instructions']]},
   {id:'form-structure',t:'Add, remove, rename or retype a form question or choice',
    what:'Other systems read the question names and choices, so a change here needs the Flow and Airtable checked. Send technical support the change you want and the date.',
    where:[['Zoho Forms: Derby form',FORM]],
    refs:[['Full steps','change/form-structure']]},
   {id:'page-words',t:'Edit the words on the REEF.org Derby page',status:'verify',
    what:'Program website content is yours. Edit the text around the form. The embedded form block (the iframe) is code: leave it alone, or ask technical support.',
    sn:'Your REEF.org editing access has not been confirmed. The pages are unpublished.',
    refs:[['Full guidance','change/page-words']]}
  ]},
  {t:'Improving the workflow',items:[
   {id:'improve',t:'Log an improvement idea',
    what:'Tell us what would make the program easier to run.',
    steps:['Add one line to the Derby team’s Asana project: what you were trying to do, what got in the way, and the kind (routine change, interface improvement, automation, technical problem, policy decision).'],
    confirm:'The item is in the Asana project.',
    refs:[['Which kind of change is it?','ref/improve']]}
  ]}
  ]
},

/* ============================ MAKE A CHANGE ============================ */
change:{
  banner:{t:'You can change the wording of the form and its emails.',x:'Each card says what is safe to change, what could affect connected systems, how to check your work, and when to bring in technical support. The steps come from the live screens and the Derby notes. They are labelled Needs Verification until you have run them once on the TEST CLONE; after that they become Working. Where a step cannot be done yet, the card names exactly what is missing.'},
  intro:'A change has three parts, and they are usually done by different people. **Spotting** what needs to change: anyone, and you will often notice first. **Deciding** how the program should work: you, within your authority, and the Executive Director for policy. **Making** a technical change in connected systems: technical support (currently Martha; a backup is not yet named). You run the Derby. You are the contact who logs each request and gathers the details. You are not expected to build or manage the technical work.',
  cards:[
   {id:'confirmation-email',type:'routine',t:'Change the registration confirmation email',status:'verify',
    what:'Update what a captain reads after registering, such as a clearer next step or your contact details. Safe to change: the words of the subject and message: instructions, thanks, your contact details, what happens next, the Captains Meeting plan.',
    where:[['Zoho Forms: Derby form',FORM]],
    wt:'Then Settings (under the form name), Email & Notifications, Email, tab New Record.',
    steps:['Open the Derby team form in Zoho Forms. Use the live form for a real change. Use the one with TEST CLONE in its name to practice.','Point at the form and click Settings under its name.','Under Email & Notifications, click Email. Stay on the New Record tab.','Find the email to the captain (subject: We received your 2027 Florida Keys Lionfish Derby team registration). Click the pencil icon. Do not click the trash can or the on/off switch.','Change the subject or the words in the message. Leave anything that looks like `${zf:...}` exactly as it is: those fill in the captain’s name and team.','Leave From, To and Reply-To alone. Click Save. Cancel throws your changes away.'],
    confirm:'Reopen the template and confirm your words saved. On the TEST CLONE that is the whole check, because nothing is sent. On the live form, read the confirmation that goes with the next real registration. A test send needs the TEST- procedure and a real $5 charge, so do not submit the form just to look.',
    depends:'The change is live for the very next registration. The other email on this page is the staff alert to lionfish@reef.org and is not part of this change. If the email mentions the cancellation policy or refunds, keep the approved wording: no refunds, teams may change members.',
    how:'Changing From, To or Reply-To, adding an attachment, adding a new email, or anything that would send before payment needs technical support. Replies to captains may reach the form admin instead of lionfish@: until that is fixed, put lionfish@reef.org in the email text.',
    sn:'The menu path comes from the Derby notes and matches the verified Conservation Partner form. It has not been run on the Derby form yet. Your Zoho edit rights on this form are unconfirmed (an access item to close once).'},
   {id:'form-instructions',type:'routine',t:'Update form instructions and help text',status:'verify',
    what:'Make the form clearer. Safe to change: instruction text, help text, descriptions, section headings, and the wording of explanations such as “Early Bird $90 through 19 March”.',
    where:[['Zoho Forms: Derby form builder',FORM]],
    wt:'Then Builder (left bar).',
    steps:['Open the form and click Builder in the left bar. Use the TEST CLONE to practice.','Click the text you want to change: a question title, the small help text under a question, or an instruction block. Type the new words.','Click Preview at the top right to see how it looks. Do not submit the preview.','On the Conservation Partner form the Builder has no Save button, so treat every edit as live. Confirm whether the Derby form behaves the same when you practice.'],
    confirm:'Open the public form in a private window and read the new wording. Confirm the form still loads and the PayPal button still appears. Log what you changed on the improvement list.',
    depends:'Other systems read the question names and the choices. Do not add, delete, move or change the type of a question. Do not change the choices in a list (the Division choices must stay exactly Reef Defenders and Apex Predators). Do not touch the PayPal payment field or the pre-checked news opt-in box and its notice, which is REEF’s standard wording.',
    how:'If you want a new question, a changed choice, a different required field, or different opt-in or privacy wording, send technical support the change and the date. They check the Flow and Airtable and test it.',
    sn:'Written from the verified Conservation Partner steps. Not yet run on the Derby form. Your Zoho edit rights are unconfirmed.'},
   {id:'price-change',type:'coord',t:'Change the registration price on 20 March 2027',status:'verify',
    what:'Switch from Early Bird ($90, through 19 March 2027) to Regular ($120, from 20 March 2027) on time, then confirm it worked. **Alli owns this change and its check** (decided 3 Nov).',
    where:[['Zoho Forms: Derby form builder',FORM],['Asana task',ASANA_PRICE]],
    wt:'The amount is set in the PayPal payment field’s Payment Amount setting (currently a fixed 90.00). Asana task: “Derby 2027: change registration price from $90 Early Bird to $120 Regular” (1219088172933163, due 2027-03-20).',
    steps:['**Check the numbers are still current.** Before you act, confirm the amounts and dates against the Asana task, the live form’s Payment Amount, and the 2027 event record. As of 3 Nov they agree: $90 through 19 March, $120 from 20 March 2027.','**Practice (any time before March).** On the TEST CLONE, find the PayPal field and its Payment Amount setting, change it to another amount, use Preview to confirm the form shows it, then change it back. Do not submit. Write the exact clicks below this card (they are not written yet: the live form moves to PayPal Checkout at cutover, so capture them after that).','**Technical pre-check (once, before March).** Ask technical support to confirm the Flow’s pricing-tier rule and Airtable’s price check switch to Regular on 20 March (the Asana task asks for this).','**Make the change.** 20 March 2027 is a Saturday: decide in advance who changes it and when, for example Friday evening or Saturday morning (Eastern). Change only the Payment Amount from 90.00 to 120.00. Update every sentence that quotes the price: the form text, the confirmation email, the REEF.org page.','**Confirm it.** Open the public form in a private window and check it shows $120 and the payment button amount matches. A colleague looking too is a good habit, not a requirement.','**Check the first payments.** On 22 to 26 March, check Needs Attention for “Amount paid $90 but Regular is $120” flags.'],
    confirm:'The public form shows $120. The first real payment after the change is $120 in PayPal, and Airtable assigns Regular to it. No new price-check flags appear.',
    depends:'The amount drives what PayPal charges and how Airtable assigns the price tier. Do not touch the PayPal credentials, currency or the field type. Each new Derby year, the prices and dates also live in the Flow and the intake script, so that needs coordination. Approved policy: the price shown at checkout governs, so a team that pays $90 before the form is switched is honored even if it is after midnight on 20 March.',
    how:'If you are not sure which setting to edit, if the amount does not show as expected, or if any payment arrives at the wrong price, see [A payment was made at the wrong price](#fix/wrong-price) and ask technical support.',
    who:'Alli owns the change and its check. The prices and dates were decided as part of the 2027 Derby registration design.',
    sn:'Still missing: the exact clicks after the Checkout switch, confirmed Zoho edit rights, and the one-time technical pre-check. The existing Asana task is still assigned to Martha with no project or steps. Recommended setup (not created): owner Alli, due 2027-03-20, a reminder on or before 5 March, and subtasks for the practice run, the pre-check, the change and the flag check.',
    refs:[['Key dates','tasks/key-dates'],['Implementation backlog','ref/backlog']]},
   {id:'form-structure',type:'coord',t:'Add, remove, rename or retype a form question or choice',
    what:'Wording is yours. Structure changes (adding, removing, renaming or retyping a question or choice) need a quick technical check.',
    where:[['Zoho Forms: Derby form',FORM]],
    steps:['Write down the change you want, why, and the date you need it.','Send technical support the details.','They check the Flow and Airtable, make or review the change, and test it with a TEST- registration.','Once it is confirmed, tell the team and update this playbook if the steps change.'],
    confirm:'A test registration lands in Airtable with every answer in the right place and nothing held.',
    depends:'Other systems read the question names and the choices. The Division choices must stay exactly Reef Defenders and Apex Predators. Do not touch the PayPal payment field or the pre-checked news opt-in box.',
    how:'Tell technical support what you want to achieve, not only which setting to change, and they will find the places that need to match.'},
   {id:'event-comms',type:'routine',t:'Update your own procedures and event communications',
    what:'The wording of emails to captains and vendors, your interim procedures for waivers and roster requests, your checklists, and anything you tell participants about how the event works.',
    steps:['Send one-to-one emails and event-logistics announcements from lionfish@reef.org.','Keep the approved policy wording whenever you mention cancellations or refunds: no refunds, teams may change members.','Update this playbook when a procedure changes, so the next person finds the current version.'],
    confirm:'The people affected have the new information, and this playbook matches what you do.',
    depends:'Marketing and fundraising messages go through Zoho Campaigns (Tom). Opt-in and privacy wording is standard REEF wording and is part of the form.',
    how:'Tell Tom before any change to the shared contact sync. Nothing automated should start without explicit approval.'},
   {id:'page-words',type:'routine',t:'Edit the words on the REEF.org Derby page',status:'verify',
    what:'The text around the registration form on the Derby page.',
    wt:'The Derby registration page and thank-you page on reef.org (both unpublished until launch).',
    steps:['Edit the text, headings and links around the form.','Leave the embedded form block (the iframe) alone.','Check the page in a private window after saving.'],
    confirm:'The page reads correctly and the form still loads with its payment button.',
    depends:'The embedded form block is code. A change to it can stop the form working. In Drupal it must be edited in Source mode, not in the visual view.',
    how:'If the form block, a redirect or the page address needs to change, ask technical support, who will involve the website developer (who is heavily backlogged, so plan ahead).',
    sn:'Your REEF.org editing access has not been confirmed. The Conservation Partner playbook has tested step-by-step instructions for the REEF.org editor; they have not been tested on the Derby pages.'},
   {id:'sender-recipient',type:'coord',t:'Change who emails come from, or who receives alerts',
    what:'The From, To and Reply-To of the confirmation email and the staff alert to lionfish@reef.org.',
    where:[['Zoho Forms: Derby form',FORM]],
    steps:['Tell technical support what should change and why.','They make the change in Zoho (only verified senders are available) and send a test.'],
    confirm:'The next real registration produces a confirmation and an alert from the right sender, and replies reach lionfish@reef.org.',
    depends:'Zoho only allows verified senders. The staff alert is sent from martha@reef.org because Zoho only allows Zoho users as senders. When the sender is notifications@zohoforms.com, replies can go to the form admin rather than lionfish@reef.org.',
    how:'Until the reply handling is settled, make sure the email text names lionfish@reef.org as the contact.'},
   {id:'next-year',type:'coord',t:'Set up the next Derby year (prices, dates, event details)',
    what:'Prices, dates and event details for a new Derby year.',
    steps:['Decide the new year’s prices, dates and event details.','Send technical support the details and the date registration should open.','Technical support updates the form, the Flow, the intake script and the event record, and runs a TEST- registration.'],
    confirm:'A test registration is priced and tiered correctly for the new year.',
    depends:'Each new Derby year, the prices and dates also live in the Flow and the intake script, not only in the form.',
    how:'Allow lead time. Storing prices and dates on the event record (so a new year is data entry, not a script change) is on the backlog.',
    sn:'See backlog item 12.'},
   {id:'program-policy',type:'decision',t:'Change a program policy: refunds, fees or vendor fee waivers',
    what:'Individual exceptions are yours to decide. Changing the policy itself, such as the no-refund rule for cancellations, the fee amounts, or who is waived from the vendor fee, is a program and financial decision.',
    steps:['Write down what you want to change and why.','Raise it with the Executive Director (and Finance if money is involved) so the new rule is clear for everyone.','Once it is decided, update the confirmation email and form wording, the Fix a Problem cards and this playbook.','Ask technical support to check whether form or Flow settings need to match.'],
    confirm:'The form, emails, this playbook and what staff say to captains all state the same rule.',
    depends:'Wording in the form and emails, the payment amount in PayPal, and the price checks in Airtable all assume today’s rules.',
    how:'Tell technical support what the rule should be, and they will find the places that need to match.',
    who:'You decide individual cases. The Executive Director decides changes to the policy itself, with Finance for money.'}
  ],
  sections:[
   {id:'who-does-what',t:'Who does what when something needs to change',blocks:[
     {table:{head:['Step','Who','How'],rows:[
      ['Spot a needed improvement','You or anyone on the team','Add one line to the Derby team’s Asana project: what you were trying to do, what got in the way, and the kind.'],
      ['Decide how the program should work','You, within your authority. The Executive Director for policy. Finance for money.','Use the matching card above.'],
      ['Make a technical change (forms, Flows, automations, PayPal settings, interface pages)','Technical support (currently Martha; a backup is not yet named)','Send the details. You do not need to build or manage the technical work.'],
      ['Check it worked','You, with a colleague if you like','Use “Check it worked” on the card.']
     ]}}
   ]},
   {id:'safeguards',t:'Protect the connections',blocks:[
     {p:'A few things are protected because other systems depend on them. Each has a reason, and each has a way to get the job done.'},
     {table:{head:['Safeguard','Why it exists','How to get the job done'],rows:[
      ['**Do not delete an Inbox row or set a Processed row back to New.**','The Inbox row is the permanent record of what the captain submitted and paid. Running it again would create a second registration.','To fix people or teams, edit the Team or person record instead.'],
      ['**Run test submissions only with the TEST- procedure.**','A test payment is real money and writes to the live Inbox.','Practice on the sample records and the TEST CLONE instead (see the practice session in Reference).'],
      ['**Payment settings and payment fixes go through the right role.**','A duplicate, mistaken or wrong-price payment is handled with Store and Finance, not by editing PayPal or the payment fields.','See [Process a refund or payment exception](#tasks/refund).'],
      ['**Edit only what a page shows.**','Airtable pages cannot lock individual fields, and payment fields are editable on some pages.','Leave payment fields alone unless a card tells you to change them.']
     ]}}
   ]}
  ]
},

/* ============================ FIX A PROBLEM ============================ */
fix:{
  intro:'Most of these you can handle yourself. Each card shows what happened, what to check first, what you can do, how to confirm it is fixed, and who can help when it is not.',
  collect:{t:'Before you ask technical support for help with a Flow, an Airtable automation, PayPal or the form connection, collect:',items:['The team or organization name and the registrant’s email address.','The date and time (with time zone) of the payment or submission.','The PayPal transaction ID, if there was a payment.','The Inbox Submission ID or Zoho entry, if you can see one.','A screenshot of what you see, and a line on what you expected.','Whether more than one team or vendor is affected.']},
  groups:[
  {t:'Registrations and payments',items:[
   {id:'cant-find',t:'A registration isn’t appearing',sees:'Someone says they registered, but I cannot find them.',
    cause:'The registration is often there under a different spelling, or held for review, or still processing.',
    check:'Open This Year’s Teams and search team name and email spellings. Then Needs Attention, the PayPal report, and Zoho entries if you have access.',
    do:'Look, and tell the captain you are checking. Wait 10 minutes after a payment before worrying.',
    confirm:'You find the record, the held row, or the PayPal payment.',
    escalate:'A payment is in PayPal but there is no Zoho entry or Airtable row after 10 minutes. Collect the details above and contact technical support: it may be a Flow failure.',
    who:'Technical support.'},
   {id:'payment-not-recorded',t:'A payment was received but the record wasn’t updated',sees:'Someone paid but the registration does not show payment.',
    cause:'Paid detection depends on the PayPal transaction ID arriving. The row may be held.',
    check:'Payments page (Pending or Paid), PayPal, and Needs Attention for a held row.',
    do:'Look and compare. Do not change Payment Status or Amount Paid by hand unless a decision says you may.',
    confirm:'Payment shows Paid and the amount matches PayPal.',
    escalate:'The transaction ID is missing on more than one row, or PayPal shows money with no Airtable row. Technical support, with the details above.',
    who:'Technical support. Store and Finance for payment questions.'},
   {id:'form-not-in-airtable',t:'A submitted form is not showing in Airtable',sees:'A Zoho entry exists but no row appears in Airtable.',
    cause:'Runs usually take seconds. A form entry with no Airtable row means the connection failed.',
    check:'Wait a few minutes. Then Needs Attention, PayPal, and Zoho entries.',
    do:'Look only. Do not resubmit; that could charge the captain twice.',
    confirm:'The row appears and reaches Processed.',
    escalate:'A Zoho entry exists with no Airtable row. Technical support with the entry details.',
    who:'Technical support.'},
   {id:'appears-twice',t:'A registration appears twice',sees:'The same team or captain shows up twice.',
    cause:'One payer with two teams legitimately submits twice. One team with two payments is a duplicate payment.',
    check:'Needs Attention notes and how many PayPal payments exist.',
    do:'If it is two real teams, you are done. If it is one team with two payments, follow [A duplicate payment](#fix/duplicate-payment).',
    confirm:'One registration per team.',
    escalate:'Two registrations that are not the same team, or you cannot tell. Technical support, with both team names.',
    who:'Technical support.'},
   {id:'duplicate-payment',t:'A duplicate payment (the same team paid twice)',sees:'PayPal shows two payments for one team.',
    cause:'A real duplicate is not the same as a cancellation. The no-refund policy was written for cancellations.',
    check:'Needs Attention notes (“Duplicate Submission ID”, “already has a 2027 registration”), and how many PayPal payments exist for the team.',
    do:'Confirm there is one registration and two payments. Do not change PayPal. Tell the captain it is being reviewed.',
    confirm:'One registration for the team, and a message to Store and Finance with both transaction IDs.',
    escalate:'Once you have decided, send Store and Finance both transaction IDs to process any refund. Do not change PayPal yourself.',
    who:'You decide. Store and Finance process any refund.',
    refs:[['Process a refund','tasks/refund']]},
   {id:'wrong-price',t:'A payment was made at the wrong price',sees:'A team paid $90 after the price became $120, or the form shows the old amount.',
    cause:'Most often the price switch on 20 Mar was late or early, or the form shows the old amount.',
    check:'Payments page and the PRICE CHECK note on Needs Attention. Open the public form to see the amount it shows now.',
    do:'Do not edit Amount Paid or Tier in Airtable to make it match: PayPal is the truth. Record the team, amount paid and amount expected, decide whether the difference is collected or honored, and tell the captain.',
    confirm:'The record shows the amount PayPal charged, and the case is with Store and Finance.',
    escalate:'Send Store and Finance your decision to process. If the form itself shows the wrong price, correct it or get it corrected right away so more teams are not affected.',
    who:'You decide. Store and Finance process. Technical support if the form or Flow is at fault.',
    refs:[['Price change steps','change/price-change']]},
   {id:'mistaken-or-dispute',t:'A mistaken charge or a payment dispute',sees:'A charge the captain did not intend, or a PayPal or bank dispute opened by the captain.',
    cause:'A charge the captain did not intend, or a PayPal or bank dispute opened by the captain.',
    check:'The PayPal transaction, the registration, and any dispute notice.',
    do:'For a mistaken charge, decide and send Store and Finance the details. For a PayPal or bank dispute, do not reply in PayPal: forward the notice to Store and Finance the same day.',
    confirm:'Finance confirms they have it.',
    escalate:'Store and Finance process the outcome. Add technical support if the charge looks like a form or Flow fault.',
    who:'Store and Finance.'},
   {id:'cancel',t:'A team needs to cancel',sees:'A captain asks to cancel and get money back.',
    cause:'This is a cancellation, which has an approved answer.',
    check:'The registration date and what the captain is asking for.',
    do:'Reply with the policy: REEF does not issue refunds, and the team may change its members. Do not delete records. Offer the roster change if it fits.',
    confirm:'The registration stays as history and you have noted the request.',
    escalate:'The captain asks for an exception: see the next card.',
    who:'You.',
    refs:[['Handle a team cancellation','tasks/cancellation']]},
   {id:'exception',t:'A captain asks for an exception to the no-refund policy',sees:'A captain asks for an exception.',
    cause:'The policy covers a cancellation. An exception is a program decision, and it is yours.',
    check:'What exactly they are asking for, and why. Whether it is really a duplicate, mistaken or wrong-price charge instead.',
    do:'Listen and record who asked and why. You decide the exception. If you approve a refund, Store and Finance process it; do not touch PayPal yourself.',
    confirm:'You have recorded your decision and replied to the captain.',
    escalate:'You approved a refund (send Store and Finance the facts), or the case looks like a duplicate, mistaken or wrong-price charge (use those cards).',
    who:'You decide. Store and Finance process any refund.'}
  ]},
  {t:'Captains, teams and communications',items:[
   {id:'incorrect-info',t:'A participant entered incorrect information',sees:'A team name, captain email or phone, or a roster detail is wrong.',
    cause:'A typo or the wrong choice when registering.',
    check:'The team or person record, and what the captain tells you is correct.',
    do:'Team name or team details: correct them on Team Detail ([Correct a team name](#tasks/team-name)). Captain email or phone: [Correct a captain’s email or phone](#tasks/captain-contact). A roster member: [Update a roster](#tasks/roster-change). Do not edit the Inbox row.',
    confirm:'Search the corrected detail and find one team or person only.',
    escalate:'Captain and roster corrections currently need an admin (those pages are not built yet). Send the request with the details on the card.',
    who:'Technical support, until the Edit a Captain and Rosters pages exist.'},
   {id:'wrong-email',t:'A captain entered the wrong email address',sees:'The confirmation email went to the wrong place.',
    cause:'The confirmation email went to the wrong place, and a later registration could create a second person.',
    check:'The person’s record. Check whether the confirmation went to the wrong address.',
    do:'Confirm the right address with the captain by phone. Do not edit the Inbox row. Send the correction request from [Correct a captain’s email or phone](#tasks/captain-contact).',
    confirm:'Search the corrected email and find one person only.',
    escalate:'Until the Edit a Captain page exists, technical support applies the edit. If the old address belongs to a real person who received a receipt, tell Finance.',
    who:'Technical support. Finance if a stranger received a receipt.'},
   {id:'no-confirmation',t:'A confirmation email wasn’t received',sees:'A captain says they did not get the confirmation email.',
    cause:'It is usually the spam folder or a typo in the address.',
    check:'The email on the registration record, the captain’s spam folder, and that payment shows Paid.',
    do:'Tell the captain the registration is confirmed once the record shows Paid. If the email is wrong, use the captain-contact steps. Do not promise a resend.',
    confirm:'The captain finds it, or the record shows the right address.',
    escalate:'Several captains report the same problem. Technical support, with a screenshot of the form’s email settings if you can open them.',
    who:'Technical support.'},
   {id:'automation-stopped',t:'An automated notification seems to have stopped',sees:'The staff alert at lionfish@reef.org or the confirmation email is not arriving.',
    cause:'The staff alert or the confirmation email may be failing quietly.',
    check:'Compare PayPal payments with registrations for the last week.',
    do:'Check the lionfish@reef.org inbox and spam. Do not run test submissions without the TEST- procedure.',
    confirm:'The counts match and the alert arrives.',
    escalate:'Any mismatch, or the alert never arrives. Technical support.',
    who:'Technical support.'},
   {id:'waiver-question',t:'A hunter or captain asks about the waiver',sees:'Someone asks when or how to sign the waiver.',
    cause:'Waiver handling is planned but not live.',
    check:'Whether a Captains Meeting date has been set.',
    do:'Tell them each participant signs their own waiver before the Captains Meeting and that details will follow. Do not promise a link date.',
    confirm:'They know it is coming.',
    escalate:'The interim process has not been approved yet. See [Track waivers](#tasks/waivers).',
    who:'You own the waiver process.',
    refs:[['Waivers and captain communications','ref/waivers-comms']]}
  ]},
  {t:'Vendors',items:[
   {id:'vendor-missing',t:'A vendor says they applied but I cannot find them',sees:'A vendor applied but is not on Review Applications.',
    cause:'The application may be held, under a different business name, or not submitted.',
    check:'Review Applications (search the name), then Vendor Needs Attention, then the vendor’s email for the thank-you page.',
    do:'Ask them for the business name and email they used. Look only.',
    confirm:'You find the application, or the vendor resubmits.',
    escalate:'A Zoho entry exists with no Airtable row. Technical support, with the details above.',
    who:'Technical support.'},
   {id:'vendor-pay',t:'A vendor wants to pay or asks how',sees:'A vendor asks how to pay the $100.',
    cause:'The payment connection is not built yet, and nothing is due before the 15 Mar review.',
    check:'Their Status on Review Applications. Is Fee Basis confirmed?',
    do:'Tell them applications are reviewed after 1 Mar and invitations with the payment link follow. Do not send a payment link yet.',
    confirm:'The vendor knows the timeline.',
    escalate:'They need to pay before the Acceptance flows exist. Do not take payment another way: log it on the improvement list and ask Store and Finance.',
    who:'Store and Finance. Technical support for the Acceptance flows.',
    refs:[['Invite a vendor and collect the $100','tasks/vendor-invite-pay']]}
  ]},
  {t:'Pages and links',items:[
   {id:'form-or-link',t:'A link or form isn’t working',sees:'The registration form does not load, the PayPal button is missing, or a link will not open.',
    cause:'Possibly a page, embed or payment fault.',
    check:'Open the REEF.org page in a private window, open the public form link, and see whether the PayPal button loads. If an Airtable page will not open, check that you are signed in with the shared REEF Staff login.',
    do:'Do not edit the form. Screenshot it with the time and page address.',
    confirm:'The form loads and the PayPal button shows.',
    escalate:'Straight away: technical support. A message for captains while the form is down is not yet decided.',
    who:'Technical support. The website developer, through technical support, for page problems.'}
  ]}
  ]
},

/* ============================ REFERENCE ============================ */
ref:{
  intro:'Detail that is useful but not needed for routine work: how the system fits together, what is working, policies, roles, the build list and the history behind them.',
  sections:[
   {id:'status',t:'Where each piece stands',open:true,blocks:[
     {legend:'status'},
     {note:'A page existing does not mean the whole process works. “What you do today” is the current procedure.'},
     {h:'Team registration'},
     {table:{head:['Stage','Status','What it means','What you do today'],rows:[
      ['Public form and cutover','{verify}','The existing live form has the new opt-in wording (2 Nov) but is still on PayPal Standard. Moving it to PayPal Checkout needs a PayPal account administrator to enter the credentials. The REEF.org page and thank-you page are built and unpublished.','Do not announce the form. Publish order at launch: thank-you page first, then the registration page.'],
      ['Payment processing','{verify}','$1 live test passed 6 Oct on the live form. $5 end-to-end test passed on the TEST CLONE (Checkout). A real $90 payment has not gone through.','Review the Payments page weekly against the PayPal report.'],
      ['Airtable integration','{working}','Zoho Flow is on. Airtable automations are deployed, with recent runs succeeding and no failed runs found 2 Nov. Only two live runs so far, both $1 tests.','Check Needs Attention each working day once registration opens.'],
      ['Team and roster creation','{working}','Verified in tests: person, team, registration and roster are created. Rosters have no page for viewing or editing.','Teams: use Team Detail. Rosters: see [Update a roster](#tasks/roster-change).'],
      ['Confirmation emails','{verify}','The captain email exists and PayPal sends its own receipt. Reply handling is unconfirmed.','Name lionfish@reef.org in the email text.'],
      ['Staff notifications','{verify}','Email to lionfish@reef.org switched on 2 Nov, never tested. The shared Flow failure notice goes to the flow owner.','Check lionfish@reef.org daily.'],
      ['Price verification','{working}','Airtable flags a mismatch between amount paid and price tier. The $5 test trips this flag on purpose.','Read the PRICE CHECK note, confirm against PayPal.'],
      ['Exception handling','{interim}','Needs Attention gives plain notes. Duplicate, mistaken, wrong-price and disputed payments have no automated path, and some rules are open.','Use Fix a Problem and route payment cases to Store and Finance.']
     ]}},
     {h:'Arts Festival vendors'},
     {table:{head:['Stage','Status','What it means','What you do today'],rows:[
      ['Application form','{working}','Live test 10 Oct created the records. Nonprofit path untested. The live form still has the old opt-out wording; new wording comes at go-live.','Applications arrive in Review Applications.'],
      ['Application review','{verify}','Review Applications page exists with editable Status, Fee Basis and Booth fields. No real 2027 application yet. Four 2027 prospects are listed.','Review, set Status, confirm Fee Basis.'],
      ['Acceptance and rejection','{interim}','You set Status, Waitlisted and Booth Assignment. Nothing sends automatically.','Decide, then email the vendor yourself from lionfish@reef.org (approved).'],
      ['Vendor invitations','{dev}','Placeholder email text only. Approved design: two static payment links, with notices sent by a person (Campaigns).','Individual emails from lionfish@reef.org (approved), no payment link yet.'],
      ['Payment collection ($100)','{dev}','Two Acceptance forms exist (paid and fee-waived). No Flows connect them to Airtable. Design approved 3 Nov (two permanent links, matched by business name plus contact email). A test version adds an optional donation. Needed before 15 Mar 2027.','Nothing due before the 15 Mar review. Do not send a payment link.'],
      ['Payment tracking','{verify}','Payments and Reminders page exists. Paid At and Amount Paid are editable by hand, so do not edit them unless a decision tells you to.','Look; the flow will fill these once built.'],
      ['Vendor communications','{dev}','Only placeholder text. Sender will be lionfish@reef.org. Opt-in handling for vendor emails is awaiting a one-line confirmation.','Individual replies yourself.'],
      ['Day-of vendor list','{working}','Vendor List page shows approved vendors with booth and contact. No waivers or festival-day page yet.','Use it for planning; add improvement requests.']
     ]}},
     {h:'Waivers and captain communications'},
     {table:{head:['Piece','Status','What it means','What you do today'],rows:[
      ['Waiver tracking (Smartwaiver)','{dev}','Design only. Each participant would sign their own waiver, Airtable would track status, reminders would run from the Captains Meeting date. The Waiver Inbox table exists and is empty.','See [Track waivers](#tasks/waivers).'],
      ['Waiver reminders','{dev}','Captains Meeting is Thursday 22 April 2027. The planned schedule counts back from it. Not set up. Nothing sends today.','Your interim, described in [Track waivers](#tasks/waivers).'],
      ['Captain campaigns (Zoho Campaigns)','{dev}','The “Derby 2027 Captains” segment exists with 0 members. The Derby captain sync is off. Nothing has been sent.','Email captains from lionfish@reef.org (approved interim) until the Campaigns sync is on.'],
      ['Zoho CRM sync','{dev}','One Campaigns sync is shared by every audience. Tell Tom before any change to it.','Not yours to change.'],
      ['Abandoned-checkout capture','{dev}','Airtable side deployed; the Zoho webhook is not connected, so the table is empty.','Not required for launch.']
     ]}}
   ]},
   {id:'forms',t:'Which version of the form is which?',blocks:[
     {table:{head:['Version','What it is','Status'],rows:[
      ['**Existing live form**','The Zoho Derby team form that exists today. It takes $90 through PayPal Standard. On 2 Nov it received the new notice wording and the pre-checked news opt-in box.','{working} $1 live test passed 6 Oct'],
      ['**Updated test version**','A TEST CLONE of the form on PayPal Checkout. Used for the $5 end-to-end test.','{working} Not public. Its Flow is on and writes to the real Inbox, so use it only for TEST- entries.'],
      ['**New public registration process**','The Derby page on REEF.org with the form embedded, plus a thank-you page.','{dev} Not live. Pages are built and unpublished.']
     ]}},
     {callout:{t:'Launch status',x:'The new public registration is **not open yet**. Please do not tell captains the form is open until you hear it is published. What still has to happen first, and what can wait, is in [Launch readiness](#ref/launch).'}}
   ]},
   {id:'how-it-works',t:'How it works',blocks:[
     {h:'How a team registration moves'},
     {flow:[
      {t:'1. Captain registers and pays',s:'Zoho form on REEF.org, PayPal inside the form',e:'People use this',k:'use'},
      {t:'2. Zoho Flow',s:'Moves the registration to Airtable.',e:'Behind the scenes',k:'back'},
      {t:'3. Airtable Inbox',s:'Matches people and teams, creates records, holds anything odd',e:'Behind the scenes',k:'back'},
      {t:'4. Lionfish Derby interface',s:'Teams, payments, Needs Attention',e:'You work here',k:'you'}]},
     {h:'How an Arts Festival vendor moves'},
     {flow:[
      {t:'1. Applies',s:'Free Zoho application form',e:'Working',k:'use'},
      {t:'2. You review',s:'Review Applications page',e:'Needs Verification: not used for real yet',k:'you'},
      {t:'3. You accept, waitlist or decline',s:'Set Status on the page',e:'Interim Process: you, by hand',k:'man'},
      {t:'4. Invite and $100 payment',s:'Acceptance forms exist; the connection is not built',e:'In Development',k:'soon'},
      {t:'5. Day-of list',s:'Vendor List page',e:'Working',k:'you'}]},
     {later:'**Coming later, not live ({dev}):** Zoho CRM and Zoho Campaigns copy opted-in captains and vendors so announcements can go out from one place. A person approves and sends. Nothing sends automatically.'},
     {h:'What happens when a team registers'},
     {ol:['The captain fills in the Zoho form and pays in PayPal. The Flow runs only after a successful payment.','Zoho Flow puts one row in the Airtable Registrations Inbox.','Airtable marks it paid when the PayPal transaction ID arrives, finds or creates each person and the team, and creates the registration and roster.','Anything unusual is held in Needs Attention with a plain note. The registration may still exist.','The captain gets a confirmation email and a PayPal receipt.']},
     {callout:{t:'Normal flags, not problems',x:'“PRICE CHECK (registration WAS created)”, “possible duplicate person” and “near-match name” can appear on a registration that worked. Read the note, confirm, then mark it reviewed.'}},
     {h:'Where messages come from'},
     {table:{head:['Message','Source','Status'],rows:[
      ['Captain confirmation email','Zoho Forms, sent when the form is submitted. You can edit its wording (see Make a Change).','{verify} Replies may reach the form admin instead of lionfish@reef.org. Until that is settled, make sure the email text names lionfish@reef.org as the contact.'],
      ['Payment receipt','PayPal','{working}'],
      ['Staff alert on a new registration','Zoho Forms email to lionfish@reef.org. Switched on 2 Nov.','{verify} Not yet tested with a submission.'],
      ['Waiver links and reminders','Planned: Smartwaiver with Zoho Flow','{dev} Interim approach in [Track waivers](#tasks/waivers).'],
      ['Vendor invitations, reminders, declines','Planned. Sender lionfish@reef.org.','{dev} You can email vendors yourself in the meantime.'],
      ['Captain announcements and marketing emails','Zoho Campaigns, sent by a person. Never automatic.','{dev} Captain segment is empty and sync is off.']
     ]}},
     {h:'Systems in plain words'},
     {table:{head:['System','What it does','Do you open it?'],rows:[
      ['Zoho Form','Where a captain registers and pays.','For wording changes (see Make a Change)'],
      ['PayPal','Takes payment, keeps records, sends receipts.','Weekly checks, once your view access is confirmed'],
      ['Zoho Flow','Carries the registration into Airtable.','No. Technical support looks after it.'],
      ['Airtable Inbox and sorting','Never guesses, merges or drops. Holds odd cases for a person.','Through Needs Attention'],
      ['Lionfish Derby interface','Your daily workspace.','Daily'],
      ['Zoho CRM and Campaigns','Planned copies for approved announcements.','Not live']
     ]}},
     {note:'Technical detail, test history and automation status are under Behind the scenes.'}
   ]},
   {id:'launch',t:'Launch readiness',blocks:[
     {p:'These are not all equal. Payment, registration capture and critical notifications are tested before the public sees the form. Everything else can start manually or follow later.'},
     {h:'Required before public launch'},
     {ul:['Switch the live form’s payment gateway to PayPal Checkout. A PayPal account administrator enters the credentials.','Run one TEST- registration on the final live path (the approved Derby cutover step) and confirm: Inbox row Processed; team, registration and roster appear in the interface; PayPal receipt; confirmation email; staff alert at lionfish@reef.org. Store staff refund the test charge afterward.','Make sure the confirmation email text names lionfish@reef.org as the contact, so the Reply-To question does not block launch.','Confirm who receives the Zoho “Flow failed” notice, and that someone watches it.','Publish the thank-you page, then the registration page, and check both in a private window. Publishing needs an explicit yes.']},
     {h:'Required before staff handoff'},
     {ul:['Alli opens every link from her own login and completes the practice session.','Alli’s Zoho edit rights on the Derby form confirmed, and PayPal view access (or a weekly report from Finance) for the weekly check.','A named backup with admin access for technical support.','A safe way to correct a captain’s email or phone (the Edit a Captain page, approved, or an agreed interim with a turnaround).','A way to view and edit rosters (the Rosters and Waivers page, approved) before the first roster change request.','Alli decides exceptions and payment cases; Store and Finance process any refund.','A practice run for the 20 March price change (Alli owns it and its check).','A Help link inside the Airtable interface that opens this page.']},
     {h:'Can operate manually during the initial rollout'},
     {ul:['Waiver tracking and reminders: by hand until Smartwaiver is connected (Alli sets the interim).','Captain announcements: Alli’s emails from lionfish@reef.org until the Campaigns sync is on (approved).','Vendor acceptance, invitations and declines: Alli’s individual emails (approved). Payment collection must be ready by the 15 Mar review.','The 20 March price change: manual by design, with the second-person check.','Slack alerts and abandoned-checkout capture: not needed to launch.']},
     {h:'Future improvements'},
     {ul:['Automatic captain and vendor sync to Zoho CRM and Campaigns segments.','Smartwaiver sync and scheduled waiver reminders, with the check-in gate at the Captains Meeting.','Teams Overview, Check-in and Waivers pages; a returning-captains view.','A failure alert on the Derby Flow, and Slack alerts as an extra.','Read-only submitted fields on the Needs Attention page, and tighter edit rights on payment fields.']}
   ]},
   {id:'backlog',t:'Implementation backlog (needs technical work)',blocks:[
     {p:'These are capabilities that documentation alone cannot fix. They are listed here so you can see what is coming and what you are waiting on. You do not manage this work: technical support builds it. **How it is ordered:** P1 means you cannot do routine Derby work independently without it. P2 means a dated milestone depends on it. P3 reduces risk or effort and can wait.'},
     {table:{head:['#','Capability','Why it matters','Needed by','Status and next step'],rows:[
      ['**P1** 1','Edit a Captain or Team Member page (Name, Email, Phone; search by team or email)','Without it you cannot correct a captain’s contact yourself. Every correction waits for an admin.','Before the first real correction request','{dev} Approved 3 Nov. Build it in the Lionfish Derby interface (pattern exists in the Conservation Partner interface).'],
      ['**P1** 2','Rosters and Waivers page on the Derby Roster table (view, edit status, add a member linked to a person)','Without it you cannot see or change a roster or see waiver status.','Before the first roster change; waiver work starts in March','{dev} Approved 3 Nov. Also needs a rule for adding someone who is not yet in the system.'],
      ['**P1** 3','Your access confirmed: Zoho edit rights on the Derby form, REEF.org editing, PayPal view access or a weekly Finance report','Wording changes, page edits and the weekly payment check are blocked without them.','Before staff handoff','{verify} Access to confirm once.'],
      ['**P1** 4','A named technical backup with admin access','Admin-level changes wait on one person today.','Before staff handoff','Decision needed.'],
      ['**P2** 5','Vendor Acceptance flows: two permanent links, matched by business name plus contact email, tested','You cannot collect the $100 or record vendor payment without them.','15 Mar 2027 review','{dev} Design approved 3 Nov. The paid test form needs PayPal credentials entered by a PayPal administrator. Confirm vendor email opt-in handling.'],
      ['**P2** 6','Price-change readiness: exact clicks written after the Checkout switch, practice run, Asana task with an owner, steps and an earlier reminder','A late or missed switch means teams pay the old price. The price flag catches it after the fact.','Before 20 Mar 2027 (a Saturday)','{verify} Capture clicks on the TEST CLONE after cutover. Decide the Asana owner.'],
      ['**P2** 7','Captains Meeting date (Thu 22 Apr 2027) entered on the 2027 event record','The waiver reminder schedule counts back from it.','Before the first waiver link (18 Mar on defaults)','Needs an admin until an Annual Events page exists.'],
      ['**P2** 8','Waiver tracking and reminders (Smartwaiver with Zoho Flow)','Until then waivers are tracked by hand.','Before the first waiver link','{dev} Decide your interim now. Build after items 2 and 7. Check the Zoho Flow plan supports scheduled flows.'],
      ['**P2** 9','Public launch: PayPal Checkout switch, one TEST- registration on the final path, publish thank-you page then registration page','The public cannot register until it is done.','Before public launch','{verify} Needs a PayPal administrator and an explicit yes to publish. Not your task.'],
      ['**P3** 10','Reply-To so replies to the confirmation reach lionfish@reef.org','Replies may reach the form admin.','Before launch if possible','{verify} Workaround: name lionfish@reef.org in the email text.'],
      ['**P3** 11','Failure alert on the Derby Flow; test the staff alert; read-only submitted fields on Needs Attention; tighter edit rights on payment fields','Failures are silent today, and some fields are easy to edit by mistake.','After launch','{dev} The weekly payment comparison covers the first for now.'],
      ['**P3** 12','Captain and vendor sync to Zoho CRM and Campaigns (Tom); Teams Overview, Check-in and returning-captains views; abandoned-checkout capture; prices and dates stored on the event record','Convenience and risk reduction. One-to-one email from lionfish@reef.org works meanwhile.','After launch','{dev}']
     ]}},
     {note:'The full list of gaps and the decisions behind them is kept by technical support. Add a line to the improvement list for anything that is missing from this table.'}
   ]},
   {id:'payments',t:'Payments, refunds and exceptions',blocks:[
     {p:'REEF does not issue refunds. That is the approved policy for team cancellations, and it is preserved here. Other payment situations are different from a cancellation and are handled one at a time, with the right role. You decide exceptions and payment cases. Store and Finance process any refund, and you do not change payment settings or PayPal yourself.'},
     {table:{head:['Situation','What you do','Who decides or acts','Policy status'],rows:[
      ['Team cancellation','Reply with the policy: no refunds, teams may change members. Do not delete records.','Program manager','Approved: no refunds.'],
      ['Request for an exception','Record who asked and why, decide, and reply. Do not touch PayPal.','Program manager decides; Store and Finance process any refund','Decided 3 Nov: Alli approves exceptions.'],
      ['Duplicate payment','Confirm one registration and two payments, decide what to do, and tell the captain.','Program manager decides; Store and Finance process any refund','Decided 3 Nov: Alli decides. For reference, Conservation Partners treat a true duplicate as a refund by default.'],
      ['Mistaken charge','Record the facts, decide, and tell the captain. Send Store and Finance the details to process.','Program manager decides; Store and Finance process','Decided 3 Nov: Alli decides.'],
      ['Payment dispute','Do not reply in PayPal. Forward the notice to Store and Finance the same day.','Store and Finance','Handled by Finance.'],
      ['Incorrect registration price','Do not edit Amount Paid or Tier. Record the team, amount paid and expected, and decide. If the form shows the wrong price, fix it or tell whoever has admin access right away.','Program manager decides; Store and Finance process; technical support fixes the form','Decided 3 Nov: Alli decides whether the difference is collected or honored.']
     ]}}
   ]},
   {id:'key-dates',t:'Key dates',blocks:[
     {table:{rows:[
      ['Mon 1 Mar 2027','Vendor applications close.'],
      ['Mon 15 Mar 2027','Vendor review date. Invitations and payments follow this.'],
      ['Sat 20 Mar 2027','Price changes from $90 (Early Bird, through 19 Mar) to $120 (Regular). See [the price change card](#change/price-change).'],
      ['Thu 22 Apr 2027','Derby starts.'],
      ['Thu 22 Apr 2027','Captains Meeting. Waiver reminders count back from it (first waiver link on 18 Mar if the defaults hold).'],
      ['Sun 25 Apr 2027','Arts Festival day. 50 booths.']
     ]}},
     {note:'These dates were taken from the project records and the Asana task and checked against each other on 3 Nov 2026. Confirm them against the 2027 event record before relying on them. The Captains Meeting date is not yet entered in Airtable.'}
   ]},
   {id:'waivers-comms',t:'Waivers and captain communications: before the Captains Meeting',blocks:[
     {rows:[
      ['Set the date','The Captains Meeting is Thursday 22 April 2027. It is not yet entered on the 2027 event record, and the waiver reminder schedule counts back from it, so entering it is the first step. It needs an admin until an Annual Events page exists.'],
      ['Collect waivers','**Planned:** each hunter signs their own waiver in Smartwaiver (the plan includes the connection options). **Now:** nothing is automated and no manual process is approved. **Alli owns the waiver process and sets the interim.** Recommended: once the Rosters and Waivers page exists, update each hunter’s waiver status by hand from Smartwaiver’s list, and email reminders yourself from lionfish@reef.org.'],
      ['Track completion','Today there is no page that shows waiver status. The Rosters and Waivers page fixes that. The agreed design blocks check-in until a team’s waivers are complete, with a tablet or QR code on the day so a willing hunter is never turned away.'],
      ['Send reminders','**Planned:** reminders at 35, 21, 14, 7 and 3 days before the Captains Meeting, with a staff list at 7 and 2 days. Alli confirms or changes the timing. On the defaults, the dates are 18 Mar (first link), 1 Apr, 8 Apr, 15 Apr and 19 Apr (final notice), with the staff call list on 20 Apr. **Now:** none are sent. Do not tell anyone reminders are automatic.'],
      ['Communicate with captains','One-to-one: from lionfish@reef.org. Announcements: Zoho Campaigns through Tom is the long-term route, but the captain segment is empty and the sync is off. **Approved interim (3 Nov):** event-logistics updates go from lionfish@reef.org to the registered captains. Marketing and fundraising stay in Campaigns.'],
      ['Manage team changes','Team name: Team Detail. Captain contact and roster: requests to technical support until those pages exist.'],
      ['Check outstanding items','Before the meeting, review each team: payment Paid, roster complete and marked Final, waivers complete, captain contact valid, division confirmed, no open flags. Payments and Needs Attention work today. Roster and waiver checks are not built yet.']
     ]}
   ]},
   {id:'roles',t:'Roles and support',blocks:[
     {h:'Who owns what'},
     {table:{head:['Area','Kind'],rows:[
      ['Daily program management, registration review, vendor application review, vendor decisions','{routine}'],
      ['Team names, captain and roster details, routine participant follow-up (captain contact and roster edits wait on pages that are not built yet)','{routine}'],
      ['Event communications and wording: emails to captains and vendors, confirmation email text, form instructions, registration instructions','{routine}'],
      ['Program website content on REEF.org (the words around the form), once your editing access is confirmed','{routine}'],
      ['Adding, removing, renaming or retyping form questions and choices; the price change; senders and recipients','{coord}'],
      ['Merging duplicate people','{coord}'],
      ['Exceptions, duplicate, mistaken and wrong-price charges (the decision is yours; Store and Finance process any refund; disputes go to Finance)','{routine}'],
      ['Changing a program policy: refunds, fees, vendor fee waivers','{decision}'],
      ['Flows, Airtable automations, intake script, PayPal settings, access and permissions, reef.org embed code, Zoho CRM and Campaigns setup','{coord} Done by technical support']
     ]}},
     {h:'Spotting, deciding and building are different jobs'},
     {p:'You run the Derby and make program decisions within your authority. You are the contact who logs technical requests and gathers the details (decided 3 Nov). You are **not** expected to build or manage the technical development work. That belongs to technical support (currently Martha), and a named backup with admin access is still to be decided.'},
     {h:'Who can help'},
     {table:{head:['For','Role (today)'],rows:[
      ['Daily questions, captain and vendor follow-up, wording, tasks','Program manager (Alli)'],
      ['Flows, Airtable automations, form connections, PayPal settings, access','Technical support: currently Martha makes admin-level changes. Alli logs each request and gathers the details. A named backup with admin access is still to be decided.'],
      ['Refunds, duplicate or mistaken charges, PayPal disputes and reports','Store staff and Finance'],
      ['Zoho Campaigns and CRM sends; the shared contact sync (tell Tom before any change to it)','Tom'],
      ['New-member list for people who opt in','Christy (member database team)'],
      ['REEF.org page edits beyond text, embed code','Website developer, through technical support (heavily backlogged, so plan ahead)'],
      ['Vendor help','Beth Rosenow, only after Alli approves her interface access. Nothing is sent to Beth until then.']
     ]}}
   ]},
   {id:'practice',t:'Practice session: do real tasks',blocks:[
     {rows:[
      ['About an hour, with Alli doing the work','Alli operates and the builder watches. Use the kept sample records and the TEST CLONE only. No live payments for training. Anything Alli completes successfully becomes a Working card; anything she cannot do becomes a gap with an owner.'],
      ['1. Find a registered team','Open This Year’s Teams and find the sample team. **Ready now** if the kept TEST sample is present.'],
      ['2. Review payment status','Read the sample’s payment status on Payments and explain what PayPal confirms. **Ready now.**'],
      ['3. Find an item needing attention','Open Needs Attention and explain one note. **Needs prep:** a held sample row (or a screenshot walk-through).'],
      ['4. Correct a team detail','Fix a team name on the sample, check it, and put it back. **Ready now.** This also proves editing rights.'],
      ['5. Review a vendor application','Open Review Applications and set Status and Fee Basis on a TEST- application. **Needs prep:** one free TEST- application submitted with approval, then deleted.'],
      ['6. Update routine wording','Edit the confirmation email and a help text line on the TEST CLONE, reopen and check, then undo. **Needs prep:** confirmed Zoho rights. No submission.'],
      ['7. Spot a technical problem','Work the “form entry with no Airtable row” scenario and fill in the details checklist. **Ready now.**'],
      ['8. Name an incomplete workflow','Explain the interim for waivers or vendor payment. **Ready now.**'],
      ['Not ready: captain contact and roster changes','Practice the request steps only, until their pages exist.'],
      ['Close','Ask what Alli still cannot do alone. Sort each answer as a routine change, interface improvement, automation, technical problem or policy decision, and give each an owner.']
     ]}
   ]},
   {id:'improve',t:'Improving this workflow',blocks:[
     {callout:{t:'This workflow is designed to make Derby management easier.',x:'As you use it, please flag anything that feels confusing, unnecessarily manual, or difficult to find. We can continue refining the interfaces and automations based on how the program actually operates.'}},
     {p:'When something comes up, name what kind of thing it is. That tells us who picks it up.'},
     {table:{head:['Kind','Example','What happens'],rows:[
      ['**Routine change**','New wording in an email; a team name typo','You make it yourself. Use the card.'],
      ['**Interface improvement**','A page that is missing, a field you cannot edit, a filter that hides what you need','Add it to the improvement list.'],
      ['**Potential automation**','A reminder you keep sending by hand','Add it to the improvement list. Nothing automated starts without explicit approval.'],
      ['**Technical problem**','A payment with no record; a form that will not load','Use Fix a Problem, collect the details, and contact technical support.'],
      ['**Policy decision**','Changing the no-refund policy itself, or a case with no precedent','Raise it with the Executive Director. Individual exceptions are yours to decide.']
     ]}},
     {p:'Track these in the Derby team’s existing Asana project. There is no separate feedback tool. Each item needs one line: what you were trying to do, what got in the way, and which kind it is.'}
   ]},
   {id:'limits',t:'Known limitations',blocks:[
     {ul:['No real 2027 registration has gone through the live system yet.','Rosters have no page for viewing or editing yet. Captain contact corrections have no Derby page yet.','The staff alert to lionfish@reef.org is built but untested. The Zoho Flow failure notice goes to the flow owner only.','Waiver tracking, vendor acceptance and payment, and all vendor emails are not built.','Abandoned-checkout capture is not connected, so teams who start paying and quit are not recorded.','Airtable pages cannot lock individual fields. Edit only what the page shows, and leave payment fields alone unless a card tells you to change them.']}
   ]},
   {id:'tech',t:'Behind the scenes (technical detail)',blocks:[
     {note:'You do not need this to do your job. It is here for technical support and for anyone who wants the detail.'},
     {h:'Automation and test status log'},
     {rows:[
      ['Live form','Zoho Forms “Derby team form”. $90. New notice text and pre-checked “Yes, keep me posted” opt-in box (Reference Label “News Opt-In (Yes, keep me posted)”) added 2 Nov; the old opt-out box is hidden. PayPal Standard until the Checkout switch.'],
      ['Zoho Flow','Live and ON. Steps: buildDerbyMembers, buildDerbyAnswersOptin (15 inputs including newsOptin), Airtable Create record into the Registrations Inbox. The original buildDerbyAnswers step is removed but the function is kept for rollback.'],
      ['Airtable automations','“process new submission” and “mark paid and release to intake” deployed. The deployed script matches the v3 draft with the captain-only opt-in logic. Recent runs succeeded; no failed runs found 2 Nov.'],
      ['Tests','$1 live test 6 Oct. $5 end-to-end test passed on the TEST CLONE (Checkout). The $5 amount trips the price check on purpose. TEST CLONE Flow shows ON and writes to the real Inbox, so only TEST- entries.'],
      ['Embed pages','REEF.org Derby registration page (node 19362) and thank-you page (node 19363) unpublished. The iframe sandbox attribute was empty and blocked the form; replaced 2 Nov with the working allow-list. In Drupal, edit the iframe in Source mode, not the WYSIWYG view.'],
      ['Alerts','Staff alert: Zoho Forms email to lionfish@reef.org, sent from martha@reef.org because Zoho only allows Zoho users as senders. Organization-level “Flow execution failed” notice goes to the flow owner. The Derby Flow has no failure branch.'],
      ['Reply-To','Set to lionfish@reef.org on 2 Nov, but when the sender is notifications@zohoforms.com Zoho sends replies to the form admin.']
     ]},
     {h:'Vendor technical notes'},
     {rows:[
      ['Intake','The vendor application intake works. The Acceptance branch exists in the intake script, and a v4 script (vendor opt-in and name-plus-email matching) is drafted.'],
      ['Approved payment design (3 Nov)','Two static links (fee-paying and fee-waived). The script matches by business name and the primary contact’s email against approved 2027 vendors not yet paid. No match, several matches, or a mismatch goes to Needs Review and changes nothing.'],
      ['Test clones','Three TEST CLONE vendor forms and a clone Flow (OFF) exist. The payment clone adds an optional donation to the $100 fee.'],
      ['Campaigns','Sync is shared by all audiences. “Derby 2027 Captains (segment)” has 0 members; the Derby captain sync Flow is OFF.']
     ]},
     {h:'Deeper documentation (technical support)'},
     {rows:[['Where','Dropbox, Cowork OS, Org Scaling, HR, and Management, Event Registration Flows: Derby cutover runbook, vendor cutover runbook, registration SOP v1.1, waiver tracking addendum, architecture reference. No Derby training videos exist yet.']]}
   ]},
   {id:'glossary',t:'Glossary',blocks:[
     {table:{head:['Term','Meaning'],rows:[
      ['Registrations Inbox','The Airtable table where every form submission lands first. It is the permanent record of what was submitted and paid, so corrections are made on the team or person record instead.'],
      ['Needs Attention','The page listing registrations Airtable held for a person to check, each with a plain note.'],
      ['Early Bird / Regular','The two price tiers for team registration: $90 through 19 March 2027, then $120.'],
      ['PRICE CHECK flag','A note that the amount paid does not match the price tier for that date. It can appear on a registration that worked.'],
      ['TEST CLONE','A copy of a Zoho form used for practice and testing. Its Flow can write to the real Inbox, so use only TEST- entries.'],
      ['Fee Basis','How a vendor’s $100 fee is treated: standard, or waived for nonprofits and government agencies. Fee Basis Confirmed is the control that a person checked it.'],
      ['Captains Meeting','The meeting on Thursday 22 April 2027 that waiver reminders count back from.'],
      ['Smartwaiver','The planned waiver tool. Not connected yet.'],
      ['Zoho Flow','The tool that carries each registration from the form to Airtable. Technical support looks after it.'],
      ['Zoho Campaigns / Zoho CRM','Planned tools for approved announcements. Not live for Derby yet.'],
      ['Shared REEF Staff login','The one Airtable login the team shares. Edit records, not shared views or automations.']
     ]}}
   ]},
   {id:'links',t:'All links',blocks:[{links:true}]},
   {id:'about',t:'About this playbook',blocks:[
     {rows:[
      ['Version','2.0, 3 Nov 2026. Reorganized into the shared REEF playbook structure.'],
      ['System status last verified','2 Nov 2026, with decisions recorded through 3 Nov.'],
      ['Program owner','Alli (wording, tasks, daily work and program decisions within her authority).'],
      ['Technical support','Currently Martha. A named backup with admin access is still to be decided.']
     ]},
     {p:'**This page is the single, current staff reference** for the Derby and Arts Festival workflow. Older drafts, including the 2 Nov Word draft, are superseded; please do not work from them. When the live system changes (a form, Flow, automation, interface or permission), edit this page, change only the lines affected, and update the date. Every 90 days the owner re-clicks the links and re-checks the status labels. The full guide, including what needs technical help to publish, is the [REEF Program Playbook Standard](https://github.com/reef-environmental-education-foundation/reef-program-playbooks/blob/main/standard/PLAYBOOK_STANDARD.md).'}
   ]}
  ]
},

links:[['Lionfish Derby interface',DI],['This Year’s Teams',PG.teams27],['Needs Attention',PG.attn],['Payments',PG.pay],['All Teams',PG.all],['Results and History',PG.results],['Derby Dashboard',PG.dash],['Arts Festival Vendors interface',VI],['Review Applications',PG.review],['Invite Queue',PG.invite],['Payments and Reminders',PG.vpay],['Vendor List',PG.vlist],['Vendor Needs Attention',PG.vattn],['Derby form builder (sign-in required; your edit rights are to confirm)',FORM],['Vendor thank-you page (published)','https://www.reef.org/thank-you-derby-arts-vendor-2027'],['Asana task: 20 March price change',ASANA_PRICE]]
};
