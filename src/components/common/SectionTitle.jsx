export default function SectionTitle({ eyebrow, children, className = '' }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 items-end gap-[7vw] ${className}`.trim()}>
      <div>
        <p className="mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-violet max-md:mb-5 max-md:text-[8px]">{eyebrow}</p>
        <h2 className="text-[clamp(3.3rem,6vw,6.8rem)] leading-[0.92] tracking-[-0.075em] uppercase font-bold text-balance mb-[34px]">
          {children}
        </h2>
      </div>
    </div>
  );
}
