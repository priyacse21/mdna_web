
export default function ProcessSteps({
  steps,
  direction = "horizontal",
  theme = "dark",
  marker = "fill",
  activeIndex = 0,
  progressTrack = false,
  centered = false,
}) {
  const isLight = theme === "light";
  const isHorizontal = direction === "horizontal";

  // Colors based on theme
  const textColor = isLight ? "text-[#10171e]" : "text-white";
  const mutedColor = isLight ? "text-[#6d6a71]" : "text-[#818c94]";
  const lineColor = isLight ? "bg-[#10171e]/18" : "bg-white/16";
  const boxBorderColor = isLight ? "border-[#10171e]/30" : "border-white/25";

  return (
    <ol
      className={`relative list-none m-0 p-0 font-sans ${textColor} ${
        isHorizontal
          ? "grid grid-cols-1 md:grid-flow-col md:auto-cols-fr gap-9 md:gap-0"
          : "grid gap-0"
      }`}
    >
      {progressTrack && isHorizontal && (
        <li
          aria-hidden="true"
          className={`pointer-events-none absolute top-6 right-[12.5%] left-[12.5%] hidden h-px md:block ${lineColor}`}
        >
          <span
            className="block h-full bg-[#bd00f2]"
            style={{
              width: `${steps.length > 1 ? Math.min(activeIndex / (steps.length - 1), 1) * 100 : 100}%`,
            }}
          />
        </li>
      )}
      {steps.map((step, index) => {
        const isActive = index <= activeIndex;
        const isLast = index === steps.length - 1;

        // Shape/styling for number box
        let activeBoxClasses = "";
        let numberTextClasses = isLight ? "text-[#10171e]" : "text-white";

        if (isActive) {
          if (marker === "fill" || marker === "diamond") {
            numberTextClasses = "text-white";
            activeBoxClasses = "bg-[#a604d6] border-[#a604d6]";
          } else if (marker === "outline") {
            numberTextClasses = "text-[#a604d6]";
            activeBoxClasses = "border-[#a604d6] ring-8 ring-[#a604d6]/8";
          }
        }

        const diamondClass = isActive && marker === "diamond" ? "rotate-45" : "";

        return (
          <li
            key={step.number}
            className={`relative ${
              isHorizontal
                ? centered
                  ? "flex flex-col items-center text-center gap-5 md:gap-0"
                  : "md:pr-6 grid grid-cols-[48px_1fr] md:block gap-5 md:gap-0"
                : "grid grid-cols-[62px_1fr] sm:grid-cols-[80px_1fr] gap-[18px] sm:gap-[27px] min-h-[180px] sm:min-h-[210px] pb-12 last:pb-0 last:min-h-[170px]"
            }`}
          >
            {/* Connecting line to next step */}
            {!isLast && !progressTrack && (
              <span
                aria-hidden="true"
                className={`absolute ${lineColor} ${
                  isHorizontal
                    ? centered
                      ? "top-[24px] left-1/2 right-[-50%] h-[1px] hidden md:block"
                      : "top-[24px] left-[48px] right-0 h-[1px] hidden md:block"
                    : "top-[62px] sm:top-[80px] bottom-0 left-[31px] sm:left-[40px] w-[1px]"
                }`}
              />
            )}

            {/* Vertical connector line on mobile when horizontal */}
            {!isLast && isHorizontal && (
              <span
                aria-hidden="true"
                className={`absolute ${progressTrack && index < activeIndex ? "bg-[#bd00f2]" : lineColor} md:hidden top-[48px] -bottom-[36px] ${centered ? "left-1/2 -translate-x-1/2" : "left-[24px]"} w-[1px]`}
              />
            )}

            {/* Number Box */}
            <div className="relative z-1 flex items-center justify-center">
              <span
                className={`relative z-1 grid place-items-center font-mono text-[10px] transition-colors duration-300 ${numberTextClasses} ${
                  isHorizontal
                    ? "w-12 h-12"
                    : "w-[62px] h-[62px] sm:w-20 sm:h-20"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 -z-1 border transition-all duration-350 ${
                    isActive ? activeBoxClasses : boxBorderColor
                  } ${diamondClass}`}
                />
                <span className="relative z-2">{step.number}</span>
              </span>
            </div>

            {/* Step Content */}
            <div className={`${isHorizontal ? "mt-0 md:mt-7" : ""} ${centered && isHorizontal ? "w-full" : ""}`}>
              {step.eyebrow && (
                <small
                  className={`block font-mono text-[10px] leading-tight tracking-[0.13em] uppercase mb-[11px] ${mutedColor}`}
                >
                  {step.eyebrow}
                </small>
              )}

              <h3
                className={`font-medium tracking-[-0.03em] ${
                  isHorizontal
                    ? `text-[24px] leading-[1.1] mb-[10px] ${centered ? "text-center" : ""}`
                    : "text-[22px] sm:text-[28px] mt-[3px] mb-[10px]"
                }`}
              >
                {step.title}
              </h3>

              <p
                className={`m-0 text-[14px] text-[#3B4452] leading-[1.65] ${mutedColor} ${
                  isHorizontal ? "max-w-[245px]" : "max-w-[600px] text-[14px] leading-[1.7]"
                }`}
              >
                {step.description}
              </p>

              {step.tag && (
                <small
                  className={`block font-mono text-[10px] leading-tight tracking-[0.13em] uppercase mt-5 ${mutedColor}`}
                >
                  {step.tag}
                </small>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}