export default function NeedList({
  title,
  needs = [],
  variant = "simple",
  showFooter = false,
  activeIndex = -1,
  onSelect,
  accentColor = "#bd00f2",
  ariaLabel,
  className = "",
}) {
  const interactive = variant === "interactive";
  const Row = interactive ? "button" : "div";

  return (
    <div
      className={`w-full min-w-0 ${interactive ? "border-t border-white/16" : ""} ${className}`.trim()}
      role={interactive && ariaLabel ? "group" : undefined}
      aria-label={interactive ? ariaLabel : undefined}
    >
      {title && <p className="mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-violet max-md:mb-5 max-md:text-[8px]">{title}</p>}

      {needs.map((need, index) => {
        const item = typeof need === "string" ? { title: need } : need;
        const number = String(index + 1).padStart(2, "0");
        const active = index === activeIndex || item.active;

        if (variant === "simple") {
          return (
            <Row
              key={item.title}
              className="grid grid-cols-[35px_minmax(0,1fr)_14px] sm:grid-cols-[50px_minmax(0,1fr)_20px] items-center min-h-[52px] sm:min-h-[56px] px-3 sm:px-[18px] border border-[#10161d]/18 mb-3 box-border bg-transparent"
            >
              <small className="block text-[#bd00f2] font-mono text-[10px]">
                {number}
              </small>

              <div className="min-w-0">
                <strong className="block text-left sm:text-center font-medium text-[14px] sm:text-base">
                  {item.title}
                </strong>
                {item.description && (
                  <p className="m-0 mt-1 text-[11px] text-[#707985] text-left sm:text-center">
                    {item.description}
                  </p>
                )}
              </div>

              <i
                aria-hidden="true"
                className="w-[7px] h-[7px] bg-[#bd00f2] justify-self-end block"
              />
            </Row>
          );
        }

        if (variant === "interactive") {
          return (
            <Row
              key={item.title}
              type={interactive ? "button" : undefined}
              onClick={interactive ? () => onSelect?.(index) : undefined}
              aria-pressed={interactive ? active : undefined}
              className={`grid grid-cols-[30px_minmax(0,1fr)_20px] md:grid-cols-[36px_minmax(180px,1.4fr)_minmax(130px,1fr)_minmax(110px,.9fr)_20px] lg:grid-cols-[46px_minmax(260px,2fr)_minmax(180px,1.3fr)_minmax(150px,1.1fr)_20px] gap-2 md:gap-3 lg:gap-5 items-center w-full min-h-0 lg:min-h-[104px] py-4 lg:py-[18px] px-2 lg:px-[10px] border-0 border-b transition-colors text-[#e6e7ea] font-sans text-left cursor-pointer box-border ${
                active
                  ? "border-b-[#bd00f2] bg-[#bd00f2]/8"
                  : "border-b-white/16 bg-transparent hover:bg-[#bd00f2]/5 focus-visible:outline-2 focus-visible:outline-[#bd00f2]"
              }`}
            >
              <small
                className={`font-mono text-[8px] transition-colors col-start-1 row-start-1 md:col-auto md:row-auto ${
                  active ? "text-[#bd00f2]" : "text-[#858c96]"
                }`}
              >
                {number}
              </small>

              <div className="min-w-0 col-start-2 row-start-1 md:col-auto md:row-auto">
                <strong className="block text-[14px] md:text-[15px] lg:text-[18px] font-medium leading-[1.35]">
                  {item.title}
                </strong>
                {item.description && (
                  <p className="m-0 mt-1 text-[#969da8] text-[10px] leading-[1.55]">
                    {item.description}
                  </p>
                )}
              </div>

              {item.impact && (
                <span className="min-w-0 text-[#969da8] text-[10px] leading-[1.55] col-start-2 row-start-2 md:col-auto md:row-auto">
                  {item.impact}
                </span>
              )}

              <b
                aria-hidden="true"
                className={`font-normal text-[14px] text-right col-start-3 row-start-1 md:col-auto md:row-auto transition-colors ${
                  active ? "text-[#bd00f2]" : "text-[#8d929c]"
                }`}
              >
                {active ? "×" : "+"}
              </b>
            </Row>
          );
        }

        // Detailed variant
        return (
          <Row
            key={item.title}
            className={`grid grid-cols-[28px_minmax(0,1fr)_22px] md:grid-cols-[32px_minmax(0,1fr)_minmax(100px,150px)_24px] lg:grid-cols-[40px_minmax(0,1fr)_minmax(120px,220px)_30px] items-center w-full min-h-[76px] py-3.5 sm:py-4 px-2 sm:px-3.5 border-t border-[#10161d]/18 last:border-b last:border-[#10161d]/18 box-border transition-colors ${
              active ? "bg-[#bd00f2]/[0.045]" : ""
            }`}
          >
            <small className="self-start pt-1 text-[#bd00f2] font-mono text-[10px]">
              {number}
            </small>

            <div className="min-w-0 pr-2">
              <strong className="block text-[15px] md:text-[17px] lg:text-[20px] leading-[1.25] font-medium text-[#10161d]">
                {item.title}
              </strong>
              {item.description && (
                <p className="m-0 mt-2 text-[#6b7580] text-[12px] leading-[1.4]">
                  {item.description}
                </p>
              )}
            </div>

            {item.service && (
              <span className="block text-[#6b7580] font-mono text-[10px] leading-[1.4] uppercase whitespace-normal md:whitespace-nowrap col-span-2 md:col-span-1 pl-7 md:pl-0 pt-1 md:pt-0">
                {item.service}
              </span>
            )}

            <b
              aria-hidden="true"
              className="block text-[18px] font-normal text-right text-[#10161d]"
            >
              →
            </b>
          </Row>
        );
      })}

      {showFooter && (
        <em className="block mt-3 text-[#6b7580] font-mono text-[9px] uppercase not-italic">
          The starting point matters.
        </em>
      )}
    </div>
  );
}