

const CompanySection = () => {
  return (
    <section className="ourstory-company">
      <div className="wrap ourstory-company-grid">
        <div>
          <div className="kicker">04 — The Company</div>
          <h2>That approach became mDNA.</h2>
          <p className="copy">
            Today, we are a small, dynamic team with a big appetite for
            getting things done. We bring together people who genuinely
            love what they do — and who are constantly deepening their
            craft.
          </p>
        </div>

        <div aria-hidden="true" className="ourstory-constellation">
          <svg viewBox="0 0 500 190" fill="none">
            <path
              d="M40 130L150 50L275 125L405 35M150 50L220 160L405 35M275 125L460 150"
              stroke="#a604d6"
              strokeOpacity=".5"
            />
            <circle cx="40" cy="130" r="7" fill="#a604d6" />
            <circle cx="150" cy="50" r="7" fill="#10171e" />
            <circle cx="275" cy="125" r="8" fill="#a604d6" />
            <circle cx="405" cy="35" r="7" fill="#10171e" />
            <circle cx="220" cy="160" r="6" fill="#a604d6" />
            <circle cx="460" cy="150" r="5" fill="#10171e" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;