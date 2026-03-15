// ── Clock ──────────────────────────────────────────────
function tick() {
  const now = new Date();
  const t = now.toTimeString().slice(0, 8);
  const days = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
  const months = ['ינו','פבר','מרץ','אפר','מאי','יוני','יולי','אוג','ספט','אוק','נוב','דצמ'];
  const dateStr = `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
  el('hdr-clock').textContent = t;
  el('stat-time').textContent = t;
  el('stat-date').textContent = dateStr;
  el('log-ts').textContent = `> עדכון אחרון: ${t}`;
}
setInterval(tick, 1000);
tick();

// ── Helpers ────────────────────────────────────────────
function el(id) { return document.getElementById(id); }
function getTab(label) {
  return [...document.querySelectorAll('.tab')].find(t => t.dataset.page === label);
}

// ── Battery sim ────────────────────────────────────────
let bat = 87;
setInterval(() => {
  bat = Math.max(10, Math.min(99, bat + (Math.random() > 0.5 ? 1 : -1)));
  el('stat-bat').textContent = bat + '%';
  el('home-bat').textContent = bat + '%';
}, 6000);

// ── Navigation ─────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el('page-' + id).classList.add('active');
  const tab = document.querySelector(`.tab[data-page="${id}"]`);
  if (tab) tab.classList.add('active');
  updateHomeTasks();
}

// ── Waveform ───────────────────────────────────────────
const wf = el('waveform');
for (let i = 0; i < 22; i++) {
  const b = document.createElement('div');
  b.className = 'wb';
  b.style.height = (Math.random() * 26 + 6) + 'px';
  b.style.animationDelay = (Math.random() * 0.7) + 's';
  b.style.animationDuration = (0.35 + Math.random() * 0.5) + 's';
  wf.appendChild(b);
}

// ── Radio ──────────────────────────────────────────────
const stations = [
  { name: 'רדיו המדבר', freq: '101.1', icon: '📻' },
  { name: 'רדיו הכספת', freq: '88.3', icon: '🔒' },
  { name: 'שקט מוחלט', freq: '66.6', icon: '💀' },
  { name: 'אות לא ידוע', freq: '???', icon: '❓' },
];
let curStation = 0;

function selectStation(i) {
  curStation = i;
  el('radio-freq').textContent = stations[i].freq + ' FM';
  el('radio-name').textContent = stations[i].name;
  el('home-radio-freq').textContent = stations[i].freq;
  el('home-radio-name').textContent = stations[i].name;
  document.querySelectorAll('.station').forEach((s, j) => {
    s.classList.toggle('on', j === i);
    const ind = el('sind-' + j);
    if (ind) ind.style.visibility = j === i ? 'visible' : 'hidden';
  });
  const wfEl = el('waveform');
  if (i === 2) { el('radio-state').textContent = '■ סטטי'; wfEl.style.opacity = '0.2'; }
  else if (i === 3) { el('radio-state').textContent = '? מקור לא ידוע'; wfEl.style.opacity = '0.5'; }
  else { el('radio-state').textContent = '▶ משדר כעת'; wfEl.style.opacity = '1'; }
}

// ── SCAN ───────────────────────────────────────────────
const scanResults = [
  ['ישות מזוהה: אדם', 'רמת איום: ידידותי', 'מרחק: 12.4מ\'', 'מצב: בתנועה צפון-מזרח'],
  ['ניתוח מבנה: בטון', 'גיל משוער: 47 שנים', 'שלמות: 62%', 'קרינה: עקבות'],
  ['קריאת אטמוספרה', 'O2: 20.9%', 'טמפ\': 22°C', 'לחות: 68%'],
  ['אנומליה זוהתה', 'סיווג: לא ידוע', 'עוצמת אות: חלשה', 'המלצה: הימנע'],
  ['סריקת פריט: תרופה', 'סוג: סטימפק', 'מצב: טוב', 'שחזור HP: +25'],
];
let scanning = false;

function doScan() {
  if (scanning) return;
  scanning = true;
  el('scan-hint').textContent = 'סורק...';
  el('scan-beam').classList.add('active');
  el('scan-output').classList.remove('show');
  el('scan-output').innerHTML = '';
  setTimeout(() => {
    el('scan-beam').classList.remove('active');
    const rows = scanResults[Math.floor(Math.random() * scanResults.length)];
    const out = el('scan-output');
    out.classList.add('show');
    rows.forEach((r, i) => {
      const d = document.createElement('div');
      d.className = 'scan-row';
      d.style.animationDelay = (i * 0.12) + 's';
      d.textContent = '◈ ' + r;
      out.appendChild(d);
    });
    el('scan-hint').textContent = 'הקש לסריקה חוזרת';
    scanning = false;
  }, 1500);
}

// ── VAULT ──────────────────────────────────────────────
const vaultRecords = [
  { id: 'קובץ-0047', text: 'הנבדק נצפה לאחרונה בסקטור 9. המניע לא ידוע. סטטוס תיק: פתוח.' },
  { id: 'קובץ-0112', text: 'ניסוי 112-ב\' הוביל לשיפור קוגניטיבי בלתי צפוי. כל הרשומות חסויות.' },
  { id: 'קובץ-0208', text: 'האות מגיע מתת-קרקע. עומק לא ידוע. הצוות נשלח. אין חזרה.' },
  { id: 'קובץ-0333', text: 'כספת 33 מעולם לא נפתחה. אוכלוסייה לא ידועה. פינג אחרון לפני 14 שנים.' },
  { id: 'קובץ-0501', text: 'מבצע ניקוי שטח הצליח. פרטים מצונזרים. אישור: רמה 5.' },
  { id: 'קובץ-0666', text: 'האנומליה אינה ניתנת להסבר מדעי. מומלץ להסגיר מיידית.' },
  { id: 'קובץ-0777', text: 'שלושה נבדקים שרדו את הניסוי. רק אחד זוכר. מיקום: חסוי.' },
];
let lastVault = -1;

function retrieveVault() {
  let i;
  do { i = Math.floor(Math.random() * vaultRecords.length); } while (i === lastVault);
  lastVault = i;
  const box = el('vault-box');
  box.innerHTML = '<div class="vault-top"><span>⏳ מאחזר נתונים...</span></div><div class="vault-body" style="color:var(--dim)">אנא המתן</div>';
  setTimeout(() => {
    box.classList.add('glitch');
    setTimeout(() => box.classList.remove('glitch'), 250);
    box.innerHTML = `
      <div class="vault-top">
        <span>🔓 רשומה אוחזרה — לעיניים בלבד</span>
        <span>${vaultRecords[i].id}</span>
      </div>
      <div class="vault-body">${vaultRecords[i].text}</div>
      <div class="vault-footer">אישור גישה: רמה 3 | סיווג: סודי ביותר</div>
    `;
  }, 900);
}

// ── TASKS ──────────────────────────────────────────────
let tasks = [
  { text: 'בדוק היקף', done: false },
  { text: 'חדש אספקה', done: false },
  { text: 'צור קשר עם הבסיס', done: true },
];

function renderTasks() {
  const list = el('task-list');
  list.innerHTML = '';
  tasks.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = 'task-item' + (t.done ? ' done' : '');
    div.innerHTML = `
      <div class="t-del" onclick="event.stopPropagation();deleteTask(${i})">✕</div>
      <div class="t-text" onclick="toggleTask(${i})">${t.text}</div>
      <div class="t-check" onclick="toggleTask(${i})">${t.done ? '✓' : ''}</div>
    `;
    list.appendChild(div);
  });
  updateHomeTasks();
}

function toggleTask(i) { tasks[i].done = !tasks[i].done; renderTasks(); }
function deleteTask(i) { tasks.splice(i, 1); renderTasks(); }
function addTask() {
  const inp = el('task-inp');
  const v = inp.value.trim();
  if (!v) return;
  tasks.unshift({ text: v, done: false });
  inp.value = '';
  renderTasks();
}
function updateHomeTasks() {
  const done = tasks.filter(t => t.done).length;
  const hEl = el('home-tasks');
  if (hEl) hEl.textContent = done + '/' + tasks.length;
}
renderTasks();

// ── CALCULATOR ────────────────────────────────────────
let cs = { val: '0', expr: '', op: null, prev: null, reset: false };

function calcDisplay() {
  const v = cs.val;
  el('calc-num').textContent = v.length > 10 ? parseFloat(v).toExponential(2) : v;
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
  if (op === 'C') { cs = { val: '0', expr: '', op: null, prev: null, reset: false }; }
  else if (op === '+/-') { cs.val = String(-cur); }
  else if (op === '%') { cs.val = String(cur / 100); }
  else if (op === '=') {
    if (cs.op && cs.prev !== null) {
      const r = compute(cs.prev, cur, cs.op);
      cs.expr = `${cs.prev} ${cs.op} ${cur} =`;
      cs.val = String(r); cs.op = null; cs.prev = null; cs.reset = true;
    }
  } else {
    if (cs.op && cs.prev !== null && !cs.reset) {
      cs.prev = compute(cs.prev, cur, cs.op);
      cs.val = String(cs.prev);
    } else { cs.prev = cur; }
    cs.op = op; cs.expr = `${cs.prev} ${op}`; cs.reset = true;
  }
  calcDisplay();
}

function compute(a, b, op) {
  const r = op === '+' ? a+b : op === '-' ? a-b : op === '*' ? a*b : b === 0 ? 'שגיאה' : a/b;
  return typeof r === 'number' ? Math.round(r * 1e10) / 1e10 : r;
}

// ── COMPASS ───────────────────────────────────────────
let bearing = 0;
function rotateBearing() {
  bearing = (bearing + Math.floor(Math.random() * 25 - 4) + 360) % 360;
  const needle = el('needle');
  if (needle) needle.style.transform = `rotate(${bearing}deg)`;
}
setInterval(rotateBearing, 3500);
