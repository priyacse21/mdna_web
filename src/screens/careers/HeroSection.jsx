
import "../../pages/careers/Careers.css";

const HeroSection = () => {
  return (
    <section className="careers-hero">
      <div className="careers-container careers-hero-grid">
        <div>
          <div className="mono careers-eyebrow">
            <b>01</b> / CAREERS
          </div>
          <h1>
            Come make
            <br />
            things happen.
          </h1>
          <p className="careers-hero-copy">
            mDNA brings strategy, creativity and execution together. We're
            building a place for people who want to think deeply, make
            things well and contribute to work that moves businesses
            forward.
          </p>
          <a className="careers-hero-cta" href="#opportunities">
            See Opportunities ↓
          </a>
        </div>

        <div className="careers-constellation">
          <svg
            viewBox="0 0 620 410"
            role="img"
            aria-label="Abstract constellation representing individual contribution becoming collective momentum"
          >
            <ellipse className="orbit" cx="315" cy="205" rx="210" ry="125" />
            <ellipse className="orbit" cx="315" cy="205" rx="130" ry="78" />

            <line className="c-line" x1="90" y1="105" x2="260" y2="170" />
            <line className="c-line" x1="260" y1="170" x2="445" y2="120" />
            <line className="c-line" x1="260" y1="170" x2="350" y2="300" />
            <line className="c-line" x1="350" y1="300" x2="505" y2="255" />
            <line className="c-line" x1="90" y1="105" x2="350" y2="300" />
            <line className="c-line" x1="445" y1="120" x2="505" y2="255" />
            <line className="c-line" x1="350" y1="300" x2="175" y2="335" />

            <circle className="node" cx="90" cy="105" r="6" />
            <circle className="node active" cx="260" cy="170" r="9" />
            <circle className="node" cx="445" cy="120" r="6" />
            <circle className="node" cx="350" cy="300" r="8" />
            <circle className="node" cx="505" cy="255" r="6" />
            <circle className="node" cx="175" cy="335" r="5" />

            <circle className="signal" cx="260" cy="170" r="3" />
            <circle className="signal" cx="350" cy="300" r="3" />

            <text className="c-label" x="64" y="88">
              01 / INPUT
            </text>
            <text className="c-label accent" x="230" y="148">
              CONTRIBUTE
            </text>
            <text className="c-label" x="426" y="103">
              IDEA
            </text>
            <text className="c-label" x="322" y="326">
              CRAFT
            </text>
            <text className="c-label" x="475" y="280">
              MOMENTUM
            </text>
            <text className="c-label" x="135" y="360">
              02 / CONNECT
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;