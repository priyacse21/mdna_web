import { toolsCatalog } from "../../data/toolsCatlog";

export default function ToolsSection({ tools = [] }) {
  return (
    <section
      className="border-t border-[#10161d]/[0.18] bg-[#f2f0ea] px-[max(48px,calc((100vw-1300px)/2))] py-[82px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]"
      aria-labelledby="tools-title"
    >
      <div className="mx-auto w-full">
        <div className="mb-[22px] block items-start md:mb-[26px] md:grid md:grid-cols-[80px_minmax(0,1fr)]">
          <p className="mt-[2px] mb-3 md:mb-0 text-[8px] leading-none tracking-[0.12em] uppercase text-[#6b7078] font-mono">
            TOOLS
          </p>
          <div className="max-w-[900px]">
            <h2
              id="tools-title"
              className="m-0 text-[28px] md:text-[clamp(24px,3vw,34px)] leading-[1.15] font-semibold tracking-normal text-[#10151c]"
            >
              Tools our teams work with.
            </h2>
            <p className="max-w-[620px] m-0 mt-2 text-[13px] leading-[1.5] text-[#666c74]">
              We leverage industry-leading tools to help us find the right audience,
              create meaningful content and drive measurable results.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 min-[421px]:grid-cols-2 md:grid-cols-3 gap-3 w-full md:w-[min(calc(100%-80px),600px)] md:ml-[80px]"
          aria-label="Tools used by our teams"
        >
          {tools.map((toolId) => {
            const tool = toolsCatalog[toolId];
            if (!tool) return null;

            return (
              <div
                key={toolId}
                className="min-h-[64px] py-3 px-[18px] grid place-items-center min-w-0 bg-[#faf9f5] border border-[#deddd7] rounded-[6px] hover:border-[#aeb0ad] hover:bg-white transition-colors duration-200"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="block w-auto max-w-full h-[30px] object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}