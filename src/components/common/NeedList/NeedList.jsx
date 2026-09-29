
// export default function NeedList({ title, needs = [] }) {
//   return (
//     <div className="need-list">
//       <p className="eyebrow">{title}</p>

//       {needs.map((need, index) => (
//         <div className="need-row" key={need}>
//           <small>{String(index + 1).padStart(2, "0")}</small>

//           <strong>{need}</strong>

//           <i aria-hidden="true" />
//         </div>
//       ))}
//     </div>
//   );
// }

import "./NeedList.css";

export default function NeedList({
  title,
  needs = [],
  variant = "simple",
  showFooter = false,
  activeIndex = -1,
  onSelect,
  accentColor,
  ariaLabel,
  className = "",
}) {
  const interactive = variant === "interactive";
  const Row = interactive ? "button" : "div";

  return (
    <div
      className={`need-list need-list--${variant} ${className}`.trim()}
      role={interactive && ariaLabel ? "group" : undefined}
      aria-label={interactive ? ariaLabel : undefined}
      style={accentColor ? { "--need-list-accent": accentColor } : undefined}
    >
      {title && <p className="eyebrow">{title}</p>}

      {needs.map((need, index) => {
        const item = typeof need === "string" ? { title: need } : need;
        const number = String(index + 1).padStart(2, "0");
        const active = index === activeIndex || item.active;

        return (
          <Row
            className={`need-row ${
              active ? "need-row--active" : ""
            }`}
            key={item.title}
            type={interactive ? "button" : undefined}
            onClick={interactive ? () => onSelect?.(index) : undefined}
            aria-pressed={interactive ? active : undefined}
          >
            <small className="need-number">{number}</small>

            <div className="need-content">
              <strong>{item.title}</strong>

              {item.description && (
                <p>{item.description}</p>
              )}
            </div>

            {interactive && (
              <span className="need-impact">{item.impact}</span>
            )}

            {variant === "detailed" && (
              <span className="need-service">
                {item.service}
              </span>
            )}

            {variant === "simple" && (
              <i aria-hidden="true" />
            )}

            {interactive && (
              <b className="need-action" aria-hidden="true">
                {active ? "×" : "+"}
              </b>
            )}

            {variant === "detailed" && (
              <b aria-hidden="true">→</b>
            )}
          </Row>
        );
      })}

      {showFooter && (
        <em>The starting point matters.</em>
      )}
    </div>
  );
}