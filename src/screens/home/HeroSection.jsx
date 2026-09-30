import React from "react";
import "../../pages/Home/Home.css";





const HeroSection = () => {
  return (
    <section aria-labelledby="hero-title" className="home-hero">
      <div className="home-hero-grid-bg"></div>
      <div className="home-hero-glow"></div>

      <div className="home-container home-hero-content">
        <div>
          <div className="home-eyebrow">
            mDNA.digital <span>Marketing that moves business forward</span>
          </div>
          <h1 id="hero-title">
            MARKETING
            <br />
            THAT MOVES
            <br />
            <em>BUSINESS.</em>
          </h1>
          <p className="home-hero-copy">
            From qualified conversations and visibility to credibility,
            diagnosis and strategy — mDNA brings the right marketing moves
            together.
          </p>
          <div className="home-hero-actions">
            <a className="home-btn home-btn-primary" href="#system">
              Explore the mDNA System <span>↓</span>
            </a>
            <a className="home-btn home-btn-outline" href="/contact">
              Talk to Us <span>↗</span>
            </a>
          </div>
          <div className="home-hero-note">
            <i></i> FIVE CAPABILITIES / ONE CONNECTED PORTFOLIO
          </div>
        </div>

        <div
          aria-label="Illustrative mDNA marketing system map"
          className="home-map-wrap"
        >
          <div className="home-map-canvas">
            <svg
              aria-hidden="true"
              className="home-map-lines"
              viewBox="0 0 620 520"
            >
              <line className="active-line" x1="310" x2="95" y1="260" y2="100" />
              <line x1="310" x2="525" y1="260" y2="100" />
              <line x1="310" x2="90" y1="260" y2="425" />
              <line x1="310" x2="530" y1="260" y2="425" />
              <line x1="310" x2="560" y1="260" y2="260" />
            </svg>

            <div className="home-map-meta">SYSTEM / 00 — STARTING POINTS</div>
            <div className="home-map-meta r">ILLUSTRATIVE / NOT LIVE DATA</div>
            <div className="home-map-core">
              <span>
                m<b>D</b>NA
              </span>
            </div>
            <div className="home-pulse"></div>

            {nodes.map((node) => (
              <a
                key={node.num}
                className={`home-map-node ${node.className}`}
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