
import { audits } from "./data/ourworkData";
import SectionEyebrow from "../../components/common/SectionEyebrow";

const ClaritySection = () => {
  return (
    <section
      aria-labelledby="audit-title"
      className="ourwork-audit"
      id="clarity"
    >
      <div className="ourwork-container ourwork-audit-grid">
        <div>
          <SectionEyebrow className="ourwork-section-label">
            Start with clarity
          </SectionEyebrow>
          <h2 id="audit-title">
            DON'T KNOW
            <br />
            WHERE TO START?
            <br />
            START WITH <span>CLARITY.</span>
          </h2>
          <p className="ourwork-audit-copy">
            Understand what is working, what isn't and what deserves
            attention before you invest further.
          </p>
          <div className="ourwork-audit-actions">
            <a className="ourwork-btn ourwork-btn-primary" href="/contact">
              Book a Free Audit →
            </a>
            <a
              className="ourwork-btn ourwork-btn-outline"
              href="/services/audits-diagnostics"
            >
              Explore Audits &amp; Diagnostics →
            </a>
          </div>
        </div>

        <div className="ourwork-audit-list">
          {audits.map((item) => (
            <div className="ourwork-audit-item" key={item.num}>
              <div className="n">{item.num}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClaritySection;