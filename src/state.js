export const KEY = 'lifeos-demo-v2';

export const $ = (s) => document.querySelector(s);

export const esc = (s) => String(s).replace(/[&<>\"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const R = (n) => 'R' + Math.round(n).toLocaleString('en-ZA');

export const DB = (() => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || { users: {}, cur: null };
  } catch (e) {
    return { users: {}, cur: null };
  }
})();

export const sv = () => {
  try {
    localStorage.setItem(KEY, JSON.stringify({ users: DB.users, rem: DB.rem, cur: DB.rem ? DB.cur : null, posts: DB.posts, stories: DB.stories, circ: DB.circ, mk: DB.mk }));
  } catch (e) {
    // no-op
  }
};

export const nu = (o) => Object.assign({
  name: '',
  user: '',
  type: 'Student',
  loc: 'South Africa',
  skills: [],
  ev: {},
  interests: [],
  pref: [],
  xp: 0,
  done: [],
  streak: 0,
  last: '',
  saved: [],
  dim: [],
  trk: {},
  chk: {},
  tx: [],
  chat: [],
  vis: 'Everyone',
  ob: 0,
  ver: 0,
  mode: 0,
  hl: '',
}, o);

export const U = () => {
  const u = DB.users[DB.cur];
  if (u) {
    u.goals = u.goals || [];
    u.notif = u.notif || [];
    u.np = u.np || {};
    u.bm = u.bm || [];
    u.fol = u.fol || [];
    u.sn = u.sn || [];
    if (!u.conn) {
      u.conn = { 5: 'yes', 6: 'in' };
      u.dm = { 5: [{ f: 'them', t: 'Hi! I saw your profile. Want to team up for the hackathon? (sample message)', at: '09:12' }] };
      u.ur = { 5: 1 };
    }
    u.cj = u.cj || [];
    u.ms = u.ms || [];
    u.enq = u.enq || [];
    u.blk = u.blk || {};
    u.dm = u.dm || {};
    u.ur = u.ur || {};
  }
  return u;
};

export const has = (u, s) => u.skills.includes(s);
export const score = (u, o) => Math.round((100 * o.s.filter((s) => has(u, s)).length) / o.s.length);
export const bar = (p) => '<div class="bar"><b style="width:' + Math.min(100, p) + '%"></b></div>';
export const fld = (id, ph, t, v) => '<input id="' + id + '" type="' + (t || 'text') + '" placeholder="' + ph + '" aria-label="' + ph + '" value="' + esc(v || '') + '">';

export function toast(m) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = m;
  t.className = 's';
  clearTimeout(toast.h);
  toast.h = setTimeout(() => t.className = '', 2000);
}

export const logo = '<svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8B6CFF"/><stop offset="1" stop-color="#2DD4BF"/></linearGradient></defs><path d="M9 29L17 17L23 23L32 10" fill="none" stroke="url(#lg)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="29" r="4" fill="#8B6CFF"/><circle cx="17" cy="17" r="3.5" fill="#4C8DFF"/><circle cx="23" cy="23" r="3.5" fill="#4C8DFF"/><circle cx="32" cy="10" r="4" fill="#2DD4BF"/></svg>';

export const lv = (u) => Math.floor(u.xp / 100) + 1;

export async function hp(p, s) {
  try {
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s + ':' + p));
    return Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, '0')).join('');
  } catch (e) {
    return btoa(s + p);
  }
}

export const today = () => new Date().toISOString().slice(0, 10);

export function initDemoData() {
  if (!DB.users['demo@lifeos.demo']) {
    DB.users['demo@lifeos.demo'] = nu({
      name: 'Thandi Mokoena',
      user: 'thandi_m',
      type: 'Graduate',
      hl: 'Final-year IT student looking for a first analyst role',
      skills: ['Communication', 'Excel', 'Problem solving', 'Business analysis', 'HTML/CSS', 'Teamwork'],
      interests: ['Data', 'Cloud'],
      pref: ['Graduate programme', 'Learnership'],
      xp: 60,
      done: [3],
      streak: 3,
      ver: 1,
      ob: 3,
      tx: [
        { t: 'in', l: 'Learnership stipend', c: 'Other', a: 6500 },
        { t: 'in', l: 'Freelance logo job', c: 'Other', a: 1200 },
        { t: 'out', l: 'Room rent', c: 'Rent', a: 2200 },
        { t: 'out', l: 'Groceries', c: 'Food', a: 1100 },
        { t: 'out', l: 'Taxi fares', c: 'Transport', a: 650 },
        { t: 'out', l: 'Data bundle', c: 'Data', a: 299 },
        { t: 'out', l: 'Emergency fund', c: 'Savings', a: 500 },
      ],
    });
  }

  if (!Array.isArray(DB.posts)) {
    DB.posts = [
      { id: 1, by: 'Sipho K.', k: 'Project', txt: 'Shipped my first SQL dashboard for a spaza stock tracker. Feedback welcome!', lk: [], cm: [] },
      { id: 2, by: 'Aisha P.', k: 'Achievement', txt: 'Finished my Python basics path. 12 days in a row.', lk: [], cm: [] },
      { id: 3, by: 'Lwazi D.', k: 'Advice', txt: 'Tailor your CV headline to each role. Five minutes of work, far more replies.', lk: [], cm: [] },
      { id: 4, by: 'Naledi M.', k: 'Opportunity', txt: 'The campus hackathon needs teammates who know JavaScript.', lk: [], cm: [] },
    ];
  }

  if (!Array.isArray(DB.stories)) {
    DB.stories = [
      { id: 1, by: 'Sipho K.', t: 'Day 12 of learning SQL' },
      { id: 2, by: 'Aisha P.', t: 'Mock interview tomorrow. Wish me luck!' },
      { id: 3, by: 'Lwazi D.', t: 'Free CV review hour on Friday (demo)' },
    ];
  }
}

export const mockPPL = [
  [1, 'Sipho K.', 'Data', 'SQL, Python'],
  [2, 'Aisha P.', 'Data', 'Python, Excel'],
  [3, 'Lwazi D.', 'Design', 'HTML/CSS, Communication'],
  [4, 'Naledi M.', 'Software', 'JavaScript, Teamwork'],
  [5, 'Thabo R.', 'Cloud', 'Linux, Cloud basics'],
  [6, 'Zanele B.', 'Business', 'Business planning, Financial literacy'],
  [7, 'Kabelo S.', 'Software', 'Python, Networking'],
  [8, 'Ayanda M.', 'Finance', 'Excel, Financial literacy'],
].map((x) => ({ id: x[0], n: x[1], i: x[2], sk: x[3] }));

export const pn = (id) => (mockPPL.find((p) => p.id === id) || { n: 'Seller' }).n;
