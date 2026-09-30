export default function ValueSection() {
  return (
    <section className="bg-[#f2f0ea] text-[#10161d] block min-h-[620px] py-[90px] px-4 md:px-6 lg:py-[14vw] lg:px-[max(12vw,40px)]">
      <p className="mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-violet max-md:mb-5 max-md:text-[8px]">06 - The value of the system</p>
      <h2 className="text-[clamp(3.2rem,12vw,6rem)] lg:text-[clamp(3.3rem,6vw,6.8rem)] leading-[0.92] tracking-[-0.075em] uppercase font-bold text-balance max-w-[850px] mb-6">
        The starting point
        <br />
        can change.
        <br />
        The direction
        <br />
        stays clear.
      </h2>
      <p className="max-w-[550px] text-[#52667c] text-[13px] leading-[1.7] m-0 mb-10">
        You do not need to start everywhere. Start with the need that matters now, then use the wider capability set as the business evolves.
      </p>

      <div className="flex justify-center items-center gap-[15px] my-10 text-[#10161d] text-[10px] md:text-[12px] before:content-[''] before:w-[60px] before:border-t before:border-[#bd00f2] after:content-[''] after:w-[60px] after:border-t after:border-[#bd00f2]">
        <span>Need -&gt; Focus -&gt; Action -&gt; Next move.</span>
      </div>

      <div className="flex justify-center items-center gap-2 sm:gap-[22px] py-[45px] border-t border-b border-[#10161d]/18 text-[#64717d] font-mono text-[7px] sm:text-[9px] uppercase">
        <span>Starting point</span>
        <b className="text-[#bd00f2] text-[14px] font-bold">-&gt;</b>
        <span>Right capability</span>
        <b className="text-[#bd00f2] text-[14px] font-bold">-&gt;</b>
        <span>Next move</span>
      </div>
    </section>
  );
}
