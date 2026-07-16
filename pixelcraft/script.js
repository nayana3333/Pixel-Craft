const events = [
  {id:'hackathon',image:'images/events/hackathon.webp',imageAlt:'Students collaborating during a university hackathon',code:'VX-01',title:'48H Hack Protocol',category:'Coding',price:799,team:'2–4 members',duration:'48 hours',venue:'Innovation Lab',gradient:'linear-gradient(135deg,#162c72,#6757e8)',skills:['Full-stack','AI','Product'],summary:'Build and pitch a working solution to a real problem under a relentless clock.',description:'Teams move from problem discovery to a tested prototype and live pitch. Mentors support product thinking, engineering decisions and storytelling.',takeaways:['Problem statements revealed at kickoff','Three mentor checkpoints','Prototype, repository and pitch deck required','Judged on impact, execution and clarity']},
  {id:'robotics',image:'images/events/robotics.webp',imageAlt:'An autonomous robot competing on an obstacle arena',code:'VX-02',title:'Autonomous Arena',category:'Robotics',price:599,team:'2–4 members',duration:'4 hours',venue:'Quadrangle',gradient:'linear-gradient(135deg,#073c55,#18a5a1)',skills:['Sensors','Control','Hardware'],summary:'Engineer a machine that can read the arena, decide fast and move with precision.',description:'Design an autonomous robot for a staged navigation challenge combining line tracking, obstacles and object placement.',takeaways:['Bring your own assembled robot','Arena dimensions shared before the event','Multiple timed qualification rounds','Safety inspection is mandatory']},
  {id:'ideathon',image:'images/events/ideathon.webp',imageAlt:'A student presenting an innovation idea to judges',code:'VX-03',title:'Zero-to-One Ideathon',category:'Innovation',price:299,team:'1–3 members',duration:'6 hours',venue:'Seminar Hall',gradient:'linear-gradient(135deg,#63300e,#ff825b)',skills:['Strategy','Pitching','Research'],summary:'Find the sharpest problem in the room and turn it into a credible venture story.',description:'A rapid innovation sprint for teams who can connect user pain, technology feasibility and a viable path to impact.',takeaways:['Themes span climate, health and access','Five-minute pitch plus Q&A','Evidence matters more than slide polish','Top concepts receive mentor feedback']},
  {id:'cyber',image:'images/events/cyber.webp',imageAlt:'Students competing in an ethical cybersecurity challenge',code:'VX-04',title:'Cipher Siege',category:'Cyber',price:399,team:'1–2 members',duration:'5 hours',venue:'Network Lab',gradient:'linear-gradient(135deg,#14271f,#32a66b)',skills:['Web','Crypto','Forensics'],summary:'Trace the breach, break the cipher and capture every flag before the network closes.',description:'A beginner-friendly capture-the-flag competition covering web exploitation, cryptography, OSINT and digital forensics.',takeaways:['Isolated legal practice environment','Difficulty rises across five zones','Hints trade against final points','Bring a laptop with Linux support']},
  {id:'design',image:'images/events/design.webp',imageAlt:'Design students creating user interface prototypes',code:'VX-05',title:'Pixel Craft X',category:'Design',price:249,team:'1–2 members',duration:'4 hours',venue:'Design Studio',gradient:'linear-gradient(135deg,#5a174d,#d34d98)',skills:['UI/UX','Systems','Story'],summary:'Turn an ordinary brief into a digital experience people remember and want to use.',description:'A product-design challenge focused on user journeys, interface systems and the quality of the final story—not just the hero screen.',takeaways:['Brief and brand kit revealed onsite','Wireframes and high-fidelity screens','Accessibility is part of judging','Clickable prototype recommended']},
  {id:'gaming',image:'images/events/gaming.webp',imageAlt:'Students competing in a university esports tournament',code:'VX-06',title:'Neon Circuit',category:'Gaming',price:499,team:'1–5 members',duration:'League format',venue:'Gaming Arena',gradient:'linear-gradient(135deg,#341168,#7050ff)',skills:['Valorant','EA FC','Strategy'],summary:'Enter a tournament experience built for clean competition, sharp calls and clutch plays.',description:'A multi-title competitive gaming arena with structured brackets, referee oversight and dedicated warm-up slots.',takeaways:['Separate rules for every title','Valid student ID required','Anti-cheat checks before play','Fixtures published after check-in']},
  {id:'drone',image:'images/events/drone.webp',imageAlt:'A racing drone flying through a competition gate',code:'VX-07',title:'Drone Vector',category:'Robotics',price:699,team:'2–3 members',duration:'3 hours',venue:'Open Grounds',gradient:'linear-gradient(135deg,#17465a,#42bce4)',skills:['Piloting','Build','Precision'],summary:'Navigate a precision flight course where every gate, turn and second counts.',description:'Pilots compete across technical flight stages that test control, speed, spatial awareness and safe recovery.',takeaways:['Practice slot before qualification','Prop guards are compulsory','Battery safety rules apply','Fastest clean run wins']},
  {id:'data',image:'images/events/data.webp',imageAlt:'Students analyzing data science visualizations',code:'VX-08',title:'Data After Dark',category:'Coding',price:349,team:'1–3 members',duration:'8 hours',venue:'AI Lab',gradient:'linear-gradient(135deg,#203267,#2c9dd8)',skills:['Python','ML','Insights'],summary:'Clean a chaotic dataset, find the signal and make a model decision-makers can trust.',description:'A practical data challenge where analysis quality, explainability and business interpretation matter as much as leaderboard score.',takeaways:['Dataset released at kickoff','External pretrained models limited','Notebook and summary dashboard required','Judged on rigor and explainability']}
];

const schedules = {
  day1:[
    {time:'08:30',type:'CHECK-IN',title:'Gates open + participant verification',desc:'Main block reception · Carry college ID and registration QR.'},
    {time:'09:45',type:'OPENING',title:'Ignition keynote',desc:'Welcome, safety briefing and challenge reveal.'},
    {time:'11:00',type:'BUILD',title:'Hack Protocol + Pixel Craft begin',desc:'Teams enter their dedicated work zones.'},
    {time:'14:00',type:'ARENA',title:'Autonomous Arena qualifiers',desc:'First timed robotics rounds in the quadrangle.'},
    {time:'17:30',type:'COMMUNITY',title:'Founder stories + open mic',desc:'A fast evening session for ideas, lessons and connections.'}
  ],
  day2:[
    {time:'09:00',type:'RESTART',title:'Day two check-in',desc:'Team updates, bracket confirmation and mentor hours.'},
    {time:'10:30',type:'SECURITY',title:'Cipher Siege goes live',desc:'Five CTF zones unlock simultaneously.'},
    {time:'13:00',type:'PITCH',title:'Zero-to-One final room',desc:'Shortlisted teams present to the jury.'},
    {time:'15:30',type:'FINALS',title:'Prototype demos + arena finals',desc:'Public demonstrations and final competitive rounds.'},
    {time:'18:00',type:'CLOSING',title:'Awards and closing signal',desc:'Results, acknowledgements and the final festival wrap.'}
  ]
};

const state = {filter:'All',query:'',saved:new Set(JSON.parse(localStorage.getItem('vx-saved') || '[]')),showSaved:false,step:1,selected:new Set()};
const $ = (selector,scope=document) => scope.querySelector(selector);
const $$ = (selector,scope=document) => [...scope.querySelectorAll(selector)];

function money(value){return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(value)}
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2200)}
function lockPage(locked){document.body.classList.toggle('modal-open',locked)}

function renderFilters(){
  const categories=['All',...new Set(events.map(event=>event.category))];
  $('#event-filters').innerHTML=categories.map(category=>`<button type="button" class="${state.filter===category?'active':''}" data-filter="${category}">${category}</button>`).join('');
}

function eventCard(event){
  const saved=state.saved.has(event.id);
  return `<article class="event-card" data-event-id="${event.id}" style="--event-gradient:${event.gradient}">
    <div class="event-visual"><img src="${event.image}" alt="${event.imageAlt}" loading="lazy"><span class="event-code">${event.code} / ${event.category.toUpperCase()}</span><button class="save-event ${saved?'saved':''}" type="button" data-save="${event.id}" aria-label="${saved?'Remove':'Save'} ${event.title}">${saved?'◆':'◇'}</button></div>
    <div class="event-body"><div class="event-meta"><span>${event.team}</span><span>${event.duration}</span></div><h3>${event.title}</h3><p>${event.summary}</p><div class="event-skills">${event.skills.map(skill=>`<span>${skill}</span>`).join('')}</div><div class="event-footer"><strong>${money(event.price)}</strong><button type="button" data-details="${event.id}">View mission →</button></div></div>
  </article>`;
}

function renderEvents(){
  const query=state.query.toLowerCase();
  const filtered=events.filter(event=>(state.filter==='All'||event.category===state.filter)&&(!state.showSaved||state.saved.has(event.id))&&(!query||[event.title,event.category,event.summary,...event.skills].join(' ').toLowerCase().includes(query)));
  $('#event-grid').innerHTML=filtered.map(eventCard).join('');
  $$('[data-details]',$('#event-grid')).forEach(button=>button.addEventListener('click',()=>openEvent(button.dataset.details)));
  $('#empty-state').hidden=filtered.length>0;
  $('#saved-count').textContent=state.saved.size;
  $('#saved-button').classList.toggle('active',state.showSaved);
}

function toggleSave(id){
  if(state.saved.has(id)){state.saved.delete(id);toast('Removed from saved events')}else{state.saved.add(id);toast('Saved to your shortlist')}
  localStorage.setItem('vx-saved',JSON.stringify([...state.saved]));renderEvents();renderRegistrationEvents();
}

function openEvent(id){
  const event=events.find(item=>item.id===id);if(!event)return;
  $('#event-modal-content').innerHTML=`<div class="modal-event-hero" style="background-image:linear-gradient(0deg,rgba(2,5,10,.9),rgba(2,5,10,.08)),url('${event.image}')"><span class="event-code">${event.code} / ${event.category.toUpperCase()}</span><h2 id="event-modal-title">${event.title}</h2></div><div class="modal-event-body"><div><p>${event.description}</p><h3>Mission parameters</h3><div class="modal-list">${event.takeaways.map(item=>`<span>↳ ${item}</span>`).join('')}</div></div><aside class="modal-sidebar"><dl><div><dt>ENTRY</dt><dd>${money(event.price)} / team</dd></div><div><dt>FORMAT</dt><dd>${event.team}</dd></div><div><dt>DURATION</dt><dd>${event.duration}</dd></div><div><dt>VENUE</dt><dd>${event.venue}</dd></div></dl><button class="button button-primary register-event" data-register="${event.id}" type="button">Select & register <span>→</span></button></aside></div>`;
  $('#event-modal').classList.add('open');$('#event-modal').setAttribute('aria-hidden','false');lockPage(true);$('.modal-close',$('#event-modal')).focus();
}
function closeEvent(){const modal=$('#event-modal');modal.classList.remove('open');modal.setAttribute('aria-hidden','true');lockPage(false)}

function renderSchedule(day='day1'){$('#timeline').innerHTML=schedules[day].map(item=>`<article class="timeline-item"><time class="timeline-time">${item.time}</time><div class="timeline-marker"></div><div class="timeline-content"><small>${item.type}</small><h3>${item.title}</h3><p>${item.desc}</p></div></article>`).join('')}

function renderRegistrationEvents(){
  $('#registration-events').innerHTML=events.map(event=>`<label class="registration-option"><input type="checkbox" value="${event.id}" ${state.selected.has(event.id)?'checked':''}><div><strong>${event.title}</strong><span>${event.category} · ${event.team}</span></div><b>${money(event.price)}</b></label>`).join('');
}
function syncStep(){
  $$('.form-step').forEach(el=>el.classList.toggle('active',Number(el.dataset.formStep)===state.step));
  $$('[data-step-dot]').forEach(el=>el.classList.toggle('active',Number(el.dataset.stepDot)<=state.step));
  $('#back-step').hidden=state.step===1;$('#form-hint').textContent=`Step ${state.step} of 3`;
  $('#next-step').innerHTML=state.step===3?`Confirm preview <span>→</span>`:`Continue <span>→</span>`;
  if(state.step===3)renderReview();
}
function validateProfile(){
  const form=$('#registration-form');const fields=['name','email','college','phone'];let valid=true;
  fields.forEach(name=>{const input=form.elements[name];const label=input.closest('label');let message='';const value=input.value.trim();
    if(!value)message='This field is required.';else if(name==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))message='Enter a valid email.';else if(name==='phone'&&!/^[0-9]{10}$/.test(value.replace(/\s/g,'')))message='Enter a 10-digit number.';
    label.classList.toggle('invalid',Boolean(message));$('small',label).textContent=message;if(message)valid=false;
  });return valid;
}
function renderReview(){
  const form=$('#registration-form');const selectedEvents=events.filter(event=>state.selected.has(event.id));const total=selectedEvents.reduce((sum,event)=>sum+event.price,0);
  $('#review-details').innerHTML=`<div class="review-row"><span>Participant</span><strong>${form.elements.name.value}</strong></div><div class="review-row"><span>College</span><strong>${form.elements.college.value}</strong></div>${selectedEvents.map(event=>`<div class="review-row"><span>${event.title}</span><strong>${money(event.price)}</strong></div>`).join('')}`;
  $('#review-total').textContent=money(total);
}
function openRegistration(preselect){
  if(preselect)state.selected.add(preselect);else if(!state.selected.size&&state.saved.size)state.saved.forEach(id=>state.selected.add(id));
  state.step=1;renderRegistrationEvents();syncStep();$('#success-state').classList.remove('active');$('.stepper').hidden=false;$('.form-actions').hidden=false;$$('.form-step').forEach(el=>el.hidden=false);
  const modal=$('#registration-modal');modal.classList.add('open');modal.setAttribute('aria-hidden','false');lockPage(true);setTimeout(()=>$('#registration-form input')?.focus(),50);
}
function closeRegistration(){const modal=$('#registration-modal');modal.classList.remove('open');modal.setAttribute('aria-hidden','true');lockPage(false)}
function completeDemo(){
  const form=$('#registration-form');localStorage.setItem('vx-demo-registration',JSON.stringify({name:form.elements.name.value,events:[...state.selected],createdAt:new Date().toISOString(),payment:'sandbox'}));
  $$('.form-step').forEach(el=>el.hidden=true);$('.stepper').hidden=true;$('.form-actions').hidden=true;$('#success-state').classList.add('active');
}

renderFilters();renderEvents();renderSchedule();renderRegistrationEvents();

$('#event-filters').addEventListener('click',event=>{const button=event.target.closest('[data-filter]');if(!button)return;state.filter=button.dataset.filter;state.showSaved=false;renderFilters();renderEvents()});
$('#event-search').addEventListener('input',event=>{state.query=event.target.value;renderEvents()});
$('#saved-button').addEventListener('click',()=>{state.showSaved=!state.showSaved;renderEvents()});
$('#clear-filters').addEventListener('click',()=>{state.filter='All';state.query='';state.showSaved=false;$('#event-search').value='';renderFilters();renderEvents()});
$('#event-grid').addEventListener('click',event=>{const save=event.target.closest('[data-save]');if(save)toggleSave(save.dataset.save)});
$('#event-modal').addEventListener('click',event=>{if(event.target.closest('[data-close-modal]'))closeEvent();const register=event.target.closest('[data-register]');if(register){closeEvent();openRegistration(register.dataset.register)}});

$$('.day-tabs button').forEach(button=>button.addEventListener('click',()=>{$$('.day-tabs button').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-selected',item===button)});renderSchedule(button.dataset.day)}));
$$('.open-registration').forEach(button=>button.addEventListener('click',()=>openRegistration()));
$('#registration-modal').addEventListener('click',event=>{if(event.target.closest('[data-close-registration]'))closeRegistration()});
$('#registration-events').addEventListener('change',event=>{if(event.target.type!=='checkbox')return;event.target.checked?state.selected.add(event.target.value):state.selected.delete(event.target.value)});
$('#next-step').addEventListener('click',()=>{
  if(state.step===1&&!validateProfile())return toast('Check the highlighted fields');
  if(state.step===2&&!state.selected.size)return toast('Select at least one event');
  if(state.step===3)return completeDemo();state.step+=1;syncStep();
});
$('#back-step').addEventListener('click',()=>{if(state.step>1){state.step-=1;syncStep()}});

const menuButton=$('#menu-button'),mobileNav=$('#mobile-nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',open);mobileNav.classList.toggle('open',open);mobileNav.setAttribute('aria-hidden',!open)});
$$('.mobile-nav a').forEach(link=>link.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');mobileNav.classList.remove('open');mobileNav.setAttribute('aria-hidden','true')}));

$('#theme-toggle').addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('vx-theme',document.body.classList.contains('light')?'light':'dark')});
if(localStorage.getItem('vx-theme')==='light')document.body.classList.add('light');

document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){if($('#event-modal').classList.contains('open'))closeEvent();if($('#registration-modal').classList.contains('open'))closeRegistration()}
  if(event.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){event.preventDefault();$('#event-search').focus()}
});

function updateScrollUI(){
  $('.site-header').classList.toggle('scrolled',scrollY>20);
  const distance=document.documentElement.scrollHeight-innerHeight;
  $('#page-progress').style.width=`${distance>0?Math.min(100,(scrollY/distance)*100):0}%`;
}
window.addEventListener('scroll',updateScrollUI,{passive:true});updateScrollUI();
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});$$('.reveal').forEach(el=>revealObserver.observe(el));
const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){$$('.desktop-nav a').forEach(link=>{const active=link.getAttribute('href')===`#${entry.target.id}`;link.classList.toggle('active',active);active?link.setAttribute('aria-current','location'):link.removeAttribute('aria-current')})}}),{rootMargin:'-30% 0px -60%'});$$('main section[id]').forEach(section=>navObserver.observe(section));
