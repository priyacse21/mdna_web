export default function SectionTitle({ children, className = "" }) {
  return (
    <p className={`m-0 inline-flex min-h-10 items-center gap-[10px] font-mono text-[22px] leading-[1.4] font-medium tracking-[0.24em] uppercase text-violet before:h-px before:w-5 before:shrink-0 before:bg-violet before:content-[''] max-md:min-h-8 max-md:gap-2 max-md:text-[8px] max-md:tracking-[0.18em] max-md:before:w-3 ${className}`.trim()}>
      {children}
    </p>
  );
}
