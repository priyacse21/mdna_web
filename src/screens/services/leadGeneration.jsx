import { useState } from 'react'
import { Link } from 'react-router-dom'
import { accountNodes, leadMethods, leadOutcomes, leadPathway } from './data/serviceData'
import { leadGenerationData } from './data/toolsCatlog'
import ToolsSection from './common/ToolSection/Toolsection'

export default function LeadGeneration() {
	const [activeMethod, setActiveMethod] = useState(0)
	const selectedMethod = leadMethods[activeMethod]
	const accountPositions = [
		'top-[17%] left-[10%] max-[767px]:left-[4%]',
		'top-[13%] left-[43%] max-[767px]:top-[12%] max-[767px]:left-auto max-[767px]:right-[4%]',
		'top-[28%] right-[9%] max-[767px]:top-[37%] max-[767px]:right-[3%]',
		'bottom-[15%] left-[23%] max-[767px]:bottom-[12%] max-[767px]:left-[4%]',
		'bottom-[16%] right-[25%] max-[767px]:bottom-[12%] max-[767px]:right-[4%]',
	]

	return <main className="[&_h1]:tracking-normal [&_h1]:normal-case [&_h2]:tracking-normal [&_h2]:normal-case [&_.eyebrow_span]:text-[#bd00f2]">
		<section className="grid min-h-[700px] grid-cols-[minmax(400px,0.92fr)_minmax(460px,1.08fr)] bg-[#101116] text-white max-[1023px]:grid-cols-1" aria-labelledby="lead-title">
			<div className="max-w-[700px] self-center py-[72px] pr-12 pl-[max(48px,calc((100vw-1440px)/2))] max-[1023px]:max-w-[760px] max-[1023px]:px-6 max-[1023px]:pt-[86px] max-[1023px]:pb-12 max-[767px]:px-5 max-[767px]:pt-[70px] max-[767px]:pb-[42px]">
				<p className="mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:mb-5 max-[767px]:text-[8px]"><span>01</span> / Lead generation</p>
				<h1 className="m-0 mb-7 text-[88px] leading-[0.98] max-[1023px]:text-[72px] max-[767px]:text-5xl" id="lead-title">Find the<br />right buyers.<br /><span className="text-[#bd00f2]">Start the right conversations.</span></h1>
				<p className="mb-[26px] max-w-[430px] text-[14px] leading-[1.7] text-[#a6a7ad] max-[767px]:text-[13px]">Identify ideal buyers, reach them through targeted channels and create a more focused path to sales-ready conversations.</p>
				<div className="flex flex-wrap gap-[10px]">
					<Link className="inline-flex min-h-[45px] items-center gap-[14px] bg-[#f8f8f7] px-[17px] text-[11px] font-bold text-[#101116] no-underline transition-all duration-200 max-[767px]:text-[10px]" to="/contact">Talk to us <span aria-hidden="true">↗</span></Link>
					<a className="inline-flex min-h-[45px] items-center gap-[14px] border border-current px-[17px] text-[11px] font-bold text-white no-underline transition-all duration-200 max-[767px]:text-[10px]" href="#lead-system">Explore the system <span aria-hidden="true">↓</span></a>
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
			<p className="mb-0 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:text-[8px]"><span>02</span> / The opportunity</p>
			<div className="ml-auto max-w-[980px] max-[767px]:mt-[25px]">
				<h2 className="m-0 text-[78px] leading-[1.03] max-[767px]:text-[42px]" id="lead-opportunity-title">More outreach doesn't automatically mean <span className="text-[#85898f]">more opportunity.</span></h2>
				<div className="mt-[46px] grid grid-cols-2 gap-10 border-t border-[#10161d]/[0.18] pt-6 max-[767px]:mt-7 max-[767px]:grid-cols-1 max-[767px]:gap-[18px]">
					<p className="m-0 max-w-[440px] text-[14px] leading-[1.8] text-[#5b6570]">Lead generation starts with knowing who you want to reach, then choosing the channels and messages that make those buyers worth pursuing.</p>
					<p className="font-mono text-[9px] leading-[2] text-[#68737d]">TARGET / CHANNEL / MESSAGE / CONVERSATION<br />BUILD FOCUS BEFORE ADDING VOLUME.</p>
				</div>
			</div>
		</section>

		<section className="bg-[#0d151d] px-[max(48px,calc((100vw-1300px)/2))] pt-20 pb-[100px] text-[#f8f8f7] max-[767px]:px-5 max-[767px]:py-[68px]" id="lead-system" aria-labelledby="lead-system-title">
			<div className="mb-11 grid grid-cols-[1fr_320px] items-end gap-16 max-[1023px]:grid-cols-1 max-[1023px]:gap-5">
				<div>
					<p className="mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:mb-5 max-[767px]:text-[8px]"><span>03</span> / The lead generation system</p>
					<h2 className="m-0 max-w-[780px] text-[64px] leading-[1.05] max-[767px]:text-[40px]" id="lead-system-title">Three ways to move from target to conversation.</h2>
				</div>
				<p className="mb-[6px] text-[13px] leading-[1.7] text-[#9ca2aa] max-[1023px]:max-w-[520px]">Choose the mechanism that fits the problem. See what it does, what it changes and where the next conversation starts.</p>
			</div>
			<div className="grid min-h-[470px] grid-cols-[34%_1fr] border border-white/[0.14] max-[767px]:grid-cols-1" aria-label="Lead generation methods">
				<div className="border-r border-white/[0.14] max-[767px]:border-r-0 max-[767px]:border-b">
					{leadMethods.map((method, index) => <button className={`grid min-h-[55px] w-full grid-cols-[28px_1fr_20px] items-center gap-[14px] border-0 border-b border-white/[0.14] bg-transparent px-[18px] text-left text-[#c5c8ce] ${index === activeMethod ? 'bg-[#f8f8f7] text-[#101116]' : ''}`} type="button" key={method.number} onClick={() => setActiveMethod(index)} aria-pressed={index === activeMethod}>
						<span className={`font-mono text-[9px] ${index === activeMethod ? 'text-[#bd00f2]' : 'text-[#686d76]'}`}>{method.number}</span><strong className="text-[12px] font-medium">{method.name}</strong><b className={`font-normal ${index === activeMethod ? 'text-[#bd00f2]' : 'text-[#737782]'}`} aria-hidden="true">+</b>
					</button>)}
				</div>
				<div className="relative flex min-h-[470px] flex-col justify-between overflow-hidden bg-[#141720] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:58px_58px] px-7 py-[22px] max-[767px]:min-h-[390px] max-[767px]:p-[18px]" aria-live="polite">
					<span className="z-[1] font-mono text-[8px] text-[#777e89]">{selectedMethod.number} / 03</span>
					<span className="absolute top-[22px] right-6 z-[1] font-mono text-[8px] text-[#777e89] max-[767px]:hidden">LEAD GENERATION / SERVICE SYSTEM</span>
					<div className="relative z-[1] w-[min(100%,500px)] px-[10px] py-[26px]">
						<h3 className="mb-2 text-[38px] max-[767px]:text-[30px]">{selectedMethod.name}</h3>
						<p className="mb-[18px] text-[13px] text-[#a7adb6]">{selectedMethod.description}</p>
						<div className="mb-5 border-l border-[#bd00f2] pl-3"><span className="font-mono text-[8px] uppercase text-[#bd00f2]">Impact</span><p className="mt-[6px] text-[12px] leading-[1.6] text-[#d4d7dd]">{selectedMethod.impact}</p></div>
						<Link className="inline-flex min-h-[38px] items-center gap-[14px] border border-current px-[17px] text-[9px] font-bold text-white no-underline" to="/contact">Talk through your pipeline <span aria-hidden="true">↗</span></Link>
					</div>
					<span className="z-[1] font-mono text-[8px] text-[#777e89]">mDNA / LG / {selectedMethod.number}</span>
					<span className="absolute right-6 bottom-[22px] z-[1] font-mono text-[8px] text-[#777e89]">TARGET · MESSAGE · CONVERSATION</span>
					<div className="absolute right-[-100px] bottom-[-230px] h-[400px] w-[400px] rounded-full border border-[#bd00f2]/[0.45] shadow-[0_0_0_60px_rgba(189,0,242,0.035),0_0_0_120px_rgba(189,0,242,0.025)]" />
				</div>
			</div>
		</section>

		<section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1300px)/2))] py-[90px] pb-[100px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="lead-pathway-title">
			<div className="mb-[78px] ml-auto grid max-w-[940px] grid-cols-[1fr_2fr] gap-10 max-[767px]:mb-[42px] max-[767px]:grid-cols-1 max-[767px]:gap-5">
				<p className="mt-3 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:mt-0 max-[767px]:text-[8px]"><span>04</span> / The pathway</p>
				<div>
					<h2 className="m-0 text-[78px] leading-[1.03] max-[767px]:text-[42px]" id="lead-pathway-title">From market to a working pipeline.</h2>
					<p className="mt-[18px] mb-0 max-w-[440px] text-[13px] leading-[1.7] text-[#65717c]">The service components can work independently or as part of a connected lead generation system: identify the buyers, reach them with targeted outreach and work from researched decision-maker lists.</p>
				</div>
			</div>
			<div className="grid grid-cols-4 border-y border-[#10161d]/[0.18] max-[767px]:grid-cols-2">
				{leadPathway.map(([number, title, description, label], index) => <article className={`min-h-[290px] border-r border-[#10161d]/[0.14] px-6 py-7 last:border-r-0 max-[1023px]:px-4 max-[767px]:min-h-[260px] max-[767px]:border-b max-[767px]:px-[14px] max-[767px]:py-[22px] max-[767px]:nth-[2]:border-r-0 max-[767px]:nth-last-[-n+2]:border-b-0`} key={number}>
					<span className={`mx-auto mb-[38px] grid h-[76px] w-[76px] rotate-45 place-items-center border ${index === 0 ? 'border-[#bd00f2] bg-[#bd00f2] shadow-[0_0_0_8px_rgba(189,0,242,0.1)]' : 'border-[#7d8389]'} max-[767px]:mb-[30px] max-[767px]:h-[58px] max-[767px]:w-[58px]`}><b className="rotate-[-45deg] font-mono text-[9px] text-[#17191e]">{number}</b></span>
					<h3 className="mb-2 text-base uppercase">{title}</h3>
					<p className="mb-3 min-h-12 max-w-[220px] text-[12px] leading-[1.55] text-[#68727d] max-[767px]:min-h-[60px] max-[767px]:text-[11px]">{description}</p>
					<span className="font-mono text-[9px] leading-[2] text-[#68737d] max-[767px]:text-[7px]">{label}</span>
				</article>)}
			</div>
		</section>

		<section className="bg-[#f5f4f7] px-[max(48px,calc((100vw-1300px)/2))] py-[90px] pb-[100px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="lead-targeting-title">
			<div className="mb-[34px] grid grid-cols-[1fr_280px] items-center gap-16 max-[1023px]:grid-cols-1 max-[1023px]:gap-5">
				<div>
					<p className=" mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:mb-5 max-[767px]:text-[8px]"><span>05</span> / Signature interaction</p>
					<h2 className="m-0 text-[64px] leading-[1.03] max-[767px]:text-[42px]" id="lead-targeting-title">The account targeting board.</h2>
				</div>
				<p className="mb-[6px] text-[13px] leading-[1.7] text-[#65717c] max-[1023px]:max-w-[520px]">Lead generation is not a list of names. It is a system for deciding who deserves attention, then connecting the right signals.</p>
			</div>
			<div className="relative min-h-[490px] overflow-hidden border-y border-[#10161d]/[0.15] bg-[#f7f6f2] bg-[linear-gradient(rgba(16,22,29,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(16,22,29,0.035)_1px,transparent_1px)] bg-[length:88px_80px] max-[767px]:min-h-[400px]" role="img" aria-label="Five priority account signals connected around a focus account">
				<span className="absolute top-5 left-5 z-[2] font-mono text-[8px] text-[#68727d]">ACCOUNT MAP / LIVE VIEW<br />SELECT A NODE</span>
				<span className="absolute top-1/2 left-[5%] h-px w-[90%] bg-[#10161d]/[0.18]" />
				<span className="absolute top-[10%] bottom-[10%] left-1/2 w-px bg-[#10161d]/[0.18]" />
				<span className="absolute top-1/2 left-1/2 h-px w-[34%] origin-left rotate-[-145deg] bg-[#bd00f2]/[0.55] max-[767px]:w-[30%]" />
				<span className="absolute top-1/2 left-1/2 h-px w-[34%] origin-left rotate-[-18deg] bg-[#bd00f2]/[0.55] max-[767px]:w-[30%]" />
				<span className="absolute top-1/2 left-1/2 h-px w-[34%] origin-left rotate-[34deg] bg-[#bd00f2]/[0.55] max-[767px]:w-[30%]" />
				{accountNodes.map(([label, name], index) => <div className={`absolute z-[1] grid min-h-[82px] w-[145px] content-center gap-2 border border-[#10161d]/[0.28] bg-white/[0.78] px-[15px] py-3 max-[767px]:min-h-[70px] max-[767px]:w-[118px] max-[767px]:p-[10px] ${accountPositions[index]}`} key={label}><small className="font-mono text-[7px] text-[#76818b]">{label}</small><strong className="text-[11px] font-medium">{name}</strong><i className="absolute top-[10px] right-[10px] h-[5px] w-[5px] rounded-full bg-[#bd00f2]" /></div>)}
				<div className="absolute top-1/2 left-1/2 grid h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 rotate-45 place-items-center border border-[#bd00f2] bg-[#111318] shadow-[0_0_0_11px_rgba(189,0,242,0.08)] max-[767px]:h-[52px] max-[767px]:w-[52px]"><span className="rotate-[-45deg] font-mono text-[7px] text-white">FOCUS</span></div>
				<span className="absolute right-5 bottom-[14px] font-mono text-[8px] text-[#68727d]">STATUS: <b className="text-[#bd00f2]">FOCUS ACTIVE</b></span>
			</div>
		</section>

		<section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1150px)/2))] py-[90px] pb-[100px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="lead-outcomes-title">
			<p className="mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:mb-5 max-[767px]:text-[8px]"><span>06</span> / What changes</p>
			<h2 className="mb-[50px] ml-auto max-w-[790px] text-[66px] leading-[1.03] max-[767px]:mb-[34px] max-[767px]:text-[42px]" id="lead-outcomes-title">Turn prospecting into a more focused system.</h2>
			<div className="grid grid-cols-3 border-y border-[#10161d]/[0.18] max-[767px]:grid-cols-1">
				{leadOutcomes.map(([label, title, description], index) => <article className={`relative flex min-h-[220px] flex-col justify-between border-r border-[#10161d]/[0.14] p-[22px] last:border-r-0 max-[767px]:min-h-[170px] max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:last:border-b-0`} key={label}>
					<span className="font-mono text-[8px] text-[#75808b]">{label}</span>
					<div><h3 className="mb-[10px] text-[19px]">{title}</h3><p className="m-0 max-w-[290px] text-[12px] leading-[1.6] text-[#68727d]">{description}</p></div>
					<i className="absolute right-4 bottom-[15px] h-7 w-7 rotate-45 border border-[#10161d]/[0.18]" aria-hidden="true" />
				</article>)}
			</div>
		</section>

		<section className="relative flex min-h-[550px] flex-col items-center justify-center overflow-hidden bg-[#0d151d] px-6 py-[90px] text-center text-[#f8f8f7] max-[767px]:min-h-[460px] max-[767px]:px-5 max-[767px]:py-[70px]" aria-labelledby="lead-cta-title">
			<p className="relative z-[1] mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:mb-5 max-[767px]:text-[8px]"><span>07</span> / Start here</p>
			<h2 className="relative z-[1] m-0 mb-[18px] text-[68px] leading-[1.05] max-[767px]:text-[42px]" id="lead-cta-title">Know who you want to reach?<br /><span className="text-[#bd00f2]">Let's build the path.</span></h2>
			<p className="relative z-[1] mb-6 max-w-[490px] text-[13px] leading-[1.65] text-[#a6adb6]">Tell us what you are trying to solve. We’ll help identify the right starting point for your lead generation system.</p>
			<Link className="relative z-[1] inline-flex min-h-[45px] items-center gap-[14px] bg-[#f8f8f7] px-[17px] text-[11px] font-bold text-[#101116] no-underline transition-all duration-200 max-[767px]:text-[10px]" to="/contact">Talk to mDNA <span aria-hidden="true">↗</span></Link>
			<div className="absolute right-[15%] bottom-[-360px] h-[640px] w-[640px] rotate-45 border border-[#bd00f2]/[0.32]" />
		</section>

      <ToolsSection tools={leadGenerationData.tools} />
	</main>
}
