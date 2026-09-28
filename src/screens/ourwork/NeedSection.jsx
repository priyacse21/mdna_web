
import { useState } from "react";
import "../../pages/OurWork/ourwork.css";

const rows = [
  {
    key: "lead",
    num: "01",
    question: "I need more qualified conversations.",
    category: "Lead Generation",
    startLabel: "Start with Lead Generation.",
    desc: "Identify, target and message ideal buyers.",
    href: "/services/lead-generation",
    cta: "Explore Lead Generation →",
  },
  {
    key: "visibility",
    num: "02",
    question: "I need to be found on Google and AI.",
    category: "Content, Search & AI Visibility",
    startLabel: "Start with Content, Search & AI Visibility.",
    desc: "Build visibility across search, content and AI discovery.",
    href: "/services/content-search-ai-visibility",
    cta: "Explore Visibility →",
  },
  {
    key: "pr",
    num: "03",
    question: "I need stronger digital credibility.",
    category: "Digital PR",
    startLabel: "Start with Digital PR.",
    desc: "Build credibility, reach and reputation across digital channels.",
    href: "/services/digital-pr",
    cta: "Explore Digital PR →",
  },
  {
    key: "audit",
    num: "04",
    question: "I need to know what's working.",
    category: "Audits & Diagnostics",
    startLabel: "Start with Audits & Diagnostics.",
    desc: "Find what is working, what is not and what should happen next.",
    href: "/services/audits-diagnostics",
    cta: "Explore Audits →",
  },
  {
    key: "consulting",
    num: "05",
    question: "I need a stronger marketing function.",
    category: "Consulting",
    startLabel: "Start with Consulting.",
    desc: "Build stronger marketing functions and make better decisions.",
    href: "/services/consulting",
    cta: "Explore Consulting →",
  },
];

const NeedSection = () => {
  const [activeKey, setActiveKey] = useState("lead");

  return (
    <section aria-labelledby="start-title" className="ourwork-start" id="start">
      <div className="ourwork-container">
        <div className="ourwork-start-head">
          <div>
            <div className="ourwork-section-label">02 — Where should we start?</div>
            <h2 className="ourwork-section-title" id="start-title">
              WHAT DO YOU NEED
              <br />
              TO MOVE FORWARD?
            </h2>
          </div>
          <p className="ourwork-section-intro">
            Choose the situation that sounds most like yours. We'll point you
            toward the mDNA capability built around that need.
          </p>
        </div>

        <div className="ourwork-start-list" role="list">
          {rows.map((row) => (
            <div
              key={row.key}
              className={`ourwork-start-row ${activeKey === row.key ? "active" : ""}`}
              data-key={row.key}
              role="listitem"
              tabIndex={0}
              onClick={() => setActiveKey(row.key)}
              onFocus={() => setActiveKey(row.key)}
            >
              <div className="ourwork-start-num">{row.num}</div>
              <div className="ourwork-start-question">{row.question}</div>
              <div className="ourwork-start-category">{row.category}</div>
              <div className="ourwork-start-arrow">→</div>

              <div className="ourwork-start-reveal">
                <p>
                  <strong>{row.startLabel}</strong>
                  {row.desc}
                </p>
                <a className="ourwork-start-cta" href={row.href}>
                  {row.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="ourwork-start-hint">HOVER / FOCUS / CLICK TO EXPAND</div>
      </div>
    </section>
  );
};

export default NeedSection;