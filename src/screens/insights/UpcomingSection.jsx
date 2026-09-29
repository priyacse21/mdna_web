
import { drafts } from "./data/insightsData";

const UpcomingSection = () => {
  return (
    <section aria-labelledby="upcoming-title" className="insights-upcoming">
      <div className="insights-container">
        <div className="insights-upcoming-head">
          <div className="insights-section-mark mono">
            <b>03</b> / UPCOMING
          </div>
          <div>
            <h2 id="upcoming-title">Perspectives in the works.</h2>
            <p className="insights-upcoming-copy">
              A first set of ideas is being developed. More insights will
              appear here soon.
            </p>
          </div>
        </div>

        <div className="insights-drafts">
          {drafts.map((draft) => (
            <article className="insights-draft" key={draft.title}>
              <div className="insights-draft-label mono">Draft Insight</div>
              <h3>{draft.title}</h3>
              <div className="insights-draft-foot">
                <span>Draft article concept</span>
                <span className="mono">In development</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;