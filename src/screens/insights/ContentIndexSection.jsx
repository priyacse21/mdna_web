
import { useState } from "react";

const items = [
  {
    num: "01",
    title: "Blogs",
    desc: "Perspectives, explainers and practical thinking.",
  },
  {
    num: "02",
    title: "Case Studies",
    desc: "Examples of approaches, work and outcomes.",
  },
  {
    num: "03",
    title: "White Papers",
    desc: "Long-form research and strategic perspectives.",
  },
];

const ContentIndexSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="insights-editorial">
      <div className="insights-container">
        <div className="insights-body-grid">
          <div className="insights-section-mark mono">
            <b>02</b> / CONTENT INDEX
          </div>

          <div>
            <div className="insights-index-list">
              {items.map((item, index) => (
                <button
                  key={item.num}
                  type="button"
                  aria-pressed={activeIndex === index}
                  className={`insights-index-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="num mono">{item.num}</span>
                  <span>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </span>
                  <span className="status mono">COMING SOON</span>
                </button>
              ))}
            </div>

            <div className="insights-index-display mono">
              <span>EDITORIAL LIBRARY</span>
              <span className="line"></span>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentIndexSection;