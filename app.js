// ── Page loader ───────────────────────────────────────
const pages = ['home','stat','scan','vault','radio','tasks','calc','map'];

async function loadPages() {
  for (const id of pages) {
    try {
      const res = await fetch(`page-${id}.html`);
      const html = await res.text();
      document.getElementById('page-' + id).innerHTML = html;
    } catch(e) { console.warn('Could not load page:', id, e); }
  }
  initApp();
}

function initApp() {
  tick();
  setInterval(tick, 1000);
  buildWaveform();
  renderTasks();
  setInterval(rotateBearing, 3500);
  setInterval(simBattery, 5000);
}

function el(id) { return document.getElementById(id); }

// ── Clock ────────────────────────────────────────────
function tick() {
  const now = new Date();
  const t = now.toTimeString().slice(0, 8);
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const d = `${days[now.getDay()]} ${String(now.getDate()).padStart(2,'0')} ${months[now.getMonth()]} ${now.getFullYear()}`;
  if (el('hdr-clock')) el('hdr-clock').textContent = t;
  if (el('stat-time')) el('stat-time').textContent = t;
  if (el('stat-date')) el('stat-date').textContent = d;
  if (el('home-clock-sm')) el('home-clock-sm').textContent = t.slice(0,5);
}

// ── Battery ──────────────────────────────────────────
let bat = 87;
function simBattery() {
  bat = Math.max(15, Math.min(99, bat + (Math.random() > 0.5 ? 1 : -1)));
  if (el('hdr-bat-pct')) el('hdr-bat-pct').textContent = bat + '%';
  if (el('stat-bat')) el('stat-bat').textContent = bat + '%';
  if (el('home-bat')) el('home-bat').textContent = bat + '%';
  const fill = el('bat-fill');
  if (fill) fill.setAttribute('width', Math.round(bat / 100 * 12));
}

// ── Navigation ───────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (el('page-' + id)) el('page-' + id).classList.add('active');
  const tab = document.querySelector(`.tab[data-page="${id}"]`);
  if (tab) tab.classList.add('active');
  updateHomeTasks();
}

// ── Waveform ─────────────────────────────────────────
function buildWaveform() {
  const wf = el('waveform');
  if (!wf) return;
  for (let i = 0; i < 22; i++) {
    const b = document.createElement('div');
    b.className = 'wb';
    b.style.height = (Math.random() * 22 + 4) + 'px';
    b.style.animationDelay = (Math.random() * 0.8) + 's';
    b.style.animationDuration = (0.35 + Math.random() * 0.55) + 's';
    wf.appendChild(b);
  }
}

// ── Radio ────────────────────────────────────────────
const stations = [
  { name: 'WASTELAND FM', freq: '101.1 FM' },
  { name: 'VAULT RADIO',  freq: '88.3 FM'  },
  { name: 'DEAD AIR',     freq: '66.6 FM'  },
  { name: 'SIGNAL UNKNOWN', freq: '???.? FM' },
];

function selectStation(i) {
  if (el('radio-freq')) el('radio-freq').textContent = stations[i].freq;
  if (el('radio-name')) el('radio-name').textContent = stations[i].name;
  if (el('home-freq')) el('home-freq').textContent = stations[i].freq.split(' ')[0];
  document.querySelectorAll('.station').forEach((s, j) => s.classList.toggle('on', j === i));
  const wfEl = el('waveform');
  const statusEl = el('radio-status');
  if (i === 2) { if(statusEl) statusEl.textContent='■ STATIC'; if(wfEl) wfEl.style.opacity='0.15'; }
  else if (i === 3) { if(statusEl) statusEl.textContent='? UNKNOWN SOURCE'; if(wfEl) wfEl.style.opacity='0.5'; }
  else { if(statusEl) statusEl.textContent='▶ NOW BROADCASTING'; if(wfEl) wfEl.style.opacity='1'; }
}

// ── Scan ─────────────────────────────────────────────
const scanData = [
  ['ENTITY DETECTED: HUMANOID', 'THREAT LEVEL: NON-HOSTILE', 'DISTANCE: 12.4M', 'STATUS: MOVING NE'],
  ['STRUCTURE: CONCRETE', 'AGE ESTIMATE: 47 YRS', 'INTEGRITY: 62%', 'RADIATION: TRACE'],
  ['ATMOSPHERE OK', 'O2: 20.9%  CO2: 0.04%', 'TEMP: 22°C', 'HUMIDITY: 68%'],
  ['ANOMALY DETECTED', 'CLASS: UNKNOWN', 'SIGNAL: WEAK', 'RECOMMEND: AVOID'],
  ['ITEM: STIMPAK', 'CONDITION: GOOD', 'HP RESTORE: +25', 'STATUS: USABLE'],
];
let scanning = false;

function doScan() {
  if (scanning) return;
  scanning = true;
  const label = el('scan-label');
  const beamH = el('scan-beam-h');
  const beamV = el('scan-beam-v');
  const out = el('scan-readout');
  const idle = el('scan-idle');
  if (label) label.textContent = 'SCANNING...';
  if (out) { out.classList.remove('show'); out.innerHTML = ''; }
  if (idle) idle.style.display = 'none';
  if (beamH) { beamH.classList.remove('on'); void beamH.offsetWidth; beamH.classList.add('on'); }
  if (beamV) { beamV.classList.remove('on'); void beamV.offsetWidth; beamV.classList.add('on'); }
  setTimeout(() => {
    if (beamH) beamH.classList.remove('on');
    if (beamV) beamV.classList.remove('on');
    const rows = scanData[Math.floor(Math.random() * scanData.length)];
    if (out) {
      out.classList.add('show');
      rows.forEach((r, i) => {
        const d = document.createElement('div');
        d.className = 'scan-line-item';
        d.style.animationDelay = (i * 0.12) + 's';
        d.textContent = '▸ ' + r;
        out.appendChild(d);
      });
    }
    if (label) label.textContent = 'TAP TO SCAN AGAIN';
    scanning = false;
  }, 2000);
}

// ── Vault ─────────────────────────────────────────────
const vaultData = [
  { id: 'FILE-0047', text: 'SUBJECT LAST SEEN AT SECTOR 9. MOTIVE UNKNOWN. CASE: OPEN.' },
  { id: 'FILE-0112', text: 'EXPERIMENT 112-B CAUSED UNEXPECTED COGNITIVE ENHANCEMENT. RECORDS SEALED.' },
  { id: 'FILE-0208', text: 'SIGNAL ORIGINATES BELOW GROUND. DEPTH UNKNOWN. CREW SENT. NO RETURN.' },
  { id: 'FILE-0333', text: 'VAULT 33 NEVER OPENED. POPULATION UNKNOWN. LAST PING: 14 YEARS AGO.' },
  { id: 'FILE-0501', text: 'OPERATION CLEAN SWEEP SUCCESSFUL. DETAILS REDACTED. AUTH: LEVEL 5.' },
  { id: 'FILE-0666', text: 'ANOMALY CANNOT BE EXPLAINED BY CURRENT SCIENCE. QUARANTINE RECOMMENDED.' },
  { id: 'FILE-0777', text: 'THREE SUBJECTS SURVIVED. ONLY ONE REMEMBERS. LOCATION: CLASSIFIED.' },
];
let lastVault = -1;

function retrieveVault() {
  let i;
  do { i = Math.floor(Math.random() * vaultData.length); } while (i === lastVault);
  lastVault = i;
  const box = el('vault-display');
  if (!box) return;
  box.innerHTML = '<div class="vault-id">ACCESSING...</div><div class="vault-body" style="color:var(--dim);margin-top:8px;">DECRYPTING DATA...</div>';
  setTimeout(() => {
    box.classList.add('glitch');
    setTimeout(() => box.classList.remove('glitch'), 250);
    box.innerHTML = `<div class="vault-id">${vaultData[i].id} · CLEARANCE: LEVEL 3</div><div class="vault-body" style="margin-top:10px;">${vaultData[i].text}</div><div class="vault-clear" style="margin-top:10px;">EYES ONLY · DO NOT DISTRIBUTE</div>`;
  }, 900);
}

// ── Tasks ─────────────────────────────────────────────
let tasks = [
  { text: 'CHECK PERIMETER', done: false },
  { text: 'RESTOCK SUPPLIES', done: false },
  { text: 'CONTACT BASE CAMP', done: true },
];

function renderTasks() {
  const list = el('task-list');
  if (!list) return;
  list.innerHTML = '';
  tasks.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = 'task-item' + (t.done ? ' done' : '');
    div.innerHTML = `<div class="t-check" onclick="toggleTask(${i})">${t.done ? '✓' : ''}</div><div class="t-text" onclick="toggleTask(${i})">${t.text}</div><div class="t-del" onclick="event.stopPropagation();deleteTask(${i})">✕</div>`;
    list.appendChild(div);
  });
  updateHomeTasks();
  const done = tasks.filter(t => t.done).length;
  const pending = tasks.filter(t => !t.done).length;
  if (el('task-stats-done')) el('task-stats-done').textContent = done + ' DONE';
  if (el('task-stats-pending')) el('task-stats-pending').textContent = pending + ' PENDING';
}

function toggleTask(i) { tasks[i].done = !tasks[i].done; renderTasks(); }
function deleteTask(i) { tasks.splice(i, 1); renderTasks(); }
function addTask() {
  const inp = el('task-input');
  if (!inp) return;
  const v = inp.value.trim().toUpperCase();
  if (!v) return;
  tasks.unshift({ text: v, done: false });
  inp.value = '';
  renderTasks();
}
function updateHomeTasks() {
  const done = tasks.filter(t => t.done).length;
  if (el('home-tasks')) el('home-tasks').textContent = done + '/' + tasks.length;
}

// ── Calculator ───────────────────────────────────────
let cs = { val: '0', expr: '', op: null, prev: null, reset: false };
let calcHistoryLog = [];

function calcDisplay() {
  const v = cs.val;
  if (el('calc-val')) el('calc-val').textContent = v.length > 10 ? parseFloat(v).toExponential(2) : v;
  if (el('calc-expr')) el('calc-expr').textContent = cs.expr;
}
function cn(n) {
  if (cs.reset) { cs.val = ''; cs.reset = false; }
  if (n === '.' && cs.val.includes('.')) return;
  cs.val = (cs.val === '0' && n !== '.') ? n : (cs.val + n).slice(0, 12);
  calcDisplay();
}
function co(op) {
  const cur = parseFloat(cs.val) || 0;
  if (op === 'C') { cs = { val: '0', expr: '', op: null, prev: null, reset: false }; }
  else if (op === '+/-') { cs.val = String(-cur); }
  else if (op === '%') { cs.val = String(cur / 100); }
  else if (op === '=') {
    if (cs.op && cs.prev !== null) {
      const r = compute(cs.prev, cur, cs.op);
      const entry = `${cs.prev} ${cs.op} ${cur} = ${r}`;
      calcHistoryLog.unshift(entry);
      if (calcHistoryLog.length > 4) calcHistoryLog.pop();
      if (el('calc-history')) el('calc-history').innerHTML = calcHistoryLog.map(h => `<div style="opacity:0.6">${h}</div>`).join('');
      cs.expr = entry;
      cs.val = String(r); cs.op = null; cs.prev = null; cs.reset = true;
    }
  } else {
    if (cs.op && cs.prev !== null && !cs.reset) { cs.prev = compute(cs.prev, cur, cs.op); cs.val = String(cs.prev); }
    else { cs.prev = cur; }
    cs.op = op; cs.expr = `${cs.prev} ${op}`; cs.reset = true;
  }
  calcDisplay();
}
function compute(a, b, op) {
  const r = op==='+' ? a+b : op==='-' ? a-b : op==='*' ? a*b : b===0 ? 'ERR' : a/b;
  return typeof r === 'number' ? Math.round(r * 1e10) / 1e10 : r;
}

// ── Compass ──────────────────────────────────────────
let bearing = 0;
function rotateBearing() {
  bearing = (bearing + Math.floor(Math.random() * 22 - 4) + 360) % 360;
  const n = el('needle');
  if (n) n.style.transform = `rotate(${bearing}deg)`;
}

// ── Boot ─────────────────────────────────────────────
loadPages();
