

const signals = [
  { num: "01", text: "More qualified conversations" },
  { num: "02", text: "More visibility in search & AI" },
  { num: "03", text: "Stronger digital credibility" },
  { num: "04", text: "A clearer view of what's working" },
  { num: "05", text: "A stronger marketing function" },
];

const MarketingSection = () => {
  return (
    <section aria-labelledby="problem-title" className="ourwork-problem">
      <div className="ourwork-container">
        <div className="ourwork-problem-grid">
          <div>
            <div className="ourwork-section-label">00 — The marketing problem</div>
            <h2 className="ourwork-problem-big" id="problem-title">
              MORE MARKETING
              <br />
              ISN'T ALWAYS
              <br />
              THE <span>ANSWER.</span>
            </h2>
            <p className="ourwork-section-intro">
              The next move depends on the problem in front of you. Sometimes
              you need more pipeline. Sometimes you need visibility,
              credibility, clarity or a stronger marketing function.
            </p>
          </div>

          <div className="ourwork-problem-side">
            <div className="ourwork-section-label">WHERE THE NEED SHOWS UP</div>

            <div className="ourwork-signal-stack">
              {signals.map((signal) => (
                <div className="ourwork-signal" key={signal.num}>
                  <span>{signal.num}</span>
                  <strong>{signal.text}</strong>
                  <i className="mark"></i>
                </div>
              ))}
            </div>

            <div className="ourwork-problem-note">THE STARTING POINT MATTERS.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;