import SectionTitle from '../../components/common/SectionTitle';
import Button from '../../components/common/Button';
import ProcessSteps from '../../components/common/ProcessSteps/ProcessSteps';
import ServiceShowcase from './common/ServiceShowcase/ServiceShowcase';
import ToolsSection from './common/ToolSection/Toolsection';
import AuditSurfaceExplorer from './common/Slider/lineSlider';
import { auditDiagnosticData } from './data/toolsCatlog';
import { auditItems, auditOutcomes, auditSignals, steps } from './data/serviceData';

export default function Audits() {
  return (
    <main className="[&_h1]:tracking-normal [&_h1]:normal-case [&_h2]:tracking-normal [&_h2]:normal-case">
      <section className="grid min-h-[760px] grid-cols-[minmax(420px,0.92fr)_minmax(500px,1.08fr)] bg-[#101116] text-white max-[1023px]:grid-cols-1" aria-labelledby="audit-title">
        <div className="self-center py-[72px] pl-[max(48px,calc((100vw-1440px)/2))] pr-12 max-[1023px]:max-w-[760px] max-[1023px]:px-6 max-[1023px]:pt-[86px] max-[1023px]:pb-12 max-[767px]:px-5 max-[767px]:pt-[70px] max-[767px]:pb-[42px]">
          <SectionTitle className="mb-7 max-[767px]:mb-5">04 / audits & diagnostics</SectionTitle>
          <h1 className="m-0 mb-7 text-[88px] leading-[0.96] max-[1023px]:text-[72px] max-[767px]:text-5xl" id="audit-title">
            Find the <span className="text-[#bd00f2]">fault</span>
            <br />
            before it
            <br />
            becomes the
            <br />
            cost.
          </h1>
          <p className="mb-[26px] max-w-[470px] text-[18px] leading-[1.7] text-[#B8C1CC] max-[767px]:text-[14px]">
            Marketing audits that show what is working, what is not, and what to fix next across your setup, channels, AI visibility and website.
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <Button to="/contact?service=website-audit" variant="purple" icon="↓">
              Book a free audit
            </Button>
          </div>
        </div>

        <div className="relative grid min-h-[760px] place-items-center overflow-hidden border-l border-white/[0.14] bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:68px_68px] max-[1023px]:min-h-[520px] max-[1023px]:border-t max-[1023px]:border-l-0 max-[767px]:min-h-[390px]" role="img" aria-label="Illustrative diagnostic scan of a marketing system, detecting issues and prioritizing fixes">
          <div className="relative aspect-square w-[min(68%,560px)] max-[767px]:w-[82%]">
            <div className="absolute inset-0 border border-white/[0.2] bg-[#14151b]/45" />
            <div className="absolute inset-[7%] border border-white/[0.12]" />
            <div className="absolute inset-[18%] border border-[#bd00f2]/25" />

            <div className="absolute left-[13%] top-[13%] h-[6%] w-[6%] border-t-2 border-l-2 border-[#bd00f2]" />
            <div className="absolute right-[13%] top-[13%] h-[6%] w-[6%] border-t-2 border-r-2 border-[#bd00f2]" />
            <div className="absolute bottom-[13%] left-[13%] h-[6%] w-[6%] border-b-2 border-l-2 border-[#bd00f2]" />
            <div className="absolute right-[13%] bottom-[13%] h-[6%] w-[6%] border-r-2 border-b-2 border-[#bd00f2]" />

            <div className="absolute left-1/2 top-[27%] bottom-[27%] w-px -translate-x-1/2 bg-white/[0.18]" />
            <div className="absolute top-1/2 right-[27%] left-[27%] h-px -translate-y-1/2 bg-white/[0.18]" />
            <div className="absolute top-1/2 right-[8%] left-[8%] h-px -translate-y-1/2 bg-[#bd00f2]/70" />
            <div className="absolute left-1/2 top-1/2 aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.3] bg-[radial-gradient(circle,rgba(189,0,242,0.14),transparent_72%)]" />
            <span className="absolute left-1/2 top-1/2 h-[12px] w-[12px] -translate-x-1/2 -translate-y-1/2 bg-[#bd00f2] shadow-[0_0_26px_8px_rgba(189,0,242,0.55)]" />

            <div className="absolute left-[7%] top-[31%] z-10 w-[36%] border border-white/[0.16] bg-[#101116]/95 px-3 py-2 font-mono uppercase">
              <span className="block text-[7px] tracking-[0.16em] text-[#858b96]">Scan target</span>
              <span className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold tracking-normal text-white max-[767px]:text-[8px]">
                <i className="h-1.5 w-1.5 shrink-0 bg-[#bd00f2]" />
                Marketing system
              </span>
            </div>

            <div className="absolute right-[7%] bottom-[27%] z-10 w-[36%] border border-white/[0.16] bg-[#101116]/95 px-3 py-2 font-mono uppercase">
              <span className="block text-[7px] tracking-[0.16em] text-[#858b96]">Detection</span>
              <span className="mt-1 block text-[10px] font-semibold tracking-normal text-white max-[767px]:text-[8px]">Issues / priorities</span>
            </div>

            <div className="absolute bottom-[7%] left-[24%] z-10 w-[44%] border border-white/[0.16] bg-[#101116]/95 px-3 py-2 font-mono uppercase">
              <span className="block text-[7px] tracking-[0.16em] text-[#858b96]">Output</span>
              <span className="mt-1 block text-[10px] font-semibold tracking-normal text-white max-[767px]:text-[8px]">Diagnose → Prioritize → Fix</span>
            </div>

            <span className="absolute right-[7%] top-[45%] z-10 font-mono text-[8px] uppercase tracking-[0.14em] text-white/45 max-[767px]:text-[6px]">Scan / live</span>
          </div>
          <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.18em] text-white/40 max-[767px]:text-[6px]">System view / illustrative diagnostic</div>
        </div>
      </section>

      <section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1300px)/2))] py-[100px] pb-[110px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="audit-opportunity-title">
        <SectionTitle className="mb-0">01 / the signal</SectionTitle>
        <div className="ml-auto max-w-[980px] max-[767px]:mt-[18px]">
          <h2 className="m-0 text-[78px] leading-[1.03] max-[767px]:text-[42px]" id="audit-opportunity-title">
            A busy marketing system can still hide the <span className="text-[#7a7d83]">wrong priorities.</span>
          </h2>
          <div className="mt-[46px] grid grid-cols-3 border-y border-[#10161d]/[0.18] max-[767px]:grid-cols-1">
            {auditSignals.map(([label, title, description]) => (
              <article className="relative flex min-h-[220px] flex-col justify-between border-r border-[#10161d]/[0.14] p-[22px] last:border-r-0 max-[767px]:min-h-[170px] max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:last:border-b-0" key={label}>
                <span className="font-mono text-[12px] text-violet">{label}</span>
                <div>
                  <h3 className="mb-[10px] text-[19px]">{title}</h3>
                  <p className="m-0 max-w-[290px] text-[15px] leading-[1.6] text-[#3B4452]">{description}</p>
                </div>
                <i className="absolute right-4 bottom-[15px] h-7 w-7 rotate-45 border border-[#10161d]/[0.18]" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceShowcase
        eyebrowIndex="02"
        eyebrowLabel="The diagnostic system"
        heading="Four ways to inspect the system."
        description="Choose the layer that needs attention. Each audit helps you find what is working, what is leaking value and which problem matters most next."
        panelLabel="Audit surface"
        codePrefix="mDNA / AUDIT"
        items={auditItems}
        defaultActiveId="marketing-setup"
      />

      <section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1300px)/2))] py-[100px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="audit-journey-title">
        <div className="grid grid-cols-1 items-end gap-5 lg:grid-cols-2 lg:gap-[7vw]">
          <div>
  <SectionTitle className="mb-6 max-[767px]:mb-5">03 / the journey</SectionTitle>
  <h2 className="m-0 ml-auto w-fit max-w-[980px] text-[78px] leading-[1.03] max-[767px]:ml-0 max-[767px]:text-[42px]" id="audit-journey-title">
    Detect.
    <br />
    Diagnose.
    <br />
    Prioritize.
    <br />
    Fix.
  </h2>
</div>
          <p className="mb-2 max-w-[540px] text-[18px] leading-[1.75] text-[#3B4452]">
            The audit journey moves from finding the signal to understanding the cause, ordering the fixes and acting with clarity.
          </p>
        </div>
       <div className="mx-auto mt-14 w-full max-w-[1000px] lg:mt-16">
  <ProcessSteps
    theme="light"
    marker="fill"
    activeIndex={steps.length - 1}
    progressTrack
    steps={steps.map((step) => ({
      number: step.number,
      title: step.title,
      description: step.text,
      tag: step.helper,
    }))}
  />
</div>
      </section>

      <section id="audit-system" className="bg-[#101116] px-[max(48px,calc((100vw-1300px)/2))] py-[100px] text-white max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="audit-scan-title">
        <SectionTitle className="mb-6 max-[767px]:mb-5">04 / signature interaction</SectionTitle>
        <div className="mb-10 flex items-end justify-between gap-8 max-[1023px]:flex-col max-[1023px]:items-start">
          <h2 className="m-0 max-w-[720px] text-[78px] leading-[0.97] max-[767px]:text-[42px]" id="audit-scan-title">Scan the layer that matters.</h2>
          <p className="m-0 max-w-[450px] text-[18px] leading-[1.7] text-[#B8C1CC]">
            This illustrative diagnostic console lets you switch between the four audit surfaces. It is a visual model of how the service is organized — not a list of every report detail.
          </p>
        </div>

        <AuditSurfaceExplorer items={auditItems} />
      </section>

      <section className="bg-[#101116] px-[max(48px,calc((100vw-1150px)/2))] py-[90px] pb-[100px] text-white max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="audit-less-guesswork-title">
        <SectionTitle className="mb-7 max-[767px]:mb-5">05 / why it matters</SectionTitle>
        <h2 className="mb-[50px] ml-auto max-w-[790px] text-[66px] leading-[1.03] max-[767px]:mb-[34px] max-[767px]:text-[42px]" id="audit-less-guesswork-title">
          Less guesswork. <span className="text-[#85898f]">More direction.</span>
        </h2>
        <div className="grid grid-cols-3 border-y border-white/[0.18] max-[767px]:grid-cols-1">
          {auditOutcomes.map(([label, title, description]) => (
            <article className="relative flex min-h-[220px] flex-col justify-between border-r border-white/[0.14] p-[22px] last:border-r-0 max-[767px]:min-h-[170px] max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:last:border-b-0" key={label}>
              <span className="font-mono text-[12px] text-violet">{label}</span>
              <div>
                <h3 className="mb-[10px] text-[19px]">{title}</h3>
                <p className="m-0 max-w-[290px] text-[15px] leading-[1.6] text-[#B8C1CC]">{description}</p>
              </div>
              <i className="absolute right-4 bottom-[15px] h-7 w-7 rotate-45 border border-white/[0.18]" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#101116] px-[max(48px,calc((100vw-1300px)/2))] pb-[100px] pt-[32px] text-white max-[767px]:px-5 max-[767px]:pb-[68px]">
        <div className="mx-auto max-w-[700px] py-[100px] text-center max-[767px]:py-[72px]">
          <div className="mb-6 text-center">
            <SectionTitle className="justify-center">06 / next action</SectionTitle>
          </div>
          <h2 className="m-0 text-[108px] leading-[0.9] max-[1023px]:text-[82px] max-[767px]:text-[56px]">
            Stop guessing.<br />
            Start with a <span className="text-[#bd00f2]">diagnosis.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[18px] leading-[1.7] text-[#B8C1CC]">
            Book a free audit or get an AI readiness score and turn the unknowns into a prioritized view of what to address next.
          </p>
          <div className="mt-10 flex justify-center">
            <Button to="/contact" variant="purple">
              Talk to mDNA
            </Button>
          </div>
        </div>
      </section>

      <ToolsSection tools={auditDiagnosticData.tools} />
    </main>
  );
}
