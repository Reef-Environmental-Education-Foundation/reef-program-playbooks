/* CONSERVATION PARTNER PLAYBOOK: CONTENT  (edit this file; do not edit shared/)
   ------------------------------------------------------------------------------------
   How to edit safely (see standard/PLAYBOOK_STANDARD.md for the full guide):
   - Change only the words inside "quotes". Keep the commas, brackets and quote marks around them.
   - Use curly quotes (“like this”) inside a sentence so you do not close the string by accident.
   - Mini-markup inside text: **bold**, `code`, [link text](https://...), [jump to a card](#tasks/review-registration)
     and status labels {working} {interim} {dev} {verify}. Change-type labels: {routine} {coord} {decision}.
   - Status vocabulary (same in every playbook): working = Working, interim = Interim Process,
     dev = In Development, verify = Needs Verification. Leave "status" off a card that is simply working.
   - When you change something here, update meta.lastVerified below. Questions: Noa or technical support.
*/
var CI='https://airtable.com/appCK2qlT3WHdhYKd/pbd5waKvxaMP432vF/';
var PG={start:CI+'pagVETHNblPbxwTxn',partners27:CI+'pagQgCykQHXegEe9K',fee:CI+'pagFR0b30onXOmGu6',attn:CI+'pagKNiYuQSgmnLV4K',ship:CI+'pag7xtQ9ca8Gv7Zbz',dir:CI+'pag0EH8lm1aceIW4F',edit:CI+'pagnEFcZG9rSTwPrP',all:CI+'pagJcbUmhazUyPnCY',dash:CI+'pag8WIHP6KgD6SPcN'};

window.PLAYBOOK={
meta:{
  title:'Conservation Partner Playbook: New Registration',
  sub:'Run new registrations: where to go, what to do, how to make changes, and how to get help.',
  stamp:'Version 2.0. System status checked 2 Nov 2026.',
  version:'2.0',
  lastVerified:'System status last checked against the live systems on 2 Nov 2026. Reorganized into the shared playbook structure on 3 Nov 2026 (content moved and clarified; live systems were not re-checked).',
  searchHint:'Search: invoice, fee reduction, toolkit, coupon, email wording, missing...',
  footer:'Version 2.0, reorganized 3 Nov 2026. System status last verified 2 Nov 2026 (read-only checks of the live form, Zoho Flow, Airtable automations, Airtable interface and email). This page does not update itself from Zoho or Airtable. When the live system or the process changes, update this page (see [About this playbook](#ref/about)).'
},

/* ============================ START HERE ============================ */
start:{
  banner:{t:'This is your system for managing new Conservation Partners.',x:'Registrations, payments, partner details and follow-up tasks now come together in one organized process. Instead of tracking information across separate forms, emails and spreadsheets, you can open your Airtable workspace, see what needs attention, and work through the next steps. The aim is simple: less tracking, more time for partners.'},
  workspace:[
    {l:'Open Start Here',s:'Your Airtable home page: the numbers show the work waiting',u:PG.start,primary:true},
    {l:'2027 Partners (Registered)',s:'Every 2027 partner, with payment and toolkit status',u:PG.partners27,primary:true},
    {l:'Other Needs Attention',s:'Held items and exceptions, each with a plain next step',u:PG.attn},
    {l:'Ship Toolkits',s:'Paid or confirmed partners waiting for a toolkit',u:PG.ship},
    {l:'Fee Reduction Requests',s:'Requests waiting for your decision',u:PG.fee},
    {l:'Directory Review',s:'Listings to check and publish',u:PG.dir},
    {l:'Edit a Partner Record (2027)',s:'Correct a name, address or contact',u:PG.edit},
    {l:'All Partners (All Years)',s:'Search any partner and every year they were active',u:PG.all}
  ],
  workspaceNote:'You sign in with the shared REEF Staff login. Edit records rather than shared views. If you want a view of your own, create a new one and leave the existing ones as they are. More in [Working in the shared Airtable workspace](#ref/workspace).',
  alerts:[
    {t:'Launch stage: the first real registrations',x:'No real new registration has come through the live form yet (checked 2 Nov). The system was tested from start to finish on 29 Oct. For the first few real registrations, run the [first-live-registrations check](#tasks/first-live) to confirm each step worked in real conditions. It is temporary, not a daily routine.'},
    {t:'Weekly PayPal check has no named owner yet',x:'Nothing alerts anyone if the registration automation pauses, so each week store or operations staff (who have PayPal access) confirm the PayPal payments match the 2027 Partners list. A named person and a recurring reminder are still to be set up. See [the PayPal check](#tasks/paypal-check).'}
  ],
  common:[
    {l:'Review a new registration',s:'2027 Partners (Registered)',go:'tasks/review-registration'},
    {l:'Check what needs attention',s:'Start Here numbers',go:'tasks/see-attention'},
    {l:'Process toolkit fulfillment',s:'Ship Toolkits',go:'tasks/ship-toolkit'},
    {l:'Handle an exception or held item',s:'Other Needs Attention',go:'tasks/held-item'},
    {l:'Handle an invoiced registration',s:'A partner who wants to pay by invoice',go:'tasks/invoice'},
    {l:'Decide a fee reduction request',s:'Fee Reduction Requests',go:'tasks/fee-reduction'},
    {l:'Check payment status',s:'2027 Partners (Registered)',go:'tasks/check-payment'},
    {l:'Update partner information',s:'Edit a Partner Record (2027)',go:'tasks/correct-partner'}
  ],
  broken:[
    {l:'A registration isn’t appearing',go:'fix/cant-find'},
    {l:'A payment was received but the record wasn’t updated',go:'fix/payment-not-recorded'},
    {l:'A partner entered incorrect information',go:'fix/incorrect-info'},
    {l:'A confirmation email wasn’t received',go:'fix/no-welcome-email'},
    {l:'A registration appears twice',go:'fix/appears-twice'},
    {l:'A link or form isn’t working',go:'fix/form-or-link'}
  ],
  help:'Questions about partners, shipping, listings and wording are yours to answer, with Janna for program history. Payment and PayPal questions go to store or operations staff. Problems with the form, the connections or access go to technical support (currently Martha; a backup is still to be named). Emails sent from Zoho Campaigns go through Tom. The full list is in [Roles and support](#ref/roles). When you ask for help, include the organization, a screenshot and what you were trying to do.'
},

/* ============================ I NEED TO... ============================ */
tasks:{
  intro:'Each task says where to go, the steps, and how to confirm it worked. A star marks everyday tasks. A label appears only where something is not fully working yet. For changing wording, forms or pages, see [Make a Change](#change).',
  groups:[
  {t:'Launch stage (temporary)',items:[
   {id:'first-live',t:'Check the first live registrations',star:1,status:'verify',
    what:'Confirm that each of the first real registrations went through every step correctly. This is a **temporary launch-stage check, not a daily routine**. The system was tested end to end on 29 Oct, but no real partner has used it yet. Once a few registrations in a row look right, retire this check. Suggested: the first three clean registrations; you can change that number.',
    where:[['2027 Partners (Registered)',PG.partners27],['Other Needs Attention',PG.attn],['Ship Toolkits',PG.ship],['Directory Review',PG.dir]],
    wt:'Open the partner in each place named below.',
    tableLabel:'Checks',
    table:{head:['Check','Where to look','What right looks like','If it does not'],rows:[
     ['1. Registration received','Start Here count; 2027 Partners (Registered); the alert email at partners@reef.org','The partner is listed as paid within about 10 minutes of paying. An alert arrived at partners@ from “REEF Registration Alerts”.','[A registration isn’t appearing](#fix/cant-find)'],
     ['2. Payment recorded and correctly associated','2027 Partners (Registered); ask store or operations staff to look up the payment in PayPal','Amount Paid matches PayPal. The $100 fee and any donation are shown separately. The payment sits on the right organization.','[Payment received but record not updated](#fix/payment-not-recorded)'],
     ['3. Partner record created or matched','All Partners (All Years); Other Needs Attention','One record for the organization, with the contact linked. No second record, and no unresolved “Name is close” or “Already registered” note.','[A name looks close](#fix/name-close); [Appears twice](#fix/appears-twice)'],
     ['4. Confirmation sent','The partner (ask them to confirm); partners@ inbox','The welcome email arrived, signed by Noa, and a reply reaches Noa. PayPal sent its receipt. After paying, the partner landed on the thank-you page.','[Welcome email not received](#fix/no-welcome-email)'],
     ['5. Toolkit fulfillment status correct','Ship Toolkits','A partner who chose a toolkit is listed with the right toolkit, region and address, and Fulfillment Status is Not started until you ship. A Lionfish toolkit has no region on purpose. A fee-reduction partner is not listed.','[Toolkit has no address or region](#fix/toolkit-missing)'],
     ['6. Directory and profile workflow','Directory Review; the folder in Noa’s Dropbox for logos','The partner appears with Directory Review Status “Needs review”. The uploaded logo arrived in the Dropbox folder.','Tell technical support if the logo did not arrive. [Check a directory listing](#tasks/directory-listing)']
    ]},
    confirm:'Every row looks right for that registration. Keep a short note (organization, date, what you checked) so you can see when you have reached your number.',
    wrong:'If a row does not look right, use the fix linked in that row, and tell technical support what you saw. Finding a problem on the first real registrations is exactly what this check is for.',
    sn:'When you are comfortable, delete this card from content.js or ask technical support to remove it. It should not become permanent.'}
  ]},
  {t:'Registrations and payments',items:[
   {id:'review-registration',t:'Review a new registration',star:1,
    what:'Look at a partner who has just registered and make sure the registration looks right.',
    where:[['2027 Partners (Registered)',PG.partners27],['Start Here',PG.start]],
    steps:['Open Start Here and look at the numbers. Each number is work waiting.','Open 2027 Partners (Registered). A new registration appears here once it is paid, with status, fee option, amount paid, donation, toolkit and shipping status.','Check the organization, contact, amount and toolkit against what the partner chose.','If something is held or looks off, open Other Needs Attention and follow its Next Step.'],
    confirm:'The partner is listed with the right amount and toolkit, and nothing is waiting for them on Other Needs Attention.',
    wrong:'Not in the list about 10 minutes after paying? See [A registration isn’t appearing](#fix/cant-find).',
    sn:'No real new registrations have come through yet. For the first few, use the [first-live-registrations check](#tasks/first-live).'},
   {id:'see-attention',t:'Check what needs attention',star:1,
    what:'See what work is waiting for you today.',
    where:[['Start Here',PG.start]],
    steps:['Open Start Here. Each number is work waiting: fee reduction requests, held items, toolkits to ship, listings to review.','Open each number that is above zero and work through it.','Remember that a zero does not cover hand work: coupons, directory listings and partner replies are not counted.'],
    confirm:'You have worked through each number, or noted what is waiting.'},
   {id:'held-item',t:'Handle an exception or held item',star:1,
    what:'Resolve a payment or registration that Airtable held for a person to check. Held does not mean broken: Airtable holds unusual cases instead of guessing.',
    where:[['Other Needs Attention',PG.attn]],
    steps:['Open Other Needs Attention.','Read “Plain-English Issue” and “Next Step”.','Follow the Next Step. Most held items are routine checks. The Fix a Problem tab covers each kind.','If money needs to go back to a partner, you handle the conversation and store or operations staff process the refund (see [Process a refund](#tasks/refund)).'],
    confirm:'The item leaves the queue.',
    wrong:'Payment problems: store or operations staff. Record problems: technical support.',
    refs:[['Held does not mean broken','ref/how-it-works'],['Fix a Problem','fix']]},
   {id:'check-payment',t:'Check payment status',star:1,
    what:'See whether a partner has paid and how much.',
    where:[['2027 Partners (Registered)',PG.partners27]],
    steps:['Find the partner in 2027 Partners (Registered).','Read the status, amount paid and donation columns.','If anything looks different from what the partner says, ask store or operations staff to look the payment up in PayPal. PayPal holds the official payment record, and you do not have PayPal access.'],
    confirm:'The amount in Airtable matches what store or operations staff see in PayPal.',
    wrong:'See [Payment received but record not updated](#fix/payment-not-recorded) or [A held item says the payment was low](#fix/held-payment-low).'},
   {id:'refund',t:'Process a refund',
    what:'A partner needs money returned, for example because they paid twice.',
    wt:'There is no page for this. You decide and talk to the partner; store or operations staff move the money.',
    steps:['Talk to the partner and decide what is right. The standard approach for a true duplicate is a refund of the extra payment. If the partner says in writing that they want the extra as a donation, note that on the record instead.','Send store or operations staff the organization, the amount, the PayPal transaction ID and what you decided.','Reply to the partner once store or operations staff confirm.'],
    confirm:'Store or operations staff confirm the refund, and there is one 2027 registration for the partner.',
    wrong:'The partner asks for an exception, or two payments exist for different organizations: see [A partner paid twice](#fix/paid-twice).',
    who:'You decide and talk to the partner. Store or operations staff process the refund because it moves money out of PayPal. Refund rules themselves are an organizational decision (see [Make a Change](#change/fee-and-payment)).'},
   {id:'find-partner',t:'Find a registration or a partner',
    what:'Look up one partner, or check whether someone’s registration has arrived.',
    where:[['All Partners (All Years)',PG.all],['2027 Partners (Registered)',PG.partners27]],
    steps:['For this year’s registrations, open 2027 Partners (Registered).','For any partner and every year they were active, open All Partners (All Years) and search by organization name.','Try other spellings of the organization and the contact’s email.'],
    confirm:'You find the partner, or you know the registration has not arrived yet.',
    wrong:'Not found about 10 minutes after paying: [A registration isn’t appearing](#fix/cant-find).'},
   {id:'paypal-check',t:'Run the weekly PayPal check',status:'interim',
    what:'Make sure every PayPal payment has a matching partner. Nothing alerts anyone if the registration automation pauses, so this quick check is the safeguard.',
    steps:['Once a week, ask store or operations staff (they have PayPal access; you do not) to compare the week’s PayPal payments with the 2027 Partners (Registered) list.','Any payment with no partner after about 10 minutes needs attention: see [Payment received but record not updated](#fix/payment-not-recorded).'],
    confirm:'Store or operations staff tell you the two lists match.',
    sn:'Weekly is the current practice. No named person and no recurring reminder have been set up yet. That is an open operational follow-up, not something you should have to remember on your own.',
    refs:[['PayPal check: owner and follow-up','ref/paypal-check']]}
  ]},
  {t:'Invoiced registrations (alternate pathway)',items:[
   {id:'invoice',t:'Handle a partner who wants to pay by invoice',star:1,status:'interim',
    what:'A partner asks to pay by invoice instead of using the online form. This is a manual pathway today: the form has no invoice option, and nothing yet turns a paid invoice into a registration automatically.',
    wt:'No page; the steps below use Asana and email.',
    steps:['Tell the partner you will send an invoice. Do not send them to the form.','Create an Asana task for Christy to make the invoice. Use the text below.','Hold the toolkit and any other follow-up until the invoice is paid.','When you learn the invoice is paid, ask technical support to add the paid registration properly so it shows in 2027 Partners (Registered). Then ship the toolkit and send the coupon as usual.'],
    copy:'Invoice request: [Organization name]\nBilling contact name and email: \nAmount: $100, due in 30 days\nToolkit wanted (with region and shipping address if known): \nRequested by: [your name]\nHold: do not ship or send anything until paid.',
    confirm:'Christy has the task and the partner has the invoice. After payment is recorded, the partner shows in 2027 Partners (Registered) as paid.',
    wrong:'If you are not told the invoice was paid, ask Christy. If a paid invoice does not show up as a registration, ask technical support.',
    gap:{head:'Interim process: how this works today',rows:[
      ['Who does what','**You:** talk to the partner, create the Asana task, hold the toolkit. **Christy:** makes the invoice. **Technical support (currently Martha):** adds the paid registration.'],
      ['What is manual','Every step. Nothing connects the invoice to Airtable.'],
      ['Not built yet','A defined, tested way to record a paid invoice as a registration, and a way to tell you it was paid. Follow-up: agree the process and an owner (see the gaps list).'],
      ['Policy','Invoicing policy (amount, due date, whether to offer it) is an organizational decision. See [Make a Change](#change/fee-and-payment).']]},
    refs:[['Invoiced registrations: who does what','ref/invoices']]},
   {id:'fee-reduction',t:'Decide a fee reduction request',star:1,status:'verify',
    what:'A nonprofit or other partner has asked for a reduction in the $100 fee. This decision is yours.',
    where:[['Fee Reduction Requests',PG.fee]],
    steps:['Open Fee Reduction Requests and read the reason.','To approve: tick **Fee Reduction Approved**, then set Processing Status to **New**.','To decline: set **Staff Decision** and add a **Staff Note**.','Approved partners currently get no toolkit and no coupon. That is today’s program rule, and it can change (see [Make a Change](#change/program-decisions)).'],
    confirm:'An approved partner appears in 2027 Partners (Registered) as confirmed with no payment.',
    wrong:'A request looks unusual or the record does not move on: ask technical support.',
    sn:'The Airtable steps were tested with test records. A real request has not come through yet.',
    refs:[['Program decisions and what they touch','change/program-decisions']]}
  ]},
  {t:'Toolkits, coupons and the directory',items:[
   {id:'ship-toolkit',t:'Process toolkit fulfillment',star:1,status:'verify',
    what:'Ship the toolkit a partner chose and record it.',
    where:[['Ship Toolkits',PG.ship]],
    steps:['Open Ship Toolkits. It lists paid or confirmed partners who chose a toolkit and are not shipped.','Check the address and region.','Ship it, then set Fulfillment Status to **Sent**.'],
    confirm:'The partner leaves the Ship Toolkits list.',
    wrong:'No address or region: see [A toolkit has no address or no region](#fix/toolkit-missing).',
    sn:'Shipping itself is by hand.'},
   {id:'coupon',t:'Give a new partner their coupon',status:'interim',
    what:'Send a paid new partner their one-time store code. This is done by hand, the way the team does today.',
    steps:['Check the partner paid. A partner with a fee reduction gets no code.','Create the code in the reef.org store: one-time, 10% off a store purchase of $250 or more, with a partner-specific name plus the year (for example EXAMPLE2027).','Email the code to the partner.'],
    confirm:'The partner has the code.',
    sn:'Manual by design. Where the team records which codes were sent is not written down yet.'},
   {id:'directory-listing',t:'Check and publish a directory listing',star:1,status:'verify',
    what:'Make sure a partner’s public listing is correct and live on reef.org.',
    where:[['Directory Review',PG.dir]],
    steps:['Open Directory Review and check the listing and the **Directory Gaps** column.','Publish the listing on reef.org.','Set Directory Review Status.'],
    confirm:'The listing is visible on the reef.org directory and the status is updated.',
    wrong:'If the page will not save, ask website support.',
    sn:'Tested with test records. Publishing is by hand.'},
   {id:'find-logo',t:'Find a partner logo',status:'verify',
    what:'Locate the logo a partner uploaded on the form.',
    wt:'Logos uploaded on the form are saved directly to a folder in Noa’s Dropbox.',
    confirm:'The logo file is in the folder.',
    sn:'Confirm the first logo arrives there.'},
   {id:'correct-partner',t:'Update partner information',star:1,
    what:'Correct a partner’s name, address or contact details.',
    where:[['Edit a Partner Record (2027)',PG.edit]],
    steps:['Open Edit a Partner Record (2027) and find the partner.','Edit the fields the page shows and save.','Make corrections here, not on the Registrations Inbox row. The Inbox keeps the original submission and feeds the automation.'],
    confirm:'Reopen the record, or search the new spelling in All Partners.',
    wrong:'A field you need is not on the page, or you cannot edit it: ask technical support for a page fix.'}
  ]},
  {t:'Change something',items:[
   {id:'page-content',t:'Update page content on REEF.org',status:'verify',
    what:'Edit text, headings, links, buttons and photos on your Conservation Partner pages as part of running the program.',
    wt:'Steps are on the Make a Change tab. Keep the embedded registration form block in place while you edit around it.',
    sn:'Tested on the Conservation Partners landing page. Not yet tested on the registration page with the embedded form.',
    wrong:'Website support if the editor will not load or save.',
    refs:[['Full steps','change/reef-page-content']]},
   {id:'wording',t:'Change the wording of the form or the welcome email',status:'verify',
    what:'Wording, help text and instructions are yours to update.',
    where:[['Zoho Forms','https://forms.zoho.com/']],
    wt:'Follow the two cards on the Make a Change tab.',
    sn:'The first time, it helps to do it with technical support alongside as a one-time check.',
    refs:[['Welcome email steps','change/welcome-email'],['Form help text steps','change/form-help-text']]},
   {id:'form-structure',t:'Add, remove or restructure a form question or choice',
    what:'Wording is yours. To add, remove or restructure a question or a list of choices that feeds Airtable, arrange a quick technical check first so the connection keeps working. Bring what you want to change and why.',
    wrong:'Airtable matches answers by question and choice names. Renaming or removing one can send a registration to Needs Attention or drop its data.',
    who:'Technical support (currently Martha).',
    refs:[['Full steps','change/form-structure']]},
   {id:'fee-change',t:'Change a registration fee, fee option or payment setting',
    what:'Fee amounts and refund rules are organizational decisions, and the PayPal field in the form must match them. Agree the change with leadership and operations staff, then technical support updates and tests the form.',
    who:'Technical support (currently Martha) after the decision.',
    refs:[['Full steps','change/fee-and-payment']]},
   {id:'improve',t:'Suggest an improvement',
    what:'Tell us what would make the program easier to run.',
    steps:['Add a short task to the Conservation Partners project in Asana: what you were trying to do and what would help.'],
    refs:[['Which kind of change is it?','ref/improve']]}
  ]}
  ]
},

/* ============================ MAKE A CHANGE ============================ */
change:{
  banner:{t:'Wording, content and your own procedures are yours to change.',x:'Changes that touch payments or the connections between systems get a quick coordination step, so registrations keep flowing. Each card says what you can change, where to go, how, what to check afterward, and when to bring in help.'},
  intro:'Most of the work is yours to run: reviewing registrations, deciding fee reductions, shipping toolkits, publishing directory listings, correcting partner information, sending coupons, and updating wording on the form, the welcome email and your REEF.org pages. You can also improve your own procedures as you learn what works. A few changes touch payments or the connections between systems, or need a financial or organizational decision. The label on each card shows which kind it is and why. For the first Zoho email or form change you make, doing it with technical support alongside is a good one-time step so you both see it work. After that, it is yours.',
  cards:[
   {id:'welcome-email',type:'routine',t:'Change the welcome email wording',status:'verify',
    what:'The subject line and the wording of the message.',
    where:[['Zoho Forms','https://forms.zoho.com/']],
    wt:'The form “2027 Conservation Partner Registration (New)”, Settings, Email, New Record tab, template “My Template”.',
    steps:['Open Zoho Forms and find “2027 Conservation Partner Registration (New)”. Use the one without TEST CLONE in the name.','Point at the form and click Settings under its name.','Under Email & Notifications, click Email. Stay on the New Record tab.','“My Template” is the welcome email to the partner. Point at it and click the pencil icon on the right. Leave the trash can and the green switch alone.','Change the subject line or the words in the message box. Keep anything that looks like `${zf:Name.First}` or `${zf:SingleLine}` exactly as it is. Those fill in the partner’s name and organization.','Leave From, From Name and To as they are. Click Save at the bottom right. Cancel throws your changes away.'],
    confirm:'No test send has been confirmed, so reread the message in the editor before you save. When the first real registration arrives, confirm with that partner that the email came through and reads well. The change applies to the very next registration.',
    depends:'The From name and address, the To field and the green on/off switch control who the email appears to come from and who receives it.',
    how:'If any of those need to change, or you want a message sent to someone else, ask technical support.',
    sn:'Not yet run end to end. First time: make the change with technical support alongside so you both see it work. After that, you can make email wording changes on your own.'},
   {id:'form-help-text',type:'routine',t:'Change help text or instructions on the form',status:'verify',
    what:'Question titles, the small help text under a question, and instruction blocks.',
    where:[['Zoho Forms','https://forms.zoho.com/']],
    wt:'The same form, Builder (left bar).',
    steps:['Open the form as above and click Builder in the left bar.','Click the text you want to change and type the new words.','Click Preview at the top right to see how it looks. The preview is only for looking, so do not submit it.','The Builder has no Save button (checked 2 Nov), so treat every edit as live.'],
    confirm:'Open reef.org/Register-CP-2027 in a private window and read the new wording. Confirm the form still loads and the PayPal button still appears.',
    depends:'Wording is safe. New wording that changes what a question means, and anything that adds, removes or restructures questions or choices, affects how Airtable reads the answers. Leave the PayPal payment field as it is.',
    how:'For structure changes, use the [Add, remove or restructure](#change/form-structure) card.',
    sn:'First time: do it with technical support alongside. After that, it is yours.'},
   {id:'correct-partner-info',type:'routine',t:'Correct a partner’s information',
    what:'Name, address, contact details and other fields shown on the record page.',
    where:[['Edit a Partner Record (2027)',PG.edit]],
    steps:['Open Edit a Partner Record (2027) from the links on the Reference tab.','Find the partner and open the record.','Edit the fields the page shows and save.','Make corrections on this record rather than on the Registrations Inbox row. The Inbox keeps the original submission and supports the automated workflow.'],
    confirm:'Reopen the record, or search the new spelling in All Partners.',
    depends:'A field you need may not be on the page, or may not be editable.',
    how:'That is an access or page fix to request from technical support.',
    sn:'Routine task. Use it whenever a partner’s details change.'},
   {id:'email-sender',type:'coord',t:'Change who the emails come from',status:'verify',
    what:'The From name and address on the welcome email and the alert.',
    where:[['Zoho Forms','https://forms.zoho.com/']],
    wt:'The same form, Settings, Email, both templates (the welcome email and the alert to partners@).',
    steps:['Open the template with the pencil icon, as in the welcome email card.','Change the From address and From Name. Zoho only offers addresses it has verified as senders.','Save, then do the same in the second template.'],
    confirm:'On the next real registration, confirm the welcome email and the alert come from the right sender and that replies go to the right person.',
    depends:'The sender decides where replies go and whether messages arrive. Zoho only allows addresses it has verified as senders.',
    how:'If an address does not appear in the From list, technical support can get it verified.',
    sn:'Both emails are set to send from Noa’s profile. Use this card if that ever needs to change.'},
   {id:'reef-page-content',type:'routine',t:'Update page content on REEF.org',status:'verify',
    what:'Text, headings, links, buttons and photos on Conservation Partner pages.',
    wt:'The page on reef.org: sign in, open the page, click the Edit tab.',
    steps:['Sign in to reef.org, open the page and click the Edit tab. The editor takes 15 to 30 seconds to load.','Stay in the visual editor. Skip Disable rich-text and the Source button.','Click in the text and type. To change a button, double-click it to open the Button dialog (text, link, style).','To swap a photo: Content, Files, Add file to upload it. Then click the photo, click the Image button, paste its address (/sites/default/files/ plus the file name) and write new alternative text. Skip the picture-frame Media button; it has not been tested on these pages.','Before you save, scroll to Revision information, tick Create new revision and add a short note. Save.'],
    confirm:'Open the page in a private window and read it through. On the registration page, also confirm the form still loads and the PayPal button appears. To undo anything, open the Revisions tab and go back to an earlier version.',
    depends:'The registration page contains the embedded registration form block. Editing the text around it is fine. Moving, replacing or restyling the block, changing a redirect, or editing the page address can stop the form working.',
    how:'Check with website support first if you want to do any of those.',
    sn:'Tested on the Conservation Partners landing page (10 Oct). Not yet tested on the registration page with the embedded form.'},
   {id:'form-structure',type:'coord',t:'Add, remove or restructure a form question or choice',
    what:'Wording is always yours. Structure changes (adding, removing, reordering or renaming questions and choices such as toolkits, region and fee options) need a quick technical check.',
    where:[['Zoho Forms','https://forms.zoho.com/']],
    wt:'The same form, Builder.',
    steps:['Write down what you want to change and why.','Contact technical support. They check how the field feeds Airtable, make or review the change, and test it with a TEST- registration.','Once it is confirmed, announce it to the team and update this playbook if the steps change.'],
    confirm:'A test registration lands in Airtable with every answer in the right column and nothing held.',
    depends:'Airtable matches answers by question and choice names. A rename or removal can send registrations to Needs Attention or drop their data.',
    how:'A quick check keeps the connection intact. Bring what you want and by when, and technical support will tell you how long it takes.'},
   {id:'fee-and-payment',type:'decision',t:'Change the fee, fee options or payment settings',
    what:'Proposals are welcome. The change itself needs agreement and a technical update.',
    where:[['Zoho Forms','https://forms.zoho.com/']],
    wt:'The Builder, the payment field, plus the policy decision.',
    steps:['Agree the new amount or option with leadership and operations staff.','Ask technical support to update the PayPal field and the Airtable mapping and to run a test.','Update the Key facts on the Reference tab.'],
    confirm:'A test registration records the new amount, fee option and donation correctly.',
    depends:'The amount a partner pays, the amount Airtable records, the PayPal field and the refund rules must all match.',
    how:'Once the decision is made, send technical support the new amount or option and the date it should start.',
    who:'Fee amount, fee options, refund rules and invoicing policy are organizational decisions: agree them with leadership and operations staff.'},
   {id:'program-decisions',type:'decision',t:'Change a program rule: fee reductions, discounts, toolkits or coupons',
    what:'How fee reductions, discounts, toolkit eligibility, coupons and similar rules work is a program-management decision, made within REEF’s established financial and organizational policies. Today’s rules are a starting point and can evolve. What changes is how many places need updating, not whether the rule is allowed to change.',
    steps:['Write down the rule you want to change and why.','Decide it: fee reduction decisions case by case are yours. Anything with a cost to REEF, or that changes a published fee or policy, is agreed with leadership and operations staff first.','Look at [what each rule touches](#change/program-decisions-table) and ask technical support to check the ones marked as connected.','Update the form text, the welcome email, the REEF.org page and the Key facts, then tell the team.'],
    confirm:'Form, emails, page and Key facts all say the same thing, and a test registration behaves as expected.',
    depends:'Some rules are written into the form, the Airtable lists or the emails as well as into the program policy.',
    how:'Tell technical support what the rule should be, not just which setting to change, and they will find the places that need to match.',
    who:'The program team decides program rules. Leadership and operations staff are part of the decision when money or published policy changes.',
    refs:[['What each rule touches','change/program-decisions-table']]}
  ],
  sections:[
   {id:'program-decisions-table',t:'Program decisions and what they touch',blocks:[
     {p:'These rules are program decisions. The right-hand column is only about what else may need updating when a rule changes, so the change is made safely.'},
     {table:{head:['Rule today','Who decides','What else may need updating'],rows:[
      ['Fee reduction decisions (approve or decline a request)','You, case by case, within REEF’s fee policy','Nothing technical. Use Fee Reduction Requests.'],
      ['What an approved fee-reduction partner receives (today: no toolkit, no coupon)','The program team. Leadership and operations staff if it has a cost.','Welcome and follow-up wording. Ask technical support to check that the Ship Toolkits list and the form text match.'],
      ['Fee amount, fee options, optional donation ($100 a year today)','Leadership and operations staff','PayPal field in the form, the amount check in Airtable, form and email text, the REEF.org page, Key facts. {coord}'],
      ['Coupons (today: 10% off a store purchase of $250 or more, made by hand)','The program team, with store staff','Store settings, the email text, Key facts. Nothing automated depends on it today.'],
      ['Which toolkits are offered and who is eligible','The program team. Operations staff for cost and inventory.','Form choices (a structure change, so {coord}), Airtable lists, REEF.org page text.'],
      ['Refund rules','Leadership and operations staff','Form and email wording; the refund fixes in this playbook.'],
      ['Invoicing policy (whether to offer it, amount, due date)','Leadership and operations staff. Christy makes the invoices.','The invoice steps in this playbook, and how a paid invoice is recorded (not built yet).'],
      ['Program year and the year rule (joining after 1 July counts for the next year)','The program team, with leadership','Airtable has year-specific fields and views, so a new season needs a technical update. Planned for September 2027.']
     ]}}
   ]},
   {id:'safeguards',t:'Safeguards, and why they exist',blocks:[
     {p:'A few things are protected because other systems depend on them. Each has a reason and a way to get the job done.'},
     {table:{head:['Safeguard','Why it exists','How to get the job done'],rows:[
      ['**Payments and refunds.** Store or operations staff process refunds.','A refund moves money out of PayPal.','You talk to the partner and make the request. See [Process a refund](#tasks/refund).'],
      ['**Deleting records.**','A deletion cannot be undone and breaks the link to payments and history.','Correct or merge instead. If a record really needs to be removed, technical support can do it safely.'],
      ['**Test submissions.**','The live form takes real PayPal payments and writes to live records.','Use Preview in Zoho Forms to check wording. For a full end-to-end test, ask technical support to set one up with TEST- records.'],
      ['**Adding a registration by hand.**','Payments are matched to partners through the form.','If a partner cannot use the form, technical support can add them properly. For invoices, see [Handle a partner who wants to pay by invoice](#tasks/invoice).']
     ]}}
   ]}
  ]
},

/* ============================ FIX A PROBLEM ============================ */
fix:{
  intro:'Most of these you can resolve yourself. When you do need help, take a screenshot and note the time and the organization name first.',
  collect:{t:'Before you ask for help, collect:',items:['The organization name and the contact’s email.','The date and time of the payment or submission, and the PayPal transaction ID if store or operations staff can find it.','A screenshot of what you see, and a line on what you expected.','Whether more than one partner is affected.']},
  groups:[
  {t:'Registrations and payments',items:[
   {id:'cant-find',t:'A registration isn’t appearing',sees:'Someone says they registered, but I cannot find them.',
    cause:'The registration may not have finished, may be under a different spelling, or may be held.',
    check:'Start Here, then 2027 Partners (Registered) and Other Needs Attention. Try other spellings of the organization and the email. Check the partners@ inbox for the alert. Ask store or operations staff to check PayPal for the payment.',
    do:'Wait about 10 minutes after a payment, then search again. Tell the partner you are checking. If PayPal shows the payment and Airtable has nothing, it is a connection problem.',
    confirm:'You find the record, the held item, or the PayPal payment.',
    escalate:'A payment is in PayPal but nothing is in Airtable after 10 minutes. Send the organization, email, time, PayPal transaction ID and a screenshot.',
    who:'Technical support (currently Martha).'},
   {id:'payment-not-recorded',t:'A payment was received but the record wasn’t updated',sees:'PayPal (or the partner’s receipt) shows a payment, but the partner is not in 2027 Partners (Registered), or shows as unpaid or held.',
    cause:'A held item (for example the payment was low or could not be confirmed), or the connection between the form and Airtable did not complete.',
    check:'Other Needs Attention for a held item with a note about the payment. Then ask store or operations staff to look up the PayPal transaction.',
    do:'If there is a held item, follow its Next Step (see [A held item says the payment was low](#fix/held-payment-low)). If there is no held item and about 10 minutes have passed, it is a connection problem: do not enter the payment by hand.',
    confirm:'The partner shows as paid with an amount that matches PayPal.',
    escalate:'PayPal shows money and Airtable shows nothing after 10 minutes. Send the organization, email, time, PayPal transaction ID and a screenshot.',
    who:'Store or operations staff for payment questions. Technical support for the record.',
    refs:[['The weekly PayPal check','tasks/paypal-check']]},
   {id:'held-payment-low',t:'A held item says the payment was low or not confirmed',sees:'Other Needs Attention shows a payment that was lower than the fee or could not be confirmed.',
    cause:'The amount was lower than the fee, or the payment could not be confirmed.',
    check:'Other Needs Attention, then ask store or operations staff to look the payment up in PayPal.',
    do:'Low payment: once store or operations staff confirm the amount, if the partner owes a balance, contact them for the rest, then follow the Next Step. Not confirmed: if store or operations staff see it as paid in PayPal, update the status the way the Next Step says. If it is pending or failed, contact the partner.',
    confirm:'The item leaves the queue.',
    escalate:'PayPal and Airtable disagree and you cannot tell why, or a payment looks disputed.',
    who:'Store or operations staff for payment questions. Technical support if the record looks wrong.'},
   {id:'paid-twice',t:'A partner paid twice',sees:'A partner paid more than once, or paid after already registering for the year.',
    cause:'A partner paid more than once, or paid after already registering for the year.',
    check:'Other Needs Attention. The note says “PAID BUT HELD” and “Already registered for this year”. Ask store or operations staff to confirm in PayPal that both payments exist.',
    do:'Talk to the partner. The standard approach is a refund of the extra payment, which store or operations staff process because it moves money out of PayPal. If the partner says in writing that they want the extra as a donation, note that on the record.',
    confirm:'There is one 2027 registration for the partner, and the refund or donation is noted.',
    escalate:'The partner asks for an exception, or two payments exist for different organizations.',
    who:'Store or operations staff. Technical support if the records look wrong.',
    refs:[['Process a refund','tasks/refund']]},
   {id:'appears-twice',t:'A registration appears twice',sees:'The same partner shows up twice in the list, or two registrations exist for one organization.',
    cause:'Either the partner paid twice, or two partner records exist for one organization (often a spelling difference).',
    check:'Other Needs Attention for “Already registered for this year” or “Name is close to an existing partner”. Open All Partners and compare names, contacts and websites. Ask store or operations staff how many payments PayPal shows.',
    do:'Two payments for one partner: follow [A partner paid twice](#fix/paid-twice). Two records for one organization: follow [A name looks close](#fix/name-close). Records are not linked automatically, so avoid creating a second record for the same partner.',
    confirm:'One 2027 registration and one record for the partner.',
    escalate:'You cannot tell, or two records need to be merged.',
    who:'Janna for program history. Technical support for merging records.'},
   {id:'name-close',t:'A name looks close to a partner we already have',sees:'Other Needs Attention says “Name is close to an existing partner”.',
    cause:'Airtable found a similar organization name and held the registration instead of guessing.',
    check:'Other Needs Attention says “Name is close to an existing partner”. Open All Partners and compare names, contacts and websites.',
    do:'Follow the Next Step. You and Janna know these partners, so you can usually tell. Records are not linked automatically; avoid creating a second record for the same partner.',
    confirm:'You know whether it is the same partner, and the registration sits with the right organization.',
    escalate:'You cannot tell, or two records need to be merged.',
    who:'Janna for program history. Technical support for merging records.'}
  ]},
  {t:'Partner information, emails and toolkits',items:[
   {id:'incorrect-info',t:'A partner entered incorrect information',sees:'A name, address, email, contact or toolkit detail on the registration is wrong.',
    cause:'The partner made a typo or chose the wrong option when registering.',
    check:'The partner record in 2027 Partners (Registered), and what the partner tells you is correct.',
    do:'Correct it on Edit a Partner Record (2027), not on the Registrations Inbox row. The Inbox keeps the original submission and feeds the automation. If the email was wrong, also email the partner at the right address from partners@ to confirm the registration. For a missing toolkit address or region, see [A toolkit has no address or no region](#fix/toolkit-missing).',
    confirm:'Reopen the record, or search the new spelling in All Partners, and find one partner only.',
    escalate:'A field you need is not on the page or cannot be edited, or the wrong choice was the fee or toolkit option.',
    who:'Technical support (currently Martha). For a wrong fee amount, store or operations staff.',
    refs:[['Update partner information','tasks/correct-partner']]},
   {id:'no-welcome-email',t:'A confirmation email wasn’t received',sees:'A partner says they did not get the welcome email.',
    cause:'The email may be in spam, or the address on the record may be wrong. It comes through Zoho Forms, so spam filters sometimes catch it.',
    check:'The email address on the partner record, and the partner’s spam folder.',
    do:'Email the partner from partners@ to confirm the registration once it shows on the 2027 list. If the address is wrong, correct it on Edit a Partner Record. A re-send from Zoho has not been tested.',
    confirm:'The partner has the confirmation, or the record shows the right address.',
    escalate:'Several partners report the same thing. That points to the email setup.',
    who:'Technical support (currently Martha).'},
   {id:'toolkit-missing',t:'A toolkit has no address or no region',sees:'Other Needs Attention shows “Toolkit chosen but no shipping address” or “no region”.',
    cause:'The partner chose a toolkit but left out the shipping address or region.',
    check:'The partner record and the toolkit chosen. The Lionfish toolkit has no region on purpose.',
    do:'Email the partner from partners@ for the missing detail, add it on the record, then set Processing Status to New.',
    confirm:'The record appears on Ship Toolkits.',
    escalate:'A Lionfish registration shows an error. Screenshot it and leave the numbers as they are.',
    who:'Technical support (currently Martha).'}
  ]},
  {t:'Pages and links',items:[
   {id:'form-or-link',t:'A link or form isn’t working',sees:'The registration page looks broken, the PayPal button is missing, or a link will not open.',
    cause:'The form may not be loading, or a recent page edit may have disturbed it.',
    check:'Open reef.org/Register-CP-2027 in a private window. Does the form load? Does the PayPal button appear after choosing a paid option? If an Airtable page link will not open, check that you are signed in with the shared REEF Staff login.',
    do:'Take a screenshot with the time and the page address. Reload once and try a second browser. If someone just edited the page, open its Revisions tab and go back to the version before.',
    confirm:'The form loads and the PayPal button appears.',
    escalate:'The form still does not load, or you cannot open an Airtable page after signing in. A fallback for partners while the form is down is not set up yet.',
    who:'Technical support (currently Martha); website support for the site itself.'}
  ]}
  ]
},

/* ============================ REFERENCE ============================ */
ref:{
  intro:'Detail that is useful but not needed for routine work: how the system fits together, what is working, policies, roles and the history behind them.',
  sections:[
   {id:'status',t:'What is working now',open:true,blocks:[
     {legend:'status'},
     {table:{head:['Area','Status','What it means for you'],rows:[
      ['Registration form and payment','{working}','Partners register and pay by PayPal on REEF.org. Tested from form to Airtable on 29 Oct with a $100 fee and a $10 donation.'],
      ['Registration saved and matched in Airtable','{working}','Each registration creates or matches the organization and contact and saves a 2027 registration.'],
      ['Your Conservation Partners pages','{working}','Pages and filters were read on 2 Nov. You can edit records on them.'],
      ['Alert to partners@reef.org','{working}','Arrived in the 29 Oct test.'],
      ['Welcome email to the partner','{verify}','Updated wording, sent from Noa’s profile. Not yet sent for a real registration. You can edit it.'],
      ['Thank-you page after paying','{verify}','The page is live. The automatic jump after payment was fixed on 29 Oct and has not been retested with a payment.'],
      ['Lionfish toolkit hides the region question','{verify}','Set up 29 Oct, not yet seen with a real payment.'],
      ['Fee reduction path','{verify}','The Airtable steps were tested with test records. A real request has not come through yet.'],
      ['Toolkit shipping and directory review','{verify}','Lists and statuses work with test records. The shipping and publishing are by hand.'],
      ['Pay-by-invoice process','{interim}','Agreed: you make an Asana task for Christy. Not run yet. No form option. How a paid invoice becomes a registration is not set up.'],
      ['Coupons for new partners','{interim}','Done by hand, the way the team does today. Manual by design.'],
      ['Alert if the automation stops','{interim}','Not built. The weekly PayPal check covers it for now.'],
      ['Logos saved to Noa’s Dropbox','{verify}','Uploaded logos go directly to a folder in Noa’s Dropbox. Confirm the first one arrives.'],
      ['Zoho CRM and Campaigns for partners','{dev}','A sync is drafted and switched off. Nothing syncs or sends yet.'],
      ['Partners editing their own directory listing','{dev}','A test version exists and is not in use.']
     ]}},
     {h:'Technical status detail (test dates, run counts, build notes)'},
     {table:{head:['Piece','Status','Detail'],rows:[
      ['Public registration page (reef.org/Register-CP-2027)','{working}','Loads publicly (checked 2 Nov). Whether it is linked from the site menu has not been checked.'],
      ['The form: questions, $100 fee, optional donation, fee reduction option','{working}','Read on the public form 2 Nov. Nothing was submitted.'],
      ['Paying by PayPal inside the form','{working}','29 Oct paid test ($100 fee plus $10 donation) worked from form to Airtable.'],
      ['Lionfish toolkit hides the region question','{verify}','Set up 29 Oct. Never tested with a real payment.'],
      ['Thank-you page (reef.org/Thank-You-CP-2027)','{working}','Page is live with its text (checked 2 Nov).'],
      ['Automatic jump to the thank-you page after paying','{verify}','Fixed on 29 Oct and not retested with a payment.'],
      ['Welcome email to the partner','{verify}','Rewritten after the 29 Oct test. No live send yet with this wording. Set up to send from Noa’s profile so replies reach Noa; confirm on the first real registration.'],
      ['Alert to partners@reef.org','{working}','Arrived at partners@ in the 29 Oct test. Settings re-checked 2 Nov.'],
      ['Zoho Flow: CP Registration (New) to Airtable','{working}','On. Last 7 days: 2 runs, 2 succeeded, 0 failed (both 29 Oct tests).'],
      ['Airtable automations (process submission, mark paid)','{working}','Deployed. Recent runs all succeeded; no failed runs found 2 Nov.'],
      ['Conservation Partners interface (14 pages)','{working}','Pages and their filters read 2 Nov.'],
      ['Real new registrations so far','','None yet. The Registrations Inbox has no Conservation Partner rows (checked 2 Nov).'],
      ['Fee reduction (waiver) path','{verify}','Built and shown on Start Here. Airtable steps tested with test records; never run for a real request.'],
      ['Coupons for new partners','{interim}','Not automated, by design. The team makes the code by hand. 16 partner-specific codes exist from the master list.'],
      ['Toolkit shipping and directory publishing','{verify}','Lists exist. The work itself is by hand.'],
      ['Logo upload and saving','{verify}','Each uploaded logo goes directly to a folder in Noa’s Dropbox. Confirm the first one arrives.'],
      ['Alert if the automation fails; log of abandoned payments','{interim}','Not built. The weekly PayPal check covers the first for now; abandoned or unpaid attempts are not logged.'],
      ['Zoho CRM and Campaigns for partners','{dev}','A sync Flow is drafted and off. Nothing syncs and nothing sends.'],
      ['Partners editing their own directory listing','{dev}','A test version exists and is not in use.'],
      ['Pay-by-invoice option','{interim}','Process agreed 2 Nov: you make an Asana task for Christy to make the invoice. Never run. No form option.']
     ]}},
     {note:'Basis: read-only checks on 2 Nov 2026 of the public form and pages, Zoho Forms settings, Zoho Flow history, Airtable automation run history and interface pages, the Registrations Inbox, and Gmail; plus the 29 Oct test results where a line says so.'}
   ]},
   {id:'how-it-works',t:'How a new registration works',blocks:[
     {flow:[
      {t:'1. Partner registers and pays',s:'A form on REEF.org. PayPal is inside the form.',e:'Partners use this',k:'use'},
      {t:'2. Zoho Flow',s:'Carries the registration to Airtable.',e:'Runs by itself',k:'back'},
      {t:'3. Airtable sorts it',s:'Finds or creates the partner and saves the registration. Holds anything unusual.',e:'Runs by itself',k:'back'},
      {t:'4. Conservation Partners pages',s:'Your lists: new partners, held items, toolkits, listings.',e:'You work here',k:'you'}]},
     {later:'**Coming later ({dev}):** copying partners into Zoho CRM and Zoho Campaigns for follow-up emails. A person approves and sends. Nothing sends automatically.'},
     {h:'What happens when someone registers'},
     {ol:['The partner fills in the form and pays. After paying, they should land on a thank-you page.','Zoho Flow puts one row in the Airtable Registrations Inbox. The Inbox keeps the original submission and feeds the automation, which is why corrections go on the partner record instead.','Airtable marks it paid, finds or creates the organization and the contact, and saves a 2027 registration. Fee reduction requests wait for your decision.','Anything unusual is held with a plain note and shows on Start Here.','The partner gets a welcome email, partners@ gets an alert, and PayPal sends its own receipt.']},
     {callout:{t:'Held does not mean broken',x:'“Name is close to an existing partner” and “Already registered for this year” often show up on a registration that worked. Airtable holds these for a person to confirm instead of guessing. Read the note, check, then follow the Next Step.'}},
     {h:'Where messages come from'},
     {table:{head:['Message','Source','Status'],rows:[
      ['Welcome email to the partner','Zoho Forms. You can edit the wording (see Make a Change). Sent from Noa’s profile and signed by Noa. It tells the partner to email partners@reef.org, and replies reach Noa.','{verify} The wording was updated after the 29 Oct test, and the sender is moving to Noa’s profile. Both will be confirmed with the first real registration.'],
      ['Alert to partners@reef.org','Zoho Forms, sent from Noa’s profile with the name “REEF Registration Alerts”.','{working} It arrived at partners@ in the 29 Oct test. Confirm the sender on the first real one.'],
      ['Payment receipt','PayPal','{working} 29 Oct paid test.'],
      ['Coupon email','You send it, the way the team does today.','{interim} Manual by design.'],
      ['Follow-up and marketing emails','Zoho Campaigns, sent by Tom.','{dev} Partners are not in Campaigns yet.']
     ]}},
     {h:'The systems in plain words'},
     {table:{head:['System','What it does for you','Do you use it?'],rows:[
      ['Airtable (Conservation Partners pages)','Saves partners and registrations and shows your to-do lists.','Every day'],
      ['Registration form (Zoho Forms)','Where a partner registers and pays. Also holds the welcome email.','When you update wording'],
      ['REEF.org','Hosts the registration page, the thank-you page and the Conservation Partner pages.','When you update page content'],
      ['PayPal','Takes the payment, keeps records, sends receipts.','Not directly. Store or operations staff handle PayPal.'],
      ['Zoho Flow','Moves the registration into Airtable.','Technical support looks after it'],
      ['Zoho CRM and Campaigns','Planned: contact records and approved emails.','Not live yet']
     ]}}
   ]},
   {id:'overview',t:'What this system does for you',blocks:[
     {ul:['**Less typing.** Each registration is saved in Airtable automatically and matched to the organization and contact if they already exist (tested 29 Oct).','**One place for partner information.** Partners and their years of participation are in the same workspace.','**A clear view of new registrations.** The 2027 Partners list shows status, payment, toolkit and shipping at a glance.','**Visible to-dos.** Start Here counts the work waiting, so nothing depends on memory or an inbox search.','**Fewer missed registrations.** partners@reef.org gets an alert for each one (tested 29 Oct), and anything unusual is held with a plain-English note.','**Consistent communication.** Every new partner gets the same welcome email automatically.']},
     {note:'Coming later: partner contact records and follow-up emails in Zoho CRM and Zoho Campaigns. These are planned, not live yet.'}
   ]},
   {id:'workspace',t:'Working in the shared Airtable workspace',blocks:[
     {p:'You use the shared REEF Staff login. The Conservation Partners pages are built for your daily work, and you can edit records on them. The Data and Automations tabs hold the connected workflow that moves registrations along; a change there can affect every registration, so stay in the interface pages. Because the login is shared, change records rather than shared views. If you want a view of your own, create a new one and leave the existing ones as they are.'}
   ]},
   {id:'key-facts',t:'Key facts and who decides',blocks:[
     {table:{head:['Topic','Today’s rule','Who decides it'],rows:[
      ['Fee','$100 a year, not tax-deductible, with an optional donation. Nonprofits may ask for a fee reduction; approved partners get no toolkit and no coupon for now.','Leadership and operations staff decide the fee and refund rules. Fee reduction decisions are yours.'],
      ['Year rule','A partner who joins after 1 July of the year before counts as new for the next full calendar year. Partner status for 2027 runs to 31 Dec 2027.','The program team, with leadership.'],
      ['Toolkits','Volunteer Fish Survey Project Curriculum, Starter Kit, Survey Paper (30 sheets), Color ID Card, Invasive Lionfish. The Lionfish toolkit hides the region question, so a blank region on Lionfish is expected.','The program team.'],
      ['Coupons','Made by hand. A paid new partner gets a one-time code for 10% off a store purchase of $250 or more. Partners with a fee reduction get no code.','The program team, with store staff.'],
      ['Invoices','A partner who asks for an invoice does not use the form. Make an Asana task for Christy to make the invoice. $100, due in 30 days. Nothing is shipped or sent until it is paid. See [the invoice steps](#tasks/invoice).','Invoicing policy: leadership and operations staff. The invoice itself: Christy.'],
      ['Dates','No fixed registration deadline is recorded.','The program team.']
     ]}},
     {note:'Rules in the middle column can change. To change one safely, see [Change a program rule](#change/program-decisions).'}
   ]},
   {id:'roles',t:'Roles and support',blocks:[
     {h:'Who does what'},
     {table:{head:['Kind of work','Who'],rows:[
      ['Routine program management: registrations, fee reduction decisions, toolkits, directory listings, partner questions','Noa Parks (Citizen Science Coordinator), with program oversight and history from Janna (Citizen Science Manager)'],
      ['Content and communication: page text, form instructions, welcome email wording, coupon emails, your own procedures','The program team'],
      ['Changes that may affect connected systems: form questions and choices, embedded form, payment field','The program team, with a quick technical check'],
      ['Financial and policy decisions: fee amount, refund rules, invoicing policy','Coordinate with leadership and operations staff'],
      ['Technical administration and troubleshooting: Zoho Flow, Airtable automations, connections, access','Technical support (currently Martha). A backup and a longer-term owner are still to be named.']
     ]}},
     {h:'Which kind of change is it?'},
     {table:{head:['Area','Kind','Why'],rows:[
      ['Daily review, fee reduction decisions, toolkits, directory listings, partner corrections, coupons, partner emails','{routine}','Routine program work that does not change connected systems or policy.'],
      ['Wording on the form, the welcome email and REEF.org pages','{routine}','Content only. Keep the embedded form block and any `${zf:...}` fill-ins in emails as they are.'],
      ['Adding, removing or restructuring questions or choices','{coord}','Airtable matches answers by question and choice names, so a structure change needs a quick check.'],
      ['Fee amount, fee options, refund rules, invoicing policy','{decision}','These are organizational decisions, and the PayPal field has to match them.'],
      ['Refunds','{coord}','Store or operations staff process the money.'],
      ['Zoho Flow, Airtable automations, the Data tab, sender and recipient setup, PayPal connection, access','{coord}','These carry registrations and payments between systems, so they are changed by technical support.']
     ]}},
     {h:'Who can help'},
     {table:{head:['You need','Who','Bring'],rows:[
      ['Answers about partners, shipping, listings, wording','Noa and Janna','The partner record.'],
      ['Refunds and payment questions','Store or operations staff (they have PayPal access)','Organization, amount, PayPal transaction ID.'],
      ['Form, email setup, automations, connections, access','Technical support: currently Martha. A backup contact is still to be named.','The record or page, a screenshot, and what you were trying to do.'],
      ['Zoho Campaigns emails and lists','Tom','The audience and the message.'],
      ['Invoices','Christy','The organization, billing contact, amount and toolkit.'],
      ['Page or site problems that editing cannot fix','Website support (REEF’s backend developer, who has limited availability, so routine page edits are yours)','The page address and a screenshot.']
     ]}}
   ]},
   {id:'paypal-check',t:'PayPal check: the safeguard, its owner and its follow-up',blocks:[
     {p:'**What it protects.** If the registration automation stops, nothing alerts anyone: a partner could pay and not appear. A weekly comparison of PayPal payments with the 2027 Partners list catches this.'},
     {rows:[
      ['Frequency','Weekly (current practice).'],
      ['Who does it today','Store or operations staff, because they have PayPal access. Noa asks them; the program manager does not have PayPal access.'],
      ['Who owns it','**Not yet assigned.** There is no named person and no recurring reminder.'],
      ['Automation','None. No alert exists yet if the automation fails, and unpaid or abandoned payments are not logged.'],
      ['Operational follow-up','Name an owner for the weekly check and set a recurring reminder (an Asana recurring task or a calendar entry), so the program manager does not have to remember it alone. Decide whether an automatic failure alert is worth building.']
     ]},
     {p:'Steps: [Run the weekly PayPal check](#tasks/paypal-check).'}
   ]},
   {id:'invoices',t:'Invoiced registrations: who does what',blocks:[
     {p:'A partner who asks for an invoice does not use the form. This pathway is manual today and is marked **Interim Process**: {interim}'},
     {table:{head:['Step','Who','Status'],rows:[
      ['Partner asks to pay by invoice. Tell them an invoice is coming.','Program manager (Noa or Janna)','Manual'],
      ['Create an Asana task for Christy with organization, billing contact and email, $100 (due in 30 days) and toolkit wanted','Program manager','Manual'],
      ['Make and send the invoice','Christy','Manual'],
      ['Hold the toolkit and other follow-up until paid','Program manager','Manual'],
      ['Tell the program manager the invoice is paid','Not written down yet. Suggested: Christy replies on the Asana task.','Needs an owner'],
      ['Add the paid registration so it appears in 2027 Partners (Registered)','Technical support (currently Martha)','Manual. Not automated.'],
      ['Ship the toolkit and send the coupon','Program manager','Manual']
     ]}},
     {p:'Follow-up needed (see the gaps list): agree how a paid invoice is recorded, who confirms payment, and whether a form option or automation is worth building. Until then, do not describe invoicing as automated to partners or staff.'}
   ]},
   {id:'launch',t:'Launch stage and what is still manual',blocks:[
     {h:'Still being set up'},
     {ul:['Technical support is Martha. A backup contact is still to be named.','The welcome email and the alert are set to send from Noa’s profile. Confirm on the first real registration that both come from Noa and that replies reach her.','Uploaded logos go directly to a folder in Noa’s Dropbox. Confirm the first one arrives.','PayPal: store or operations staff handle PayPal questions, refunds and the weekly payment check.','How a paid invoice becomes a registration, and where the team records coupon codes sent, are still being written down.']},
     {h:'What is still manual'},
     {ul:['Coupons, toolkit shipping, directory publishing and partner replies are done by hand.','No alert tells anyone if the automation stops, and unpaid or abandoned payments are not logged. The weekly PayPal check covers this for now.','Partners cannot yet edit their own directory listing. A test version exists and is not in use.','No real new registration has come through the live form yet, so the first few are worth a close look. See [the first-live-registrations check](#tasks/first-live).']}
   ]},
   {id:'improve',t:'Help us improve the workflow',blocks:[
     {p:'This system is a foundation, not a finished product. If something feels cumbersome, confusing or unnecessarily manual, flag it. The goal is to keep improving the workflow so it supports the way the program actually works. Decide which kind of change it is:'},
     {ul:['**Something you can change yourself:** wording, content, your own procedures. Just do it.','**An interface improvement you would like:** a new view, a clearer label, a missing column.','**A new automation that could save time.**','**A problem that needs troubleshooting:** use the Fix a Problem tab first.','**A policy decision that needs a wider conversation:** fees, refunds, invoicing.']},
     {p:'For the middle three, add a short task to the Conservation Partners project in Asana: what you were trying to do and what would help.'}
   ]},
   {id:'glossary',t:'Glossary',blocks:[
     {table:{head:['Term','Meaning'],rows:[
      ['Registrations Inbox','The Airtable table where every form submission lands first. It keeps the original submission, so corrections are made on the partner record instead.'],
      ['Held item / Needs Attention','A registration Airtable set aside for a person to check instead of guessing. It shows a Plain-English Issue and a Next Step.'],
      ['Fee reduction','A request, reviewed by staff, to pay less than the $100 fee. It is not an option a partner can simply select.'],
      ['Fulfillment Status','Where a toolkit stands: Not started, Sent or N/A.'],
      ['Directory Review Status','Where a public listing stands: Needs review, Approved or Fix needed.'],
      ['Processing Status','Where a registration is in the automation. Set it to New only when a card tells you to (for example after approving a fee reduction).'],
      ['Zoho Forms','The tool that holds the registration form and the welcome email.'],
      ['Zoho Flow','The tool that carries each registration from the form to Airtable. Technical support looks after it.'],
      ['Zoho Campaigns / Zoho CRM','Planned tools for follow-up emails and contact records. Not live for partners yet.'],
      ['Shared REEF Staff login','The one Airtable login the team shares. Edit records, not shared views.'],
      ['TEST- records','Practice records used by technical support for end-to-end tests. They are never used for live testing by staff.']
     ]}}
   ]},
   {id:'links',t:'All links',blocks:[{links:true}]},
   {id:'about',t:'About this playbook',blocks:[
     {rows:[
      ['Version','2.0, 3 Nov 2026. Reorganized into the shared REEF playbook structure.'],
      ['System status last verified','2 Nov 2026 (see the technical status detail above).'],
      ['Program owner','Noa Parks (Citizen Science Coordinator), with program oversight from Janna (Citizen Science Manager).'],
      ['Technical support','Currently Martha. A backup and a longer-term owner are still to be named.']
     ]},
     {p:'**Keeping it accurate.** Program content (steps, wording, who to contact) is edited by the program team in `content.js`. When the live system changes, update the affected lines and the date. The full guide, including what needs technical help to publish, is the [REEF Program Playbook Standard](https://github.com/reef-environmental-education-foundation/reef-program-playbooks/blob/main/standard/PLAYBOOK_STANDARD.md).'}
   ]}
  ]
},

links:[['Conservation Partners interface (home)',CI],['Start Here',PG.start],['2027 Partners (Registered)',PG.partners27],['Fee Reduction Requests',PG.fee],['Other Needs Attention',PG.attn],['Ship Toolkits',PG.ship],['Directory Review',PG.dir],['Edit a Partner Record (2027)',PG.edit],['All Partners (All Years)',PG.all],['Dashboard',PG.dash],['Zoho Forms','https://forms.zoho.com/'],['Registration page on REEF.org','https://www.reef.org/Register-CP-2027'],['Thank-you page on REEF.org','https://www.reef.org/Thank-You-CP-2027'],['Renewal page on REEF.org (separate Renewal playbook planned)','https://www.reef.org/Renew-CP-2027']]
};
