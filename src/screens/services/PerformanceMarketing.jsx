import { Link } from 'react-router-dom'
import SectionTitle from '../../components/common/SectionTitle'
import {performanceServices, performanceStages } from './data/serviceData'
import { performanceData } from './data/toolsCatlog'
import ToolsSection from './common/ToolSection/Toolsection'

export default function PerformanceMarketing() {
	return <div className="[&_h1]:tracking-normal [&_h1]:normal-case [&_h2]:tracking-normal [&_h2]:normal-case">
		<section className="bg-[#f2f0ea] px-[30px] pt-[78px] text-[#10161d] max-[767px]:px-5 max-[767px]:pt-[60px]" aria-labelledby="performance-title">
			<SectionTitle className="mb-8 max-[767px]:mb-5">Performance marketing</SectionTitle>
			<div className="grid grid-cols-[1fr_390px] items-center gap-16 border-b border-[#10161d]/20 pb-16 max-[1023px]:grid-cols-[1fr_300px] max-[767px]:grid-cols-1 max-[767px]:gap-[18px] max-[767px]:pb-[34px]">
				<div>
				<h1 className="m-0 text-[88px] leading-[0.99] max-[1023px]:text-[70px] max-[767px]:text-5xl" id="performance-title">Make every<br /><span className="text-[#bd00f2]">click accountable.</span></h1></div>
				<p className="mt-[30px] mb-0 max-w-[390px] text-[18px] leading-[1.55] text-[#15171c] max-[767px]:mt-0 max-[767px]:text-[14px]">Paid acquisition, conversion and measurement working together so performance can be tested, understood and improved.</p>
			</div>
		</section>

		<section className="bg-[#f2f0ea] px-[30px] pb-[72px] text-[#10161d] max-[767px]:px-5 max-[767px]:pb-[50px]" aria-label="Performance marketing services">
			{performanceServices.map(([number, name, description, impact, action, prefill]) => <article className="grid grid-cols-[48px_minmax(360px,1fr)_minmax(380px,1fr)] items-start gap-10 border-b border-[#10161d]/[0.17] py-7 max-[1023px]:grid-cols-[36px_minmax(250px,1fr)_minmax(290px,1fr)] max-[1023px]:gap-6 max-[767px]:grid-cols-[28px_1fr] max-[767px]:gap-x-3 max-[767px]:gap-y-2 max-[767px]:py-[22px]" key={number}>
				<span className="pt-[5px] font-mono text-[18px]text-violet max-[767px]:row-span-2">{number}</span>
				<div><h2 className="mb-2 text-[25px] leading-[1.15] max-[1023px]:text-2xl max-[767px]:text-xl">{name}</h2>
				<p className="m-0 max-w-[600px] text-[15px] leading-[1.65] text-[#0A0A0A] max-[767px]:text-[12px]">{description}</p></div>
				<div className="max-[767px]:col-start-2 max-[767px]:mt-[10px]">
					<span className="mb-[7px] block font-mono text-[12px] tracking-[0.1em] uppercase text-[#bd00f2]">Impact</span>
					<p className="m-0 max-w-[600px] text-[18px] leading-[1.65] text-[#3B4452] max-[767px]:text-[12px]">{impact}</p>
					<Link className="mt-[17px] inline-flex items-center gap-[14px] border-t border-[#111318] pt-[9px] font-mono text-[13px] text-[#111318] no-underline" to={prefill ? `/contact?service=${encodeURIComponent(prefill)}` : '/contact'}>{action}<b className="text-[11px] font-normal text-[#bd00f2]" aria-hidden="true">↗</b></Link></div>
			</article>)}
		</section>


		<section className="bg-[#f5f4f7] border-t border-[#10161d]/20 bg-[#f2f0ea] px-[30px] pt-14 pb-[86px] text-[#10161d] max-[767px]:px-5 max-[767px]:pt-11 max-[767px]:pb-[62px]" aria-labelledby="performance-loop-title">
			<SectionTitle className="mb-7 max-[767px]:mb-5">The system</SectionTitle>
			<div className="mb-14 flex items-end justify-between gap-[50px] max-[767px]:mb-[34px] max-[767px]:block"><h2 className="m-0 text-[58px] leading-[1.05] max-[767px]:text-[38px]" id="performance-loop-title">Performance is not a channel.<br /><span className="text-[#bd00f2]">It is a feedback loop.</span></h2><Link className="shrink-0 pb-2 font-mono text-[9px] text-[#111318] no-underline max-[767px]:mt-5 max-[767px]:inline-block" to="/contact">Talk to us <span className="text-[#bd00f2]" aria-hidden="true">↗</span></Link></div>
			<div className="grid grid-cols-3 border-y border-[#10161d]/20 max-[767px]:grid-cols-1">{performanceStages.map(([number, title, description], index) =>
				<article className={`min-h-[190px] border-r border-[#10161d]/[0.16] px-6 py-[22px] last:border-r-0 first:pl-0 max-[767px]:min-h-[150px] max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:px-0 max-[767px]:py-[18px] max-[767px]:last:border-b-0`} key={number}>
					<span className="font-mono text-[12px] uppercase text-violet">{number} / {title}</span>
					<h3 className="mt-[42px] mb-2 text-[19px] max-[767px]:mt-6">{title}</h3>
					<p className="m-0 max-w-[320px] text-[15px] leading-[1.6] text-[#3B4452]">{description}</p>
					</article>)}</div>
		</section>

		<section className="grid grid-cols-[1fr_1.7fr] items-start gap-[50px] bg-[#0d151d] px-[30px] pt-20 pb-[90px] text-[#f8f8f7] max-[767px]:grid-cols-1 max-[767px]:gap-6 max-[767px]:px-5 max-[767px]:pt-16 max-[767px]:pb-[72px]" aria-labelledby="performance-cta-title">
			<SectionTitle> Performance marketing</SectionTitle>
			<div><h2 className="mb-4 text-[54px] leading-[1.05] max-[767px]:text-[40px]" id="performance-cta-title">Spend with purpose.<br /><span className="text-[#bd00f2]">Learn from every click.</span></h2><p className="mb-6 max-w-[520px] text-[18px] leading-[1.7] text-[#B8C1CC]">Bring acquisition, conversion and measurement together in a performance system built to keep improving.</p><Link className="inline-flex min-h-[45px] items-center gap-[14px] bg-[#f8f8f7] px-[17px] text-[11px] font-bold text-[#101116] no-underline transition-all duration-200 max-[767px]:text-[10px]" to="/contact">Plan your next campaign <span aria-hidden="true">↗</span></Link></div>
		</section>
		<ToolsSection tools={performanceData.tools} />
	</div>
}