export const POOL = [
  'Business analysis',
  'SQL',
  'Communication',
  'Excel',
  'Cloud basics',
  'Linux',
  'Problem solving',
  'Python',
  'Data visualisation',
  'HTML/CSS',
  'JavaScript',
  'Business planning',
  'Financial literacy',
  'Teamwork',
  'Goal setting',
  'Networking',
];

export const TYPES = [
  'Graduate programme',
  'Learnership',
  'Internship',
  'Freelance',
  'Bursary',
  'Hackathon',
  'Mentorship',
];

export const ELIG = [
  'Relevant qualification or equivalent evidence',
  'CV and certified ID ready',
  'Application submitted before the closing date',
];

export const OPP = [
  { id: 1, t: 'Graduate Business Analyst', o: 'Ikhaya Bank (demo)', ty: 'Graduate programme', lo: 'Johannesburg', m: 'Hybrid', d: 12, s: ['Business analysis', 'SQL', 'Communication', 'Excel'] },
  { id: 2, t: 'Cloud Support Learnership', o: 'Nimbus Tech (demo)', ty: 'Learnership', lo: 'Pretoria', m: 'On-site', d: 20, s: ['Cloud basics', 'Linux', 'Communication', 'Problem solving'] },
  { id: 3, t: 'Data Analytics Intern', o: 'Kopano Analytics (demo)', ty: 'Internship', lo: 'Remote', m: 'Remote', d: 8, s: ['Python', 'SQL', 'Excel', 'Data visualisation'] },
  { id: 4, t: 'Website for a bakery', o: 'Sweet Mzansi (demo)', ty: 'Freelance', lo: 'Cape Town', m: 'Remote', d: 15, s: ['HTML/CSS', 'JavaScript', 'Communication'] },
  { id: 5, t: 'Youth Entrepreneurship Bursary', o: 'Ubuntu Fund (demo)', ty: 'Bursary', lo: 'South Africa', m: 'Remote', d: 25, s: ['Business planning', 'Financial literacy', 'Communication'] },
  { id: 6, t: 'Campus Hackathon 2026', o: 'Code Collective (demo)', ty: 'Hackathon', lo: 'Online', m: 'Remote', d: 5, s: ['Teamwork', 'Python', 'JavaScript', 'Problem solving'] },
  { id: 7, t: 'IT Support Intern', o: 'Sandton Systems (demo)', ty: 'Internship', lo: 'Sandton', m: 'On-site', d: 18, s: ['Problem solving', 'Communication', 'Networking'] },
  { id: 8, t: 'Tech Careers Mentorship', o: 'Bridge Mentors (demo)', ty: 'Mentorship', lo: 'Online', m: 'Remote', d: 30, s: ['Goal setting', 'Communication'] },
  { id: 9, t: 'Junior Cloud Engineer', o: 'Karoo Cloud (demo)', ty: 'Graduate programme', lo: 'Midrand', m: 'Hybrid', d: 10, s: ['Cloud basics', 'Linux', 'Python', 'Networking'] },
  { id: 10, t: 'Finance Admin Learnership', o: 'Masakhane Finance (demo)', ty: 'Learnership', lo: 'Durban', m: 'On-site', d: 22, s: ['Excel', 'Financial literacy', 'Communication'] },
];

export const QS = [
  { id: 1, n: 'SQL SELECT basics', sk: 'SQL', xp: 40 },
  { id: 2, n: 'Write your first Python script', sk: 'Python', xp: 50 },
  { id: 3, n: 'Budget with the 50/30/20 rule', sk: 'Financial literacy', xp: 30 },
  { id: 4, n: 'Ten Linux commands', sk: 'Linux', xp: 40 },
  { id: 5, n: 'Cloud computing in plain words', sk: 'Cloud basics', xp: 50 },
  { id: 6, n: 'Draw a one-page business plan', sk: 'Business planning', xp: 40 },
];

export const ST = ['Interested', 'Preparing', 'Applied (demo)', 'Interviewing', 'Offered', 'Rejected', 'Withdrawn'];
export const MODES = ['Career coach', 'Interview practice', 'CV helper', 'Money coach'];
export const RQ = {
  'Business analyst': 'Tell me about a time you solved a problem using data.',
  'Cloud support': 'Describe a time you fixed a technical problem under pressure.',
  'Web developer': 'Walk me through a project you built and what you learned.',
};
export const PK = ['Project', 'Achievement', 'Advice', 'Opportunity', 'Text'];

export const CATC = [
  'Students and Graduates',
  'Software Development',
  'Data Science and AI',
  'Career Opportunities',
  'Entrepreneurship',
  'Personal Finance',
  'Creative Professionals',
  'South African Freelancers',
];

export const MC = [
  'Web Development',
  'Graphic Design',
  'Tutoring',
  'CV and Career Services',
  'Data and Analytics',
  'Writing and Editing',
  'Digital Products',
  'Business Services',
  'Other Skills',
];

export const ENQ = ['Enquiry received', 'Discussion', 'Accepted', 'In progress', 'Completed', 'Cancelled'];

export const TPL = [
  { t: 'Find my first job', ms: ['Polish my CV', 'Apply to five roles', 'Complete an interview'], tk: ['Save three opportunities', 'Ask a mentor to review my CV'], opp: 1 },
  { t: 'Complete a qualification', ms: ['Register for the course', 'Finish half the modules', 'Submit the final assessment'], tk: ['Block five study hours each week'] },
  { t: 'Earn a certification', ms: ['Choose the exam', 'Finish the study material', 'Pass the exam'], tk: ['Book the exam date'], q: 5 },
  { t: 'Build a portfolio', ms: ['Pick three projects', 'Publish them online'], tk: ['Write a short description for each'], q: 2 },
  { t: 'Start a business', ms: ['Write a one-page plan', 'Win my first customer'], tk: ['Talk to five possible customers'], q: 6, amt: 2000 },
  { t: 'Save for equipment', ms: ['Choose the item', 'Reach my savings target'], tk: ['Set up a monthly saving routine'], amt: 5000 },
];

export const NT = {
  deadline: 'Opportunity deadlines',
  app: 'Application updates',
  quest: 'SkillQuest achievements',
  goal: 'Roadmap milestones',
  feed: 'Feed activity',
  conn: 'Connections',
  msg: 'Messages',
  circ: 'Communities',
  mkt: 'Marketplace',
};

export const NAV = [
  ['pulse', '◉', 'Pulse'],
  ['jobs', '⌕', 'Jobs'],
  ['quests', '★', 'Quests'],
  ['road', '⇢', 'Roadmap'],
  ['feed', '❖', 'Feed'],
  ['circ', '◎', 'Circles'],
  ['ppl', '☆', 'People'],
  ['msg', '✉', 'Messages'],
  ['mkt', '◈', 'Market'],
  ['alerts', '●', 'Alerts'],
  ['coach', '✦', 'Coach'],
  ['money', 'R', 'Money'],
  ['me', '☺', 'Me'],
];

export const GR = [
  ['Home', ['pulse']],
  ['Connect', ['msg', 'ppl']],
  ['Discover', ['feed', 'circ', 'mkt']],
  ['Career', ['jobs']],
  ['Growth', ['quests', 'coach', 'road']],
  ['Personal', ['money', 'alerts', 'me']],
];
