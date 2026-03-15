// ── Helpers ─────────────────────────────────────────
function el(id) { return document.getElementById(id); }

// ── Clock ────────────────────────────────────────────
function tick() {
  const now = new Date();
  const t = now.toTimeString().slice(0, 8);
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const dateStr = `${days[now.getDay()]} ${String(now.getDate()).padStart(2,'0')} ${months[now.getMonth()]} ${now.getFullYear()}`;
  el('hdr-clock').textContent = t;
  el('stat-time').textContent = t;
  el('stat-date').textContent = dateStr;
  const hm = t.slice(0,5);
  if (el('home-clock-sm')) el('home-clock-sm').textContent = hm;
}
setInterval(tick, 1000);
tick();

// ── Battery sim ──────────────────────────────────────
let bat = 87;
setInterval(() => {
  bat = Math.max(15, Math.min(99, bat + (Math.random() > 0.5 ? 1 : -1)));
  const pct = bat + '%';
  el('hdr-bat-pct').textContent = pct;
  el('stat-bat').textContent = pct;
  if (el('home-bat')) el('home-bat').textContent = pct;
  // update battery fill bar width
  const fill = el('bat-fill');
  if (fill) fill.setAttribute('width', Math.round(bat / 100 * 10));
}, 5000);

// ── Navigation ───────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const page = el('page-' + id);
  if (page) page.classList.add('active');
  const tab = document.querySelector(`.tab[data-page="${id}"]`);
  if (tab) tab.classList.add('active');
  updateHomeTasks();
}

// ── Waveform ─────────────────────────────────────────
const wf = el('waveform');
for (let i = 0; i < 22; i++) {
  const b = document.createElement('div');
  b.className = 'wb';
  b.style.height = (Math.random() * 24 + 4) + 'px';
  b.style.animationDelay = (Math.random() * 0.8) + 's';
  b.style.animationDuration = (0.35 + Math.random() * 0.55) + 's';
  wf.appendChild(b);
}

// ── Radio ────────────────────────────────────────────
const stations = [
  { name: 'WASTELAND FM', freq: '101.1 FM' },
  { name: 'VAULT RADIO',  freq: '88.3 FM'  },
  { name: 'DEAD AIR',     freq: '66.6 FM'  },
  { name: 'SIGNAL UNKNOWN', freq: '???.? FM' },
];
let curStation = 0;

function selectStation(i) {
  curStation = i;
  el('radio-freq').textContent = stations[i].freq;
  el('radio-name').textContent = stations[i].name;
  if (el('home-freq')) el('home-freq').textContent = stations[i].freq.split(' ')[0];
  document.querySelectorAll('.station').forEach((s, j) => {
    s.classList.toggle('on', j === i);
  });
  const wfEl = el('waveform');
  if (i === 2) {
    el('radio-status').textContent = '■ STATIC';
    wfEl.style.opacity = '0.15';
  } else if (i === 3) {
    el('radio-status').textContent = '? UNKNOWN SOURCE';
    wfEl.style.opacity = '0.5';
  } else {
    el('radio-status').textContent = '▶ NOW BROADCASTING';
    wfEl.style.opacity = '1';
  }
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
  el('scan-label').textContent = 'SCANNING...';
  el('scan-sweep').classList.add('on');
  el('scan-ping').classList.add('on');
  el('scan-readout').classList.remove('show');
  el('scan-readout').innerHTML = '';

  setTimeout(() => {
    el('scan-sweep').classList.remove('on');
    el('scan-ping').classList.remove('on');
    const rows = scanData[Math.floor(Math.random() * scanData.length)];
    const out = el('scan-readout');
    out.classList.add('show');
    rows.forEach((r, i) => {
      const d = document.createElement('div');
      d.className = 'scan-line-item';
      d.style.animationDelay = (i * 0.12) + 's';
      d.textContent = '▸ ' + r;
      out.appendChild(d);
    });
    el('scan-label').textContent = 'TAP TO SCAN AGAIN';
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
  { id: 'FILE-0777', text: 'THREE SUBJECTS SURVIVED THE TEST. ONLY ONE REMEMBERS. LOCATION: CLASSIFIED.' },
];
let lastVault = -1;

function retrieveVault() {
  let i;
  do { i = Math.floor(Math.random() * vaultData.length); } while (i === lastVault);
  lastVault = i;
  const box = el('vault-display');
  box.innerHTML = '<div class="vault-id">ACCESSING...</div><div class="vault-text" style="color:var(--dim);margin-top:8px;">DECRYPTING DATA...</div>';
  setTimeout(() => {
    box.classList.add('glitch');
    setTimeout(() => box.classList.remove('glitch'), 250);
    box.innerHTML = `
      <div class="vault-id">${vaultData[i].id} · CLEARANCE: LEVEL 3</div>
      <div class="vault-text" style="margin-top:10px;">${vaultData[i].text}</div>
      <div class="vault-clear" style="margin-top:10px;">EYES ONLY · DO NOT DISTRIBUTE</div>
    `;
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
  list.innerHTML = '';
  tasks.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = 'task-item' + (t.done ? ' done' : '');
    div.innerHTML = `
      <div class="t-check" onclick="toggleTask(${i})">${t.done ? '✓' : ''}</div>
      <div class="t-text" onclick="toggleTask(${i})">${t.text}</div>
      <div class="t-del" onclick="event.stopPropagation();deleteTask(${i})">✕</div>
    `;
    list.appendChild(div);
  });
  updateHomeTasks();
}

function toggleTask(i) { tasks[i].done = !tasks[i].done; renderTasks(); }
function deleteTask(i) { tasks.splice(i, 1); renderTasks(); }
function addTask() {
  const inp = el('task-input');
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
renderTasks();

// ── Calculator ───────────────────────────────────────
let cs = { val: '0', expr: '', op: null, prev: null, reset: false };

function calcDisplay() {
  const v = cs.val;
  el('calc-val').textContent = v.length > 10 ? parseFloat(v).toExponential(2) : v;
  el('calc-expr').textContent = cs.expr;
}

function cn(n) {
  if (cs.reset) { cs.val = ''; cs.reset = false; }
  if (n === '.' && cs.val.includes('.')) return;
  cs.val = (cs.val === '0' && n !== '.') ? n : (cs.val + n).slice(0, 12);
  calcDisplay();
}

function co(op) {
  const cur = parseFloat(cs.val) || 0;
  if (op === 'C') {
    cs = { val: '0', expr: '', op: null, prev: null, reset: false };
  } else if (op === '+/-') {
    cs.val = String(-cur);
  } else if (op === '%') {
    cs.val = String(cur / 100);
  } else if (op === '=') {
    if (cs.op && cs.prev !== null) {
      const r = compute(cs.prev, cur, cs.op);
      cs.expr = `${cs.prev} ${cs.op} ${cur} =`;
      cs.val = String(r); cs.op = null; cs.prev = null; cs.reset = true;
    }
  } else {
    if (cs.op && cs.prev !== null && !cs.reset) {
      cs.prev = compute(cs.prev, cur, cs.op);
      cs.val = String(cs.prev);
    } else {
      cs.prev = cur;
    }
    cs.op = op;
    cs.expr = `${cs.prev} ${op}`;
    cs.reset = true;
  }
  calcDisplay();
}

function compute(a, b, op) {
  if (op === '+') return round(a + b);
  if (op === '-') return round(a - b);
  if (op === '*') return round(a * b);
  if (op === '/') return b === 0 ? 'ERR' : round(a / b);
}
function round(n) { return Math.round(n * 1e10) / 1e10; }

// ── Compass ──────────────────────────────────────────
let bearing = 0;
function rotateBearing() {
  bearing = (bearing + Math.floor(Math.random() * 22 - 4) + 360) % 360;
  const n = el('needle');
  if (n) n.style.transform = `rotate(${bearing}deg)`;
}
setInterval(rotateBearing, 3500);
