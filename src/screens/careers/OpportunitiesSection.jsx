
import "../../pages/careers/Careers.css";

const OpportunitiesSection = () => {
  return (
    <section className="careers-opps" id="opportunities">
      <div className="careers-container">
        <div className="careers-opps-head">
          <div>
            <div className="mono careers-opps-kicker">
              <span className="accent">03</span> / OPPORTUNITIES
            </div>
            <h2>
              We're building
              <br />
              the team.
            </h2>
          </div>
          <p className="careers-opps-intro">
            There are no open roles to share right now. When the right
            opportunity takes shape, you'll find it here.
          </p>
        </div>

        <div className="careers-opportunity" tabIndex={0}>
          <div className="careers-num">00</div>
          <div>
            <div className="careers-open-title">Open opportunities</div>
            <div className="careers-open-copy">
              Nothing listed yet. Check back soon.
            </div>
          </div>
          <div className="mono careers-status">Coming soon</div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;