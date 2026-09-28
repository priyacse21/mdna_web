
import "../../pages/OurWork/ourwork.css";

const audits = [
  {
    num: "01",
    title: "Marketing Setup Audit",
    desc: "Full review of marketing operations.",
  },
  {
    num: "02",
    title: "Channel Performance Audit",
    desc: "Deep-dive into marketing channels and ROI.",
  },
  {
    num: "03",
    title: "AI Readiness (GEO) Audit",
    desc: "Assessment for AI visibility readiness.",
  },
  {
    num: "04",
    title: "Website Audit",
    desc: "Evaluate conversion, SEO and UX issues.",
  },
];

const ClaritySection = () => {
  return (
    <section
      aria-labelledby="audit-title"
      className="ourwork-audit"
      id="clarity"
    >
      <div className="ourwork-container ourwork-audit-grid">
        <div>
          <div className="ourwork-section-label">04 — Start with clarity</div>
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