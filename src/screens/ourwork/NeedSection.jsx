
import { useState } from "react";
import { rows } from "./data/ourworkData";


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