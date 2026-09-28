
import { useState } from "react";
import "../../pages/OurWork/ourwork.css";

const nodes = [
  {
    key: "lead",
    num: "01",
    label: "Lead Generation",
    sub: "PIPELINE",
    detailName: "Lead Generation",
    detailCopy: "Identify, target and message ideal buyers.",
    href: "/services/lead-generation",
  },
  {
    key: "visibility",
    num: "02",
    label: "Content, Search & AI Visibility",
    sub: "VISIBILITY",
    detailName: "Content, Search & AI Visibility",
    detailCopy: "Build visibility across search, content and AI discovery.",
    href: "/services/content-search-ai-visibility",
  },
  {
    key: "pr",
    num: "03",
    label: "Digital PR",
    sub: "CREDIBILITY",
    detailName: "Digital PR",
    detailCopy: "Build credibility, reach and reputation across digital channels.",
    href: "/services/digital-pr",
  },
  {
    key: "audit",
    num: "04",
    label: "Audits & Diagnostics",
    sub: "CLARITY",
    detailName: "Audits & Diagnostics",
    detailCopy: "Find what is working, what is not and what should happen next.",
    href: "/services/audits-diagnostics",
  },
  {
    key: "consulting",
    num: "05",
    label: "Consulting",
    sub: "CAPABILITY",
    detailName: "Consulting",
    detailCopy: "Build stronger marketing functions and make better decisions.",
    href: "/services/consulting",
  },
];

const SystemSection = () => {
  const [activeKey, setActiveKey] = useState("lead");
  const active = nodes.find((n) => n.key === activeKey);

  return (
    <section aria-labelledby="system-title" className="ourwork-system-section">
      <div className="ourwork-container">
        <div className="ourwork-system-head">
          <div>
            <div className="ourwork-section-label">01 — The mDNA system</div>
            <h2 className="ourwork-section-title" id="system-title">
              FIVE ENTRY POINTS.
              <br />
              ONE MARKETING SYSTEM.
            </h2>
          </div>
          <p className="ourwork-section-intro">
            Five capabilities, connected around different business needs.
            Start with the one that matters now; move into the wider system
            when the need changes.
          </p>
        </div>

        <div className="ourwork-system-stage">
          <div className="ourwork-system-tag">
            SELECT A NODE / EXPLORE A CAPABILITY
          </div>
          <div className="ourwork-system-route"></div>

          {nodes.map((node, index) => (
            <div
              key={node.key}
              className={`ourwork-system-node s${index + 1} ${
                activeKey === node.key ? "active" : ""
              }`}
            >
              <button
                type="button"
                aria-label={`Select ${node.label}`}
                onClick={() => setActiveKey(node.key)}
              >
                <span>{node.num}</span>
              </button>
              <div className="node-label">{node.label}</div>
              <div className="node-sub">{node.sub}</div>
            </div>
          ))}

          <div aria-live="polite" className="ourwork-system-detail">
            <div className="detail-name">{active.detailName}</div>
            <div className="detail-copy">{active.detailCopy}</div>
            <a href={active.href}>Explore {active.detailName} →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;