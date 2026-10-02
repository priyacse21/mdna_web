

const IdeaSection = () => {
  return (
    <section className="bg-[#ebe8df] py-[40px] sm:py-[60px] lg:py-[100px] font-sans text-[#111318]">
      <div className="mx-auto w-full max-w-[1380px] px-12 max-[900px]:px-7 max-[560px]:px-6">
        <div className="ml-auto max-w-[1160px]">
          <div className="mb-[25px] text-[90px] leading-[0.4] font-extrabold text-[#b400e8]">“</div>
          <blockquote className="m-0 text-[clamp(35px,4.2vw,64px)] leading-[1.08] tracking-[-0.055em] font-bold max-[560px]:text-[36px]">
            Bring a perspective. Ask better questions. Make something useful.
          </blockquote>
          <div className="mt-7 font-mono text-[11px] tracking-[0.08em] uppercase text-[#696862]">04 / THE IDEA</div>
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;