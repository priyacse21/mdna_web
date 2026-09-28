
import "./Insights.css";

const InsightsHero = () => {
  return (
    <section aria-labelledby="page-title" className="insights-hero">
      <div className="insights-hero-copy">
        <div>
          <div className="insights-hero-kicker mono">01 / Insights</div>
          <h1 id="page-title">
            Insights for sharper <span>marketing decisions.</span>
          </h1>
          <p>Draft articles are being prepared. More perspectives are coming soon.</p>
        </div>
      </div>

      <div aria-hidden="true" className="insights-hero-visual">
        <div className="insights-visual-tag mono">THE INDEX / 001</div>

        <div className="insights-index-field">
          <span className="insights-word w1 hot">IDEA</span>
          <span className="insights-word w2">RESEARCH</span>
          <span className="insights-word w3">BLOG</span>
          <span className="insights-word w4">PERSPECTIVE</span>
          <span className="insights-word w5">CASE STUDY</span>
          <span className="insights-word w6">WHITE PAPER</span>
          <span className="insights-word w7">INSIGHT</span>

          <i className="insights-route r1"></i>
          <i className="insights-route r2"></i>
          <i className="insights-route r3"></i>
          <i className="insights-node n1"></i>
          <i className="insights-node n2"></i>
          <i className="insights-node n3"></i>
          <i className="insights-node n4"></i>
        </div>

        <div className="insights-visual-note mono">
          A growing body of perspectives, research and ideas.
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;