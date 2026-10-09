export const audits = [
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


export const points = [
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

export const services = [
  {
    number: "01",
    title: "Lead Generation",
    label: "PIPELINE",
    description: "Identify, target and message ideal buyers.",
    href: "/services/lead-generation",
  },
  {
    number: "02",
    title: "Content, Search & AI Visibility",
    label: "VISIBILITY",
    description: "Build visibility across search, content and AI discovery.",
    href: "/services/content-search-ai",
  },
  {
    number: "03",
    title: "Digital PR",
    label: "CREDIBILITY",
    description: "Build credibility, reach and reputation across digital channels.",
    href: "/services/branding",
  },
  {
    number: "04",
    title: "Audits & Diagnostics",
    label: "CLARITY",
    description: "Find what is working, what is not and what should happen next.",
    href: "/services/audits",
  },
  {
    number: "05",
    title: "Consulting",
    label: "CAPABILITY",
    description: "Build stronger marketing functions and make better decisions.",
    href: "/services/consulting",
  },
];

export const nodes = [
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


export const steps = [
  ['Identify', 'Understand the business need in front of you.', 'Need'],
  ['Focus', 'Determine what deserves attention now.', 'Priority'],
  ['Act', 'Deploy the marketing capability that fits.', 'Action'],
  ['Move', 'Measure, learn and determine the next move.', 'Direction'],
]



export const needs = [
  {
    title: "I need more qualified conversations.",
    service: "LEAD GENERATION",
    href: "/services/lead-generation",
  },
  {
    title: "I need to be found on Google and AI.",
    service: "CONTENT, SEARCH & AI VISIBILITY",
    href: "/services/content-search-ai",
  },
  {
    title: "I need stronger digital credibility.",
    service: "DIGITAL PR",
    href: "/services/branding",
  },
  {
    title: "I need to know what's working.",
    service: "AUDITS & DIAGNOSTICS",
    href: "/services/audits",
  },
  {
    title: "I need a stronger marketing function.",
    service: "CONSULTING",
    href: "/services/consulting",
    description:
      "Build stronger marketing functions and make better decisions.",
    active: true,
  },
];


export const homeneeds = [
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

export const nodePositions = {
  n1: "left-0 top-[9%] max-[600px]:-left-2 max-[600px]:top-[4%]",
  n2: "right-0 top-[8%] max-[600px]:-right-2 max-[600px]:top-[3%]",
  n3: "left-[2%] bottom-[7%] max-[900px]:left-0 max-[600px]:-left-2 max-[600px]:bottom-[5%]",
  n4: "right-0 bottom-[7%] max-[600px]:-right-2 max-[600px]:bottom-[5%]",
  n5: "right-[-2%] top-[43%] max-[900px]:right-0 max-[600px]:hidden",
};