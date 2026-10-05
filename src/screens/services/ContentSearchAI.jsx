import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../../components/common/SectionTitle'
import NeedList from '../../components/common/NeedList/NeedList'
import { contentCapabilities, contentHeroNeeds, contentImpacts, contentProcess, contentProblemNeeds, visibilityModes } from './data/serviceData'
import { contentSearchAIData } from './data/toolsCatlog'
import ToolsSection from './common/ToolSection/Toolsection'
import ServiceShowcase from './common/ServiceShowcase/ServiceShowcase'

import { SERVICES_ContentSearchAI } from './data/serviceData'

export default function ContentSearchAI() {
	const [activeCapability, setActiveCapability] = useState(0)
	const [activeVisibility, setActiveVisibility] = useState(0)
	const capability = contentCapabilities[activeCapability]
	const visibility = visibilityModes[activeVisibility]

	return <div className="[&_h1]:tracking-normal [&_h1]:normal-case [&_h2]:tracking-normal [&_h2]:normal-case">
		<section className="grid min-h-[720px] grid-cols-[minmax(420px,0.9fr)_minmax(500px,1.1fr)] bg-[#101116] text-white max-[1023px]:grid-cols-1" aria-labelledby="content-ai-title">
			<div className="self-center py-[68px] pr-[42px] pl-[max(48px,calc((100vw-1400px)/2))] pb-[76px] max-[1023px]:px-6 max-[1023px]:pt-[76px] max-[1023px]:pb-12 max-[767px]:px-5 max-[767px]:pt-[68px] max-[767px]:pb-10">
				<SectionTitle className="mb-[38px] max-w-[390px] max-[767px]:mb-7"> Content, search &amp; AI visibility</SectionTitle>
				<p className="mb-6 font-mono text-[10px] tracking-[0.12em]">mDNA / VISIBILITY SYSTEMS</p>
				<h1 className="m-0 mb-7 text-[88px] leading-[1.04] max-[1023px]:text-[72px] max-[767px]:text-5xl" id="content-ai-title">Be found.<br />Be <span className="text-[#bd00f2]">seen.</span><br />Be remembered.</h1>
				<p className="mb-[30px] max-w-[500px] text-[18px] leading-[1.75] text-[#B8C1CC] max-[767px]:text-xs">Content, search and AI visibility services that help your brand appear where buyers look, from search results to AI recommendations and the channels that keep you top-of-mind.</p>
				<div className="flex flex-wrap gap-[10px]">
					<Link className="inline-flex min-h-[45px] items-center gap-[14px] bg-[#f8f8f7] px-[17px] text-[11px] font-bold text-[#101116] no-underline transition-all duration-200 max-[767px]:text-[10px]" to="/contact">Talk to us <span aria-hidden="true">↗</span></Link>
					<a className="inline-flex min-h-[45px] items-center gap-[14px] border border-current px-[17px] text-[11px] font-bold text-white no-underline transition-all duration-200 max-[767px]:text-[10px]" href="#visibility-system">Explore the service <span aria-hidden="true">↓</span></a>
				</div>
			</div>
			<div className="relative min-h-[720px] overflow-hidden border-l border-white/[0.14] bg-[#12141b] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:72px_72px] px-[7%] py-11 before:absolute before:top-[-90px] before:right-[24%] before:z-0 before:h-[600px] before:w-px before:rotate-45 before:bg-[#bd00f2]/25 before:content-[''] after:absolute after:right-[70%] after:bottom-[-250px] after:z-0 after:h-[600px] after:w-px after:-rotate-45 after:bg-[#bd00f2]/25 after:content-[''] max-[1023px]:min-h-[620px] max-[1023px]:border-t max-[1023px]:border-l-0 max-[767px]:min-h-[530px] max-[767px]:px-4 max-[767px]:py-7" aria-label="Content, search and AI visibility signals">
				<NeedList className="relative z-[1] ml-[6%] w-auto max-[767px]:ml-0 [&>p]:mb-[26px] [&>p]:flex [&>p]:min-h-[58px] [&>p]:items-center [&>p]:border [&>p]:border-white/20 [&>p]:bg-[#101116]/[0.85] [&>p]:px-4 [&>p]:font-mono [&>p]:text-[11px] [&>p]:text-[#c4c5ca] [&>div]:mb-0 [&>div]:grid-cols-[34px_1fr_10px] [&>div]:gap-x-4 [&>div]:gap-y-[5px] [&>div]:min-h-[73px] [&>div]:border-white/[0.14] [&>div]:bg-[#161820]/90 [&>div]:px-[18px] [&>div]:py-3 [&>div+div]:mt-[10px] [&>div>small]:font-mono [&>div>small]:text-[9px] [&>div>small]:text-[#bd00f2] [&>div>div>strong]:text-left [&>div>div>strong]:text-xs [&>div>div>strong]:text-[#f5f5f4] [&>div>div>p]:mt-[5px] [&>div>div>p]:text-[10px] [&>div>div>p]:leading-[1.4] [&>div>div>p]:text-[#8e929b] [&>div>i]:bg-[#bd00f2] max-[767px]:[&>p]:min-h-[50px] max-[767px]:[&>p]:text-[8px] max-[767px]:[&>div]:grid-cols-[25px_minmax(0,1fr)_14px] max-[767px]:[&>div]:gap-x-[10px] max-[767px]:[&>div]:px-[10px] max-[767px]:[&>div]:py-[10px] max-[767px]:[&>div>div>strong]:text-[10px] max-[767px]:[&>div>div>p]:text-[8px]" needs={contentHeroNeeds} title="What should we know about this category?" />
			</div>
		</section>

		<section className="grid grid-cols-[minmax(120px,0.55fr)_minmax(0,1.45fr)] items-start gap-[6vw] bg-[#f2f0ea] px-[max(48px,calc((100vw-1320px)/2))] py-[94px] pb-[100px] text-[#10161d] max-[767px]:grid-cols-1 max-[767px]:gap-0 max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="content-ai-problem-title">
			<SectionTitle className="mt-3 mb-7 max-[767px]:mt-0 max-[767px]:mb-6"><span>01</span> / The problem</SectionTitle>
			<div className="col-start-2 w-full max-w-[1080px] max-[767px]:col-start-1 max-[767px]:mt-6">
				<h2 className="m-0 text-[78px] leading-[1.03] max-[767px]:text-[42px]" id="content-ai-problem-title">Good marketing doesn't happen by <span className="text-[#85898f]">accident.</span></h2>
				<div className="mt-11 grid grid-cols-[1.2fr_0.8fr] gap-16 border-t border-[#10161d]/[0.17] pt-[26px] max-[767px]:mt-[30px] max-[767px]:grid-cols-1 max-[767px]:gap-[22px]">
					<p className="m-0 max-w-[600px] text-[18px] leading-[1.8] text-[#3B4452]">Visibility is no longer one channel. Buyers discover brands through search, AI answers, paid media, email and social content. The work has to connect across those surfaces.</p>
					<NeedList className="self-start border-t border-[#10161d]/[0.17] [&>div]:grid-cols-[30px_minmax(0,1fr)] [&>div]:min-h-0 [&>div]:m-0 [&>div]:border-0 [&>div]:border-b [&>div]:border-[#10161d]/[0.17] [&>div]:px-0 [&>div]:py-[10px] [&>div>small]:font-mono [&>div>small]:text-[8px] [&>div>small]:text-[#bd00f2] [&>div>div>strong]:text-left [&>div>div>strong]:text-[11px] [&>div>div>strong]:font-normal [&>div>div>strong]:text-[#30343a] [&>div>i]:hidden" needs={contentProblemNeeds} />
				</div>
			</div>
		</section>


 <ServiceShowcase
			eyebrowIndex="03"
			eyebrowLabel=" Visibility system"
			heading="One visibility system. Six ways to activate it.."
			description="Explore the approved mDNA service components. Select a capability to see what it is, the client impact defined in the portfolio, and its next-step action."
			panelLabel="VIS / CONTENT"
			codePrefix="SERVICE COMPONENT"
			items={SERVICES_ContentSearchAI}
		/>
	

		<section className="bg-[#f5f4f7] px-[max(48px,calc((100vw-1020px)/2))] pt-[88px] pb-[100px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="content-ai-process-title">
			<div className="mb-12"><SectionTitle className="mb-7 max-[767px]:mb-5"><span>04</span> / Process</SectionTitle><h2 className="mb-0 ml-auto max-w-[780px] text-[64px] leading-[1.04] max-[1023px]:text-[56px] max-[767px]:mt-6 max-[767px]:text-[42px]" id="content-ai-process-title">From useful ideas to sustained visibility.</h2></div>
			<div className="relative ml-auto max-w-[860px] before:absolute before:top-0 before:bottom-0 before:left-7 before:w-px before:bg-[#10161d]/[0.18] before:content-[''] max-[767px]:before:left-[23px]">
				{contentProcess.map(([number, title, description], index) => <article className="relative grid min-h-[145px] grid-cols-[58px_1fr] items-start gap-[26px] max-[767px]:min-h-[135px] max-[767px]:grid-cols-[48px_1fr] max-[767px]:gap-[18px]" key={number}>
					<span className={`relative z-[1] grid h-14 w-14 place-items-center border border-[#10161d]/[0.18] bg-[#f2f0ea] font-mono text-[10px] text-[#5d6670] max-[767px]:h-[46px] max-[767px]:w-[46px] ${index === 0 ? 'border-[#bd00f2] bg-[#bd00f2] text-white' : ''}`}>{number}</span>
					<div><span className="font-mono text-[10px] text-violet">{['CREATE', 'OPTIMISE', 'ACTIVATE', 'SUSTAIN'][index]}</span><h3 className="mt-[5px] mb-[6px] text-xl">{title}</h3>
					<p className="m-0 max-w-[540px] text-[15px] leading-[1.6] text-[#3B4452]">{description}</p></div>
					</article>)}
			</div>
		</section>

		<section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1320px)/2))] py-[94px] pb-[100px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="content-ai-visibility-title">
			<div className="mb-8 grid grid-cols-[1fr_280px] items-end gap-[60px] max-[1023px]:grid-cols-1 max-[1023px]:gap-5"><div><SectionTitle className="mb-7 max-[767px]:mb-5"><span>05</span> / Signature interaction</SectionTitle><h2 className="m-0 max-w-[820px] text-[64px] leading-[1.04] max-[1023px]:text-[56px] max-[767px]:text-[42px]" id="content-ai-visibility-title">See the visibility layer.</h2></div><p className="mb-[5px] text-[18px] leading-[1.7] text-[#3B4452] max-[1023px]:max-w-[500px]">This is a visual model, not a live search result. Switch the signal to see how the same marketing system can surface through different routes.</p></div>
			<div className="grid min-h-[440px] grid-cols-[30%_1fr] border-y border-[#10161d]/[0.18] max-[767px]:grid-cols-1">
				<div className="mt-5 self-start max-[767px]:mt-0 max-[767px]:grid max-[767px]:grid-cols-2" role="group" aria-label="Choose a visibility channel">{visibilityModes.map(([name, state], index) => <button type="button" className={`flex min-h-[42px] w-full items-center justify-between border-0 border-b border-[#10161d]/[0.16] px-[14px] text-left max-[767px]:border-r max-[767px]:border-r-[#10161d]/[0.12] max-[767px]:px-2 ${index === activeVisibility ? 'bg-[#e9e7df]' : 'bg-transparent'}`} key={name} onClick={() => setActiveVisibility(index)} aria-pressed={index === activeVisibility}><span className="flex items-center text-[10px] max-[767px]:text-[9px]">{index === activeVisibility && <i className="mr-[9px] h-[6px] w-[6px] bg-[#bd00f2]" />}{name}</span><small className="font-mono text-[7px] text-[#78818a] max-[767px]:text-[6px]">{state}</small></button>)}</div>
				<div className="relative min-h-[440px] overflow-hidden bg-[#111318] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:46px_42px] p-[22px] text-[#f8f8f7] max-[767px]:min-h-[390px] max-[767px]:p-4" aria-live="polite"><div className="flex justify-between gap-5 font-mono text-[8px] text-[#77808b]"><span>{visibility[0].toUpperCase()} SURFACE</span><span>MODEL / ILLUSTRATIVE</span></div><div className="relative z-[1] mt-[46px] ml-[4%] max-w-[610px] max-[767px]:mt-[50px] max-[767px]:ml-0"><h3 className="mb-3 max-w-[560px] text-[44px] leading-[1.05] max-[767px]:text-[32px]">{visibility[2]}</h3><p className="mb-6 max-w-[570px] text-[11px] leading-[1.6] text-[#a6abb4]">{visibility[3]}</p><div className="mb-[10px] h-[7px] border border-white/[0.22]"><i className="block h-full bg-[#bd00f2] transition-[width] duration-300 ease-in-out" style={{ width: `${34 + activeVisibility * 14}%` }} /></div><div>{visibility[4].map((signal, index) => <div className="grid min-h-9 grid-cols-[1fr_1.2fr_30px] items-center border-t border-white/[0.16]" key={signal}><span className="font-mono text-[7px] text-[#828994]">{['SIGNAL', 'ROUTE', 'ROLE'][index]}</span><strong className="text-[9px] font-medium">{signal}</strong><small className="font-mono text-[7px] text-[#828994]">{String(index + 1).padStart(2, '0')}</small></div>)}</div></div><span className="absolute right-[-80px] bottom-[-160px] h-[300px] w-[300px] rounded-full border border-[#bd00f2]/[0.38] shadow-[0_0_0_35px_rgba(189,0,242,0.04),0_0_0_70px_rgba(189,0,242,0.025)]" /></div>
			</div>
		</section>

		<section className="bg-[#f5f4f7] px-[max(48px,calc((100vw-1320px)/2))] py-[94px] pb-[100px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="content-ai-impact-title">
			<SectionTitle className="mb-7 max-[767px]:mb-5"><span>06</span> / Business impact</SectionTitle><h2 className="mb-10 ml-auto max-w-[900px] text-[64px] leading-[1.04] max-[1023px]:text-[56px] max-[767px]:mt-6 max-[767px]:mb-[30px] max-[767px]:text-[42px]" id="content-ai-impact-title">Visibility that has a job to do.</h2>
			<div className="border-t border-[#10161d]/[0.18]">{contentImpacts.map(([number, label, title, description]) => <article className="grid min-h-[90px] grid-cols-[48px_1fr_1.25fr_1.2fr] items-center gap-5 border-b border-[#10161d]/[0.18] max-[1023px]:grid-cols-[40px_1fr_1.2fr] max-[1023px]:[&>p]:col-start-2 max-[1023px]:[&>p]:col-end-[-1] max-[1023px]:[&>p]:pb-4 max-[767px]:grid-cols-[32px_1fr] max-[767px]:gap-x-3 max-[767px]:gap-y-2 max-[767px]:py-4" key={number}><span className="font-mono text-[8px] text-[#bd00f2]">{number}</span><strong className="text-[22px] font-medium max-[767px]:text-[18px]">{label}</strong><h3 className="m-0 text-[13px] uppercase max-[767px]:col-start-2 max-[767px]:text-[11px]">{title}</h3><p className="m-0 text-[20px] leading-[1.6] text-[#3B4452] max-[767px]:col-start-2 max-[767px]:pb-1">{description}</p></article>)}</div>
		</section>

		<section className="relative flex min-h-[540px] flex-col justify-center overflow-hidden bg-[#101116] px-[max(48px,calc((100vw-1400px)/2))] py-20 text-[#f8f8f7] max-[767px]:min-h-[440px] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="content-ai-cta-title">
			<SectionTitle className="relative z-[1] mb-7 max-[767px]:mb-5"><span>07</span> / Start here</SectionTitle><h2 className="relative z-[1] mb-[18px] max-w-[850px] text-[68px] leading-[1.04] max-[767px]:text-[42px]" id="content-ai-cta-title">Ready to be found?<br /><span className="text-[#bd00f2]">Let's make the signal clear.</span></h2><p className="relative z-[1] mb-[22px] max-w-[480px] text-[12px] leading-[1.7] text-[#a6abb4]">Start with the visibility problem you need to solve. We can map the relevant content, search and channel work from there.</p><Link className="relative z-[1] inline-flex min-h-[45px] items-center gap-[14px] bg-[#f8f8f7] px-[17px] text-[11px] font-bold text-[#101116] no-underline transition-all duration-200 max-[767px]:text-[10px]" to="/contact">Talk to mDNA <span aria-hidden="true">↗</span></Link><div className="absolute right-[17%] bottom-[-140px] h-[280px] w-[280px] rotate-45 border border-[#bd00f2]/40" />
		</section>
		  <ToolsSection tools={contentSearchAIData.tools} />
	</div>
}
