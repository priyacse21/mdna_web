
import { Link } from "react-router-dom";
import { faqs } from "./data/insightsData";


const FAQContactSection = () => {
  return (
    <div className="insights-footer-top">
      <section aria-labelledby="faq-title" className="insights-faq">
        <div className="insights-faq-label mono">04 / FAQs</div>
        <h2 id="faq-title">
          A little more <span>context.</span>
        </h2>

        {faqs.map((item) => (
          <div className="insights-faq-item" key={item.q}>
            <div className="insights-faq-q">{item.q}</div>
            <div className="insights-faq-a">{item.a}</div>
          </div>
        ))}
      </section>

      <section aria-labelledby="cta-title" className="insights-footer-cta">
        <div>
          <div className="mono insights-cta-kicker">05 / KEEP IN TOUCH</div>
          <h2 id="cta-title">
            Have a question worth <span>exploring?</span>
          </h2>
        </div>
        <Link className="insights-btn insights-btn-light" to="/contact">
          Talk to Us <span className="arrow">↗</span>
        </Link>
      </section>
    </div>
  );
};

export default FAQContactSection;