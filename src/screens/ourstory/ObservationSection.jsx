
import { useState } from "react";

const qualities = ["Resourceful", "Hands-on", "Fast-moving", "Effective"];

const ObservationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="ourstory-observation">
      <div className="wrap ourstory-observation-grid">
        <div className="kicker">02 — The Observation</div>

        <div>
          <h2>Getting on the map is harder than it looks.</h2>
          <p className="copy">
            Our founders saw this firsthand while working with clients
            navigating the challenges of going to market — figuring out how
            to tell their story, reach the right people and build a
            presence that matched the value they offered.
          </p>

          <div className="kicker" style={{ marginTop: "28px" }}>
            03 — The Approach
          </div>
          <p className="copy" style={{ marginTop: "8px" }}>
            What stood out was not just the challenge, but the approach our
            team took to solving it:
          </p>

          <div
            aria-label="Four qualities"
            className="ourstory-approach"
            role="tablist"
          >
            {qualities.map((word, index) => (
              <button
                key={word}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={`ourstory-word ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObservationSection;