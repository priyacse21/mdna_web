
import "../../pages/OurWork/ourwork.css";

const steps = [
  {
    num: "01",
    title: "IDENTIFY",
    desc: "Understand the business need in front of you.",
    word: "NEED",
    active: true,
  },
  {
    num: "02",
    title: "FOCUS",
    desc: "Determine what deserves attention now.",
    word: "PRIORITY",
  },
  {
    num: "03",
    title: "ACT",
    desc: "Deploy the marketing capability that fits.",
    word: "ACTION",
  },
  {
    num: "04",
    title: "MOVE",
    desc: "Measure, learn and determine the next move.",
    word: "DIRECTION",
  },
];

const SystemMoveSection = () => {
  return (
    <section aria-labelledby="journey-title" className="ourwork-journey">
      <div className="ourwork-container">
        <div className="ourwork-journey-head">
          <div>
            <div className="ourwork-section-label">03 — How the system moves</div>
            <h2 className="ourwork-section-title" id="journey-title">
              START WHERE YOU ARE.
              <br />
              MOVE FROM THERE.
            </h2>
          </div>
          <p className="ourwork-section-intro">
            There is no single starting point. The route is simple: identify
            the need, focus the work, act on the right capability, then
            determine the next move.
          </p>
        </div>

        <div className="ourwork-journey-track">
          <div className="ourwork-journey-line"></div>
          <div className="ourwork-journey-progress"></div>

          <div className="ourwork-journey-grid">
            {steps.map((step) => (
              <article
                key={step.num}
                className={`ourwork-journey-step ${step.active ? "active" : ""}`}
              >
                <div className="ourwork-journey-dot">
                  <span className="ourwork-journey-num">{step.num}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="ourwork-journey-word">{step.word}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemMoveSection;