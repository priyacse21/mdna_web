
import  React from "react";
import "./OurStory.css";

const OurStoryHero = () => {
  return (
    <section className="ourstory-hero">
      <div className="wrap ourstory-hero-grid">
        <div>
          <div className="eyebrow">01 — Our Story</div>
          <h1>Great businesses can still struggle to get on the map.</h1>
          <p>
            mDNA began with a simple observation — and a different way of
            responding to the challenges businesses face when going to
            market.
          </p>
        </div>

        <div aria-hidden="true" className="ourstory-map">
          <i className="pin p1"></i>
          <i className="pin p2"></i>
          <i className="pin p3"></i>
        </div>
      </div>
    </section>
  );
};

export default OurStoryHero;