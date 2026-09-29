
import { Link } from "react-router-dom";
import "./OurWork.css";

const nodes = [
  {
    num: "01",
    title: "LEAD GENERATION",
    tag: "PIPELINE / CONVERSATIONS",
    href: "/services/lead-generation",
    className: "n1",
  },
  {
    num: "02",
    title: "CONTENT, SEARCH & AI VISIBILITY",
    tag: "FOUND / SEEN / DISCOVERED",
    href: "/services/content-search-ai-visibility",
    className: "n2",
  },
  {
    num: "03",
    title: "DIGITAL PR",
    tag: "CREDIBILITY / REACH",
    href: "/services/digital-pr",
    className: "n3",
  },
  {
    num: "04",
    title: "AUDITS & DIAGNOSTICS",
    tag: "CLARITY / PRIORITIES",
    href: "/services/audits-diagnostics",
    className: "n4",
  },
  {
    num: "05",
    title: "CONSULTING",
    tag: "CAPABILITY / DIRECTION",
    href: "/services/consulting",
    className: "n5",
  },
];

const HeroSection = () => {
  return (
    <section aria-labelledby="hero-title" className="ourwork-hero">
      <div className="ourwork-hero-grid-bg"></div>
      <div className="ourwork-hero-glow"></div>

      <div className="ourwork-container ourwork-hero-content">
        <div>
          <div className="ourwork-eyebrow">
            mDNA.digital <span>Marketing that moves business forward</span>
          </div>
          <h1 id="hero-title">
            MARKETING
            <br />
            THAT MOVES
            <br />
            <em>BUSINESS.</em>
          </h1>
          <p className="ourwork-hero-copy">
            From qualified conversations and visibility to credibility,
            diagnosis and strategy — mDNA brings the right marketing moves
            together.
          </p>
          <div className="ourwork-hero-actions">
            <a className="ourwork-btn ourwork-btn-primary" href="#system">
              Explore the mDNA System <span>↓</span>
            </a>
            <Link className="ourwork-btn ourwork-btn-outline" to="/contact">
              Talk to Us <span>↗</span>
            </Link>
          </div>
          <div className="ourwork-hero-note">
            <i></i> FIVE CAPABILITIES / ONE CONNECTED PORTFOLIO
          </div>
        </div>

        <div
          aria-label="Illustrative mDNA marketing system map"
          className="ourwork-map-wrap"
        >
          <div className="ourwork-map-canvas">
            <svg
              aria-hidden="true"
              className="ourwork-map-lines"
              viewBox="0 0 620 520"
            >
              <line className="active-line" x1="310" x2="95" y1="260" y2="100" />
              <line x1="310" x2="525" y1="260" y2="100" />
              <line x1="310" x2="90" y1="260" y2="425" />
              <line x1="310" x2="530" y1="260" y2="425" />
              <line x1="310" x2="560" y1="260" y2="260" />
            </svg>

            <div className="ourwork-map-meta">SYSTEM / 00 — STARTING POINTS</div>
            <div className="ourwork-map-meta r">ILLUSTRATIVE / NOT LIVE DATA</div>
            <div className="ourwork-map-core">
              <span>
                m<b>D</b>NA
              </span>
            </div>
            <div className="ourwork-pulse"></div>

            {nodes.map((node) => (
              <a
                key={node.num}
                className={`ourwork-map-node ${node.className}`}
                href={node.href}
              >
                <span className="num">{node.num}</span>
                <strong>{node.title}</strong>
                <small>{node.tag}</small>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;