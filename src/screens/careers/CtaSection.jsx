
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="careers-next">
      <div className="careers-container careers-next-grid">
        <div>
          <div className="mono">04 / WHAT'S NEXT</div>
          <h2>Looking for what comes next?</h2>
          <p>Explore the work. See the kind of thinking behind mDNA.</p>
        </div>

        <div className="careers-next-links">
          <a className="careers-next-link" href="/our-work">
            Explore Our Work →
          </a>
          <Link className="careers-next-link alt" to="/contact">
            Talk to Us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;