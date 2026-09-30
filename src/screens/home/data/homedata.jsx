const audits = [
  {
    title: "Marketing Setup Audit",
    description: "Full review of marketing operations.",
  },
  {
    title: "Channel Performance Audit",
    description: "Deep-dive into marketing channels and ROI.",
  },
  {
    title: "AI Readiness (GEO) Audit",
    description: "Assessment for AI visibility readiness.",
  },
  {
    title: "Website Audit",
    description: "Evaluate conversion, SEO and UX issues.",
  },
]


const points = [
  {
    key: "lead",
    tab: "PIPELINE",
    title: "Pipeline",
    text: "Lead Generation — identify, target and message ideal buyers.",
    x: 20,
    y: 22,
  },
  {
    key: "visibility",
    tab: "VISIBILITY",
    title: "Visibility",
    text: "Content, Search & AI Visibility — build visibility across search, content and AI discovery.",
    x: 75,
    y: 22,
  },
  {
    key: "pr",
    tab: "CREDIBILITY",
    title: "Credibility",
    text: "Digital PR — build credibility, reach and reputation across digital channels.",
    x: 17,
    y: 70,
  },
  {
    key: "audit",
    tab: "CLARITY",
    title: "Clarity",
    text: "Audits & Diagnostics — find what is working, what is not and what should happen next.",
    x: 80,
    y: 70,
  },
  {
    key: "consulting",
    tab: "CAPABILITY",
    title: "Capability",
    text: "Consulting — build stronger marketing functions and make better decisions.",
    x: 50,
    y: 12,
  },
];



const nodes = [
  {
    num: "01",
    title: "LEAD GENERATION",
    tag: "PIPELINE / CONVERSATIONS",
    href: "/services/lead-generation",
    className: "n1",
  },
  {
    num: "02",
    title: "CONTENT, SEARCH & AI VISIBILITY",
    tag: "FOUND / SEEN / DISCOVERED",
    href: "/services/content-search-ai-visibility",
    className: "n2",
  },
  {
    num: "03",
    title: "DIGITAL PR",
    tag: "CREDIBILITY / REACH",
    href: "/services/digital-pr",
    className: "n3",
  },
  {
    num: "04",
    title: "AUDITS & DIAGNOSTICS",
    tag: "CLARITY / PRIORITIES",
    href: "/services/audits-diagnostics",
    className: "n4",
  },
  {
    num: "05",
    title: "CONSULTING",
    tag: "CAPABILITY / DIRECTION",
    href: "/services/consulting",
    className: "n5",
  },
];


const steps = [
  ['Identify', 'Understand the business need in front of you.', 'Need'],
  ['Focus', 'Determine what deserves attention now.', 'Priority'],
  ['Act', 'Deploy the marketing capability that fits.', 'Action'],
  ['Move', 'Measure, learn and determine the next move.', 'Direction'],
]



const needs = [
  {
    title: "I need more qualified conversations.",
    service: "LEAD GENERATION",
  },
  {
    title: "I need to be found on Google and AI.",
    service: "CONTENT, SEARCH & AI VISIBILITY",
  },
  {
    title: "I need stronger digital credibility.",
    service: "DIGITAL PR",
  },
  {
    title: "I need to know what's working.",
    service: "AUDITS & DIAGNOSTICS",
  },
  {
    title: "I need a stronger marketing function.",
    service: "CONSULTING",
    description:
      "Build stronger marketing functions and make better decisions.",
    active: true,
  },
];


const needs1 = [
  {
    title: "More qualified conversations",
  },
  {
    title: "More visibility in search & AI",
  },
  {
    title: "Stronger digital credibility",
  },
  {
    title: "A clearer view of what's working",
  },
  {
    title: "A stronger marketing function",
  },
];