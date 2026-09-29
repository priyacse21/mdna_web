import "../../pages/Home/Home.css";

// src/pages/Home/ExplorerSection.jsx
import { useRef, useState } from "react";

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

const ExplorerSection = () => {
  const [activeKey, setActiveKey] = useState("lead");
  const tabRefs = useRef([]);
  const active = points.find((p) => p.key === activeKey);

  // Arrow keys move between tabs
  const handleKeyDown = (e, index) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!step) return;

    e.preventDefault();
    const next = (index + step + points.length) % points.length;
    setActiveKey(points[next].key);
    tabRefs.current[next].focus();
  };

  return (
    <section aria-labelledby="signature-title" className="home-signature">
      <div className="home-container">
        <div className="home-signature-head">
          <div>
            <div className="home-section-label">
              05 — One business. Different starting points.
            </div>
            <h2 className="home-section-title" id="signature-title">
              CHOOSE YOUR
              <br />
              STARTING POINT.
            </h2>
          </div>
          <p className="home-section-intro">
            The right entry point changes with the problem. Select one to see
            how that starting point connects into the wider mDNA system.
          </p>
        </div>

        <div aria-label="mDNA starting points" className="home-switcher" role="tablist">
          {points.map((point, index) => (
            <button
              key={point.key}
              ref={(el) => (tabRefs.current[index] = el)}
              type="button"
              role="tab"
              aria-selected={activeKey === point.key}
              tabIndex={activeKey === point.key ? 0 : -1}
              className={activeKey === point.key ? "active" : ""}
              onClick={() => setActiveKey(point.key)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {point.tab}
            </button>
          ))}
        </div>

        <div className="home-signature-map">
          <div className="home-sig-note">ILLUSTRATIVE SYSTEM — NOT LIVE DATA</div>
          <div className="home-sig-ring"></div>
          <div className="home-sig-ring r2"></div>

          {/* Line from the centre to the active dot */}
          <svg aria-hidden="true" className="home-sig-lines">
            <line
              key={active.key}
              x1="50%"
              y1="50%"
              x2={`${active.x}%`}
              y2={`${active.y}%`}
            />
          </svg>

          <div className="home-sig-center">
            mDNA
            <br />
            system
          </div>

          {points.map((point, index) => (
            <div
              key={point.key}
              className={`home-sig-dot d${index + 1} ${
                activeKey === point.key ? "active" : ""
              }`}
            ></div>
          ))}

          {points.map((point, index) => (
            <div
              key={point.key}
              className={`home-sig-label l${index + 1} ${
                activeKey === point.key ? "active" : ""
              }`}
            >
              {point.tab}
            </div>
          ))}

          <div aria-live="polite" className="home-sig-detail">
            <strong>{active.title}</strong>
            <p>{active.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorerSection;