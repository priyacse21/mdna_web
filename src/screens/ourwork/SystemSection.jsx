
import { useState } from "react";
import { systemNodes } from "./data/ourworkData";


const SystemSection = () => {
  const [activeKey, setActiveKey] = useState("lead");
  const active = systemNodes.find((n) => n.key === activeKey);

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

          {systemNodes.map((node, index) => (
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