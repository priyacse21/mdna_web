
import "./ProcessSteps.css";

/**
 * steps     : [{ number, title, description, eyebrow?, tag? }]
 * direction : "horizontal" | "vertical"
 * theme     : "light" | "dark"
 * marker    : look of the active number box -> "fill" | "outline" | "diamond"
 * activeIndex : which step is highlighted (default 0 = first)
 */
const ProcessSteps = ({
  steps,
  direction = "horizontal",
  theme = "dark",
  marker = "fill",
  activeIndex = 0,
}) => {
  return (
    <ol
      className={`process-steps process-steps--${direction} process-steps--${theme} process-steps--${marker}`}
    >
      {steps.map((step, index) => (
        <li
          className={`process-step ${index === activeIndex ? "active" : ""}`}
          key={step.number}
        >
          <span className="process-step-number">{step.number}</span>

          <div className="process-step-copy">
            {step.eyebrow && (
              <small className="process-step-eyebrow">{step.eyebrow}</small>
            )}
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {step.tag && <small className="process-step-tag">{step.tag}</small>}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ProcessSteps;