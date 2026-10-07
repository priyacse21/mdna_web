import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../../components/common/SectionTitle'
import { accountNodes, leadMethods, leadOutcomes, leadPathway } from './data/serviceData'
import { leadGenerationData } from './data/toolsCatlog'
import ToolsSection from './common/ToolSection/Toolsection'
import ServiceShowcase from './common/ServiceShowcase/ServiceShowcase'

import {SERVICES} from './data/serviceData'

const ACCOUNT_NODES = [
  { id: 1, title: "Priority target", x: 10, y: 16, tilt: -4 },
  { id: 2, title: "Ideal buyer group", x: 38, y: 12, tilt: 4 },
  { id: 3, title: "Decision-maker", x: 78, y: 28, tilt: -3 },
  { id: 4, title: "Target prospect", x: 23, y: 72, tilt: 3 },
  { id: 5, title: "Qualified signal", x: 62, y: 70, tilt: -4 },
];
 
// purple connector lines, in % of container: [x1, y1, x2, y2]
const ACCOUNT_LINES = [
  [25, 31, 45, 28.5],
  [50, 32, 68, 48],
  [40, 66, 56, 49],
];

 
const pad = (n) => String(n).padStart(2, "0");

export default function LeadGeneration() {
	const [activeId, setActiveId] = useState(SERVICES[0].id);
  const activeIndex = SERVICES.findIndex((s) => s.id === activeId);
  const active = SERVICES[activeIndex];
	const accountPositions = [
		'top-[17%] left-[10%] max-[767px]:left-[4%]',
		'top-[13%] left-[43%] max-[767px]:top-[12%] max-[767px]:left-auto max-[767px]:right-[4%]',
		'top-[28%] right-[9%] max-[767px]:top-[37%] max-[767px]:right-[3%]',
		'bottom-[15%] left-[23%] max-[767px]:bottom-[12%] max-[767px]:left-[4%]',
		'bottom-[16%] right-[25%] max-[767px]:bottom-[12%] max-[767px]:right-[4%]',
	]

 const [activeNode, setActiveNode] = useState(2);

	return <main className="[&_h1]:tracking-normal [&_h1]:normal-case [&_h2]:tracking-normal [&_h2]:normal-case [&_.eyebrow_span]:text-[#bd00f2]">
		<section className="grid min-h-[700px] grid-cols-[minmax(400px,0.92fr)_minmax(460px,1.08fr)] bg-[#101116] text-white max-[1023px]:grid-cols-1" aria-labelledby="lead-title">
			<div className="max-w-[700px] self-center py-[72px] pr-12 pl-[max(48px,calc((100vw-1440px)/2))] max-[1023px]:max-w-[760px] max-[1023px]:px-6 max-[1023px]:pt-[86px] max-[1023px]:pb-12 max-[767px]:px-5 max-[767px]:pt-[70px] max-[767px]:pb-[42px]">
				<SectionTitle className="mb-7 max-[767px]:mb-5">Lead generation</SectionTitle>
				<h1 className="m-0 mb-7 text-[88px] leading-[0.98] max-[1023px]:text-[72px] max-[767px]:text-5xl" id="lead-title">Find the<br />right buyers.<br /><span className="text-[#bd00f2]">Start the right conversations.</span></h1>
				<p className="mb-[26px] max-w-[430px] text-[18px] leading-[1.7] text-[#B8C1CC] max-[767px]:text-[18px]">Identify ideal buyers, reach them through targeted channels and create a more focused path to sales-ready conversations.</p>
				<div className="flex flex-wrap gap-[10px]">
					<Link className="inline-flex min-h-[45px] items-center gap-[14px] bg-[#f8f8f7] px-[17px] text-[11px] font-bold text-[#101116] no-underline transition-all duration-200 max-[767px]:text-[10px]" to="/contact">Talk to us <span aria-hidden="true">↗</span></Link>
				</div>
			</div>
			<div className="relative min-h-[700px] overflow-hidden border-l border-white/[0.14] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:76px_76px] before:absolute before:top-[4%] before:bottom-[5%] before:left-1/2 before:w-px before:bg-[#bd00f2]/75 before:content-[''] after:absolute after:top-1/2 after:right-[9%] after:left-[9%] after:h-px after:bg-[#bd00f2]/75 after:content-[''] max-[1023px]:min-h-[520px] max-[1023px]:border-t max-[1023px]:border-l-0 max-[767px]:min-h-[390px]" aria-label="A visual map of targeted conversations">
				<span className="absolute top-[15px] right-3 font-mono text-[9px] text-[#777982] [writing-mode:vertical-rl]">TARGET / MESSAGE / PIPELINE</span>
				<div className="absolute top-1/2 left-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 shadow-[0_0_0_100px_rgba(189,0,242,0.025)]" />
				<div className="absolute top-1/2 left-1/2 aspect-square w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#bd00f2]/[0.32]" />
				<div className="absolute top-1/2 left-1/2 aspect-square w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.12]" />
				<span className="absolute left-[27%] top-[23%] h-[11px] w-[11px] rotate-45 border border-[#84868e] after:absolute after:inset-[3px] after:bg-[#bd00f2] after:content-['']" />
				<span className="absolute right-[34%] top-[18%] h-[11px] w-[11px] rotate-45 border border-[#84868e] after:absolute after:inset-[3px] after:bg-[#bd00f2] after:content-['']" />
				<span className="absolute left-[41%] top-[48%] h-[15px] w-[15px] rotate-45 border border-[#bd00f2] after:absolute after:inset-[3px] after:bg-[#bd00f2] after:content-['']" />
				<span className="absolute right-[20%] bottom-[24%] h-[11px] w-[11px] rotate-45 border border-[#84868e] after:absolute after:inset-[3px] after:bg-[#bd00f2] after:content-['']" />
				<span className="absolute bottom-[18%] left-[34%] h-[11px] w-[11px] rotate-45 border border-[#84868e] after:absolute after:inset-[3px] after:bg-[#bd00f2] after:content-['']" />
				<span className="absolute right-[10%] bottom-[6%] font-mono text-[9px] text-[#70727a]">01 / TARGET IN FOCUS</span>
			</div>
		</section>

		<section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1300px)/2))] py-[100px] pb-[110px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="lead-opportunity-title">
			<SectionTitle className="mb-0"> The opportunity</SectionTitle>
			<div className="ml-[120px] max-w-[980px] max-[767px]:mt-[25px]">
				<h2 className="m-0 text-[78px] leading-[1.03] max-[767px]:text-[42px]" id="lead-opportunity-title">More outreach doesn't automatically mean <span className="text-[#85898f]">more opportunity.</span></h2>
				<div className="mt-[46px] grid grid-cols-2 gap-10 border-t border-[#10161d]/[0.18] pt-6 max-[767px]:mt-7 max-[767px]:grid-cols-1 max-[767px]:gap-[18px]">
					<p className="m-0 max-w-[440px] text-[18px] leading-[1.8] text-[#3B4452]">Lead generation starts with knowing who you want to reach, then choosing the channels and messages that make those buyers worth pursuing.</p>
					<p className="font-mono text-[15px] leading-[2] text-[#68737d]">TARGET / CHANNEL / MESSAGE / CONVERSATION<br />BUILD FOCUS BEFORE ADDING VOLUME.</p>
				</div>
			</div>
		</section>
     

		  <ServiceShowcase
      eyebrowIndex="03"
      eyebrowLabel="The lead generation system"
      heading="Three ways to move from target to conversation."
      description="Choose the mechanism that fits the problem. See what it does, what it changes and where the next conversation starts."
      panelLabel="Lead generation / Service system"
      codePrefix="mDNA / LG"
      items={SERVICES}
    />

		<section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1300px)/2))] py-[90px] pb-[100px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="lead-pathway-title">
			<div className="mb-[78px]  grid max-w-[940px] grid-cols-[1fr_2fr] gap-10 max-[767px]:mb-[42px] max-[767px]:grid-cols-1 max-[767px]:gap-5">
				<SectionTitle className="mt-3 max-[767px]:mt-0">The pathway</SectionTitle>
				<div>
					<h2 className="m-0 text-[78px] leading-[1.03] max-[767px]:text-[42px]" id="lead-pathway-title">From market to a working pipeline.</h2>
					<p className="mt-[18px] mb-0 max-w-[440px] text-[15px] leading-[1.7] text-[#3B4452]">The service components can work independently or as part of a connected lead generation system: identify the buyers, reach them with targeted outreach and work from researched decision-maker lists.</p>
				</div>
			</div>
			<div className="grid grid-cols-4 border-y border-[#10161d]/[0.18] max-[767px]:grid-cols-2">
				{leadPathway.map(([number, title, description, label], index) => <article className={`min-h-[290px] border-r border-[#10161d]/[0.14] px-6 py-7 last:border-r-0 max-[1023px]:px-4 max-[767px]:min-h-[260px] max-[767px]:border-b max-[767px]:px-[14px] max-[767px]:py-[22px] max-[767px]:nth-[2]:border-r-0 max-[767px]:nth-last-[-n+2]:border-b-0`} key={number}>
					<span className={`mx-auto mb-[38px] grid h-[76px] w-[76px] rotate-45 place-items-center border ${index === 0 ? 'border-[#bd00f2] bg-[#bd00f2] shadow-[0_0_0_8px_rgba(189,0,242,0.1)]' : 'border-[#7d8389]'} max-[767px]:mb-[30px] max-[767px]:h-[58px] max-[767px]:w-[58px]`}><b className="rotate-[-45deg] font-mono text-[9px] text-[#17191e]">{number}</b></span>
					<h3 className="mb-2 text-base uppercase">{title}</h3>
					<p className="mb-3 min-h-12 max-w-[220px] text-[15px] leading-[1.55] text-[#3B4452] max-[767px]:min-h-[60px] max-[767px]:text-[11px]">{description}</p>
					<span className="font-mono text-[12px] leading-[2] text-[#68737d] max-[767px]:text-[7px]">{label}</span>
				</article>)}
			</div>
		</section>

		
		<section className="px-6 py-6">
       <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#111218]/60">
        
        <SectionTitle className="mt-3 max-[767px]:mt-0">signature interaction</SectionTitle>
      </p>
 
      {/* Heading + description */}
      <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_350px] mb-20 lg:items-end">
        <h2 className="max-w-[800px] text-5xl font-semibold leading-[0.95] tracking-tighter text-[#111218] sm:text-7xl lg:text-[88px]">
          The account targeting board.
        </h2>
        <p className="text-lg leading-relaxed text-[#111218]/60 lg:pb-4">
          Lead generation is not a list of names. It is a system for deciding
          who deserves attention, then connecting the right signals.
        </p>
      </div>
      <div className="overflow-x-auto">
        <div className="relative h-[650px] min-w-[1000px] overflow-hidden border-y border-black/15 bg-[#faf9f6]">
          {/* Perspective grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[10%] bg-[linear-gradient(to_right,rgba(17,18,24,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,18,24,0.07)_1px,transparent_1px)] bg-[size:130px_130px] [transform:perspective(900px)_rotateX(10deg)]"
          />
 
          {/* Top-left label */}
          <p className="absolute left-6 top-6 font-mono text-[10px] uppercase leading-4 tracking-[0.12em] text-[#111218]/60">
            Account map / Live view
            <br />
            Select a node
          </p>
 
          {/* Crosshair */}
          <div
            aria-hidden
            className="absolute left-1/2 top-[7%] h-[86%] w-px bg-[#111218]/25"
          />
          <div
            aria-hidden
            className="absolute left-[5%] top-[54%] h-px w-[90%] bg-[#111218]/25"
          />
 
          {/* Purple connector lines */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {ACCOUNT_LINES.map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#b400e6"
                strokeOpacity="0.75"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
 
          {/* Center focus diamond */}
          <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2">
            <div className="grid h-[104px] w-[104px] rotate-45 place-items-center bg-[#b400e6]/15">
              <div className="grid h-[78px] w-[78px] place-items-center border border-[#b400e6]/60 bg-[#111218]">
                <span className="-rotate-45 text-[10px] text-white">Focus</span>
              </div>
            </div>
          </div>
 
          {/* Node cards */}
          {ACCOUNT_NODES.map((n) => {
            const isActive = n.id === activeNode;
            return (
              <button
                key={n.id}
                type="button"
                onMouseEnter={() => setActiveNode(n.id)}
                onFocus={() => setActiveNode(n.id)}
                onClick={() => setActiveNode(n.id)}
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  transform: isActive ? `rotate(${n.tilt}deg) scale(1.03)` : "none",
                }}
                className={`absolute flex h-[105px] w-[170px] flex-col items-center justify-center gap-2 border bg-white/90 transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b400e6] ${
                  isActive
                    ? "z-10 border-[#b400e6] shadow-[0_24px_40px_-12px_rgba(17,18,24,0.25)]"
                    : "border-[#111218]/30"
                }`}
              >
                <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-[#b400e6]" />
                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#111218]/60">
                  Account / {String(n.id).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-medium text-[#111218]">
                  {n.title}
                </span>
              </button>
            );
          })}
 
          {/* Status */}
          <p className="absolute bottom-5 right-6 font-mono text-[10px] uppercase tracking-[0.12em] text-[#111218]/60">
            Status: <span className="text-[#b400e6]">Focus active</span>
          </p>
        </div>
      </div>
    </section>

		<section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1150px)/2))] py-[90px] pb-[100px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="lead-outcomes-title">
			<SectionTitle className="mb-7 max-[767px]:mb-5"> What changes</SectionTitle>
			<h2 className="mb-[50px]  max-w-[790px] text-[66px] leading-[1.03] max-[767px]:mb-[34px] max-[767px]:text-[42px]" id="lead-outcomes-title">Turn prospecting into a more focused system.</h2>
			<div className="grid grid-cols-3 border-y border-[#10161d]/[0.18] max-[767px]:grid-cols-1">
				{leadOutcomes.map(([label, title, description], index) => <article className={`relative flex min-h-[220px] flex-col justify-between border-r border-[#10161d]/[0.14] p-[22px] last:border-r-0 max-[767px]:min-h-[170px] max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:last:border-b-0`} key={label}>
					<span className="font-mono text-[12px] text-violet">{label}</span>
					<div><h3 className="mb-[10px] text-[19px]">{title}</h3><p className="m-0 max-w-[290px] text-[15px] leading-[1.6] text-[#3B4452]">{description}</p></div>
					<i className="absolute right-4 bottom-[15px] h-7 w-7 rotate-45 border border-[#10161d]/[0.18]" aria-hidden="true" />
				</article>)}
			</div>
		</section>

		<section className="relative flex min-h-[550px] flex-col items-center justify-center overflow-hidden bg-[#0d151d] px-6 py-[90px] text-center text-[#f8f8f7] max-[767px]:min-h-[460px] max-[767px]:px-5 max-[767px]:py-[70px]" aria-labelledby="lead-cta-title">
			<SectionTitle className="relative z-[1] mb-7 max-[767px]:mb-5"> Start here</SectionTitle>
			<h2 className="relative z-[1] m-0 mb-[18px] text-[68px] leading-[1.05] max-[767px]:text-[42px]" id="lead-cta-title">Know who you want to reach?<br /><span className="text-[#bd00f2]">Let's build the path.</span></h2>
			<p className="relative z-[1] mb-6 max-w-[490px] text-[18px] leading-[1.65] text-[#B8C1CC]">Tell us what you are trying to solve. We’ll help identify the right starting point for your lead generation system.</p>
			<Link className="relative z-[1] inline-flex min-h-[45px] items-center gap-[14px] bg-[#f8f8f7] px-[17px] text-[11px] font-bold text-[#101116] no-underline transition-all duration-200 max-[767px]:text-[10px]" to="/contact">Talk to mDNA <span aria-hidden="true">↗</span></Link>
			<div className="absolute right-[15%] bottom-[-360px] h-[640px] w-[640px] rotate-45 border border-[#bd00f2]/[0.32]" />
		</section>

      <ToolsSection tools={leadGenerationData.tools} />
	</main>
}
