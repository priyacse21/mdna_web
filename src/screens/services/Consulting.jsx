import { useState } from 'react'
import { Link } from 'react-router-dom'
import NeedList from '../../components/common/NeedList/NeedList'
import { consultingJourney, consultingLenses, consultingOffers, consultingOutcomes } from './data/serviceData'
import ServiceLens from '../../components/common/ServiceLens/LensExplorer'


import { LENSES, LINES } from './data/serviceData'
 




export default function Consulting() {
	const [activeOffer, setActiveOffer] = useState(0)
	const [activeLens, setActiveLens] = useState(0)
	const offer = consultingOffers[activeOffer]
	const lens = consultingLenses[activeLens]

	return <div className="[&_h1]:tracking-normal [&_h1]:normal-case [&_h2]:tracking-normal [&_h2]:normal-case">
		<section className="grid min-h-[760px] grid-cols-[minmax(500px,0.8fr)_minmax(580px,1.2fr)] gap-12 bg-[#101116] px-[max(48px,calc((100vw-1440px)/2))] text-white max-[1023px]:grid-cols-1 max-[1023px]:px-6 max-[1023px]:pb-[52px] max-[767px]:px-5 max-[767px]:pb-[34px]" aria-labelledby="consulting-title">
			<div className="flex flex-col justify-center py-14 pb-[34px] max-[1023px]:pt-[72px] max-[1023px]:pb-[10px] max-[767px]:pt-[62px]">
				<p className="mb-9 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:mb-5 max-[767px]:text-[8px]"><span className="mr-[10px] inline-block w-[26px] align-middle border-t border-[#bd00f2]" />05 / Consulting</p>
				<h1 className="m-0 mb-6 text-[82px] leading-[1.02] max-[767px]:text-5xl" id="consulting-title">Make the<br />next move<br />with a clear <span className="text-[#bd00f2]">map.</span></h1>
				<p className="mb-7 max-w-[510px] text-[14px] leading-[1.7] text-[#a8abb3] max-[767px]:text-xs">Consulting that helps you build the marketing function, understand the market and define the audiences that matter.</p>
				<div className="flex flex-wrap gap-[10px]"><a className="inline-flex min-h-[45px] items-center gap-[14px] bg-[#f8f8f7] px-[17px] text-[11px] font-bold text-[#101116] no-underline transition-all duration-200 max-[767px]:text-[10px]" href="#consulting-system">Explore consulting <span aria-hidden="true">↓</span></a><Link className="inline-flex min-h-[45px] items-center gap-[14px] border border-current px-[17px] text-[11px] font-bold text-white no-underline transition-all duration-200 max-[767px]:text-[10px]" to="/contact">Book a consulting call <span aria-hidden="true">↗</span></Link></div>
				<div className="mt-[58px] grid grid-cols-3 gap-[18px] border-t border-white/[0.17] pt-5 max-[767px]:mt-[34px] max-[767px]:grid-cols-1 max-[767px]:gap-[14px]">{['Setup & handover', 'Research & benchmarking', 'Insights & segmentation'].map((label, index) => <div className="grid gap-[6px]" key={label}><span className="font-mono text-[8px] uppercase text-[#8a909a]">0{index + 1} / {['Function', 'Market', 'Customer'][index]}</span><strong className="text-[10px] font-medium">{label}</strong></div>)}</div>
			</div>
			<div className="relative min-h-[550px] self-center overflow-hidden border border-white/[0.17] bg-[#151720] max-[1023px]:min-h-[490px] max-[767px]:min-h-[400px]" role="img" aria-label="Illustrative consulting strategy map linking start, market, decision, audience, build and move">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:44px_44px]" />
				<div className="absolute top-5 right-5 left-5 z-[2] flex justify-between font-mono text-[8px] text-[#7c838e]"><span>STRATEGIC MAP / ILLUSTRATIVE</span><span>01–05 / ROUTES</span></div>
				<span className="absolute top-1/2 left-1/2 z-[1] h-px w-[46%] origin-left rotate-[-17deg] bg-[#c2c7d0]/[0.32]" /><span className="absolute top-1/2 left-1/2 z-[1] h-px w-[46%] origin-left rotate-[18deg] bg-[#c2c7d0]/[0.32]" /><span className="absolute top-1/2 left-1/2 z-[1] h-px w-[46%] origin-left rotate-[140deg] bg-[#c2c7d0]/[0.32]" />
				{[
					['START', 'top-[28%] left-[12%] max-[767px]:top-[23%] max-[767px]:left-[7%]'],
					['MARKET', 'top-[28%] right-[22%] max-[767px]:top-[25%] max-[767px]:right-[16%]'],
					['DECIDE', 'top-[46%] left-[48%] max-[767px]:top-[45%] max-[767px]:left-[42%]'],
					['AUDIENCE', 'right-[22%] bottom-[31%] max-[767px]:right-[10%] max-[767px]:bottom-[35%]'],
					['BUILD', 'bottom-[20%] left-[31%] max-[767px]:bottom-[23%] max-[767px]:left-[20%]'],
					['MOVE', 'right-[16%] bottom-[18%] max-[767px]:right-[10%]'],
				].map(([label, position]) => <span className={`absolute z-[2] flex items-center gap-[10px] font-mono text-[8px] text-[#a6adb8] ${position}`} key={label}><i className="relative h-4 w-4 rotate-45 border border-[#9298a2] bg-[#171922] after:m-1 after:block after:h-[6px] after:w-[6px] after:bg-[#bd00f2] after:content-['']" />{label}</span>)}
				<div className="absolute right-[18px] bottom-[18px] z-[3] grid w-[190px] gap-2 border-l border-[#bd00f2] bg-[#101116]/[0.92] p-[15px] max-[767px]:right-[10px] max-[767px]:bottom-[10px] max-[767px]:w-[155px] max-[767px]:p-[11px]"><span className="font-mono text-[7px] text-[#818894]">CURRENT VIEW</span><strong className="text-xs font-semibold">{lens[1]}</strong><small className="font-mono text-[7px] text-[#818894]">ROUTES / INPUTS / NEXT ACTION</small></div>
				<div className="absolute bottom-[18px] left-[18px] grid h-14 w-14 place-items-center border border-white/20 bg-[linear-gradient(transparent_calc(50%_-_0.5px),rgba(255,255,255,0.2)_50%,transparent_calc(50%_+_0.5px)),linear-gradient(90deg,transparent_calc(50%_-_0.5px),rgba(255,255,255,0.2)_50%,transparent_calc(50%_+_0.5px))] max-[767px]:bottom-[10px] max-[767px]:left-[10px] max-[767px]:h-[42px] max-[767px]:w-[42px]"><i className="h-[10px] w-[10px] rotate-45 bg-[#bd00f2]" /></div>
			</div>
		</section>

		<section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1320px)/2))] pt-24 pb-[110px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="consulting-opportunity-title">
			<p className="mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:mb-5 max-[767px]:text-[8px]"><span className="mr-[10px] inline-block w-[26px] align-middle border-t border-[#bd00f2]" />The opportunity</p>
			<div className="ml-auto max-w-[1000px] max-[767px]:mt-6"><h2 className="m-0 text-[72px] leading-[1.04] max-[767px]:text-[42px]" id="consulting-opportunity-title">Good decisions need more than <span className="text-[#85898f]">more activity.</span></h2>
				<div className="mt-[42px] grid grid-cols-3 border-t border-[#10161d]/[0.18] max-[767px]:mt-[30px] max-[767px]:grid-cols-1">
					{[['01 / FUNCTION', 'Build the capability.', 'A marketing function can be built and handed over as a fully operational, self-sufficient team.'], ['02 / MARKET', 'Know the context.', 'Industry reports and competitive benchmarking provide a basis for data-backed decisions.'], ['03 / CUSTOMER', 'See the segments.', 'Customer behaviour can be analysed to define audience segments for more targeted campaigns.']].map(([label, title, description], index) => <article className={`min-h-[156px] py-6 pr-[22px] pb-[10px] ${index > 0 ? 'border-l border-[#10161d]/[0.17] pl-6 max-[767px]:border-l-0 max-[767px]:border-b' : ''} max-[767px]:min-h-0 max-[767px]:px-0 max-[767px]:py-[18px]`} key={label}><span className="font-mono text-[8px] text-[#bd00f2]">{label}</span><h3 className="mt-6 mb-2 text-[17px] max-[767px]:mt-3">{title}</h3><p className="m-0 max-w-[290px] text-[11px] leading-[1.65] text-[#67727d]">{description}</p></article>)}
				</div>
			</div>
		</section>

		<section className="bg-[#0d151d] px-[max(48px,calc((100vw-1320px)/2))] pt-[88px] pb-[100px] text-[#f8f8f7] max-[767px]:px-5 max-[767px]:py-[68px]" id="consulting-system" aria-labelledby="consulting-system-title">
			<div className="mb-[42px] grid grid-cols-[1fr_300px] items-end gap-[60px] max-[1023px]:grid-cols-1 max-[1023px]:gap-5"><div><p className="mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:mb-5 max-[767px]:text-[8px]"><span className="mr-[10px] inline-block w-[26px] align-middle border-t border-[#bd00f2]" />01 / The service system</p><h2 className="m-0 max-w-[850px] text-[62px] leading-[1.04] max-[767px]:text-[42px]" id="consulting-system-title">Three ways to turn insight into decision.</h2></div><p className="mb-[5px] text-[12px] leading-[1.7] text-[#a3a8b1] max-[1023px]:max-w-[500px]">The consulting offer is built around the practical questions behind marketing capability, market understanding and customer focus.</p></div>
			<NeedList
				className="border-t border-white/[0.16]"
				needs={consultingOffers.map(([, title, description, impact]) => ({ title, description, impact }))}
				variant="interactive"
				activeIndex={activeOffer}
				onSelect={setActiveOffer}
				accentColor="var(--violet)"
				ariaLabel="Choose a consulting service"
			/>
			<div className="grid grid-cols-[46px_1.5fr_1.4fr_1.1fr_1fr] items-center gap-5 border-b border-white/[0.16] bg-[#bd00f2]/[0.06] px-[10px] py-[22px] max-[767px]:grid-cols-1 max-[767px]:gap-[10px] max-[767px]:border-0 max-[767px]:bg-transparent max-[767px]:px-1 max-[767px]:pt-[18px] max-[767px]:pb-0" aria-live="polite"><span className="font-mono text-[8px] text-[#bd00f2]">{offer[0]} / 03</span><h3 className="m-0 text-[15px] max-[767px]:text-[22px]">{offer[1]}</h3><p className="m-0 text-[10px] leading-[1.6] text-[#a6abb4] max-[767px]:text-[11px]">{offer[2]}</p><strong className="text-[10px] font-normal leading-[1.6] text-[#a6abb4] max-[767px]:text-[11px]">{offer[3]}</strong><Link className="font-mono text-[8px] leading-[1.6] uppercase text-white no-underline max-[767px]:justify-self-start" to="/contact">{offer[4]} <span aria-hidden="true">↗</span></Link></div>
		</section>

		<section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1320px)/2))] pt-[94px] pb-[102px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="consulting-journey-title">
			<p className="mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:mb-5 max-[767px]:text-[8px]"><span className="mr-[10px] inline-block w-[26px] align-middle border-t border-[#bd00f2]" />The journey</p><h2 className="mb-[60px] ml-auto max-w-[860px] text-[72px] leading-[1.04] max-[767px]:mt-6 max-[767px]:mb-[38px] max-[767px]:text-[42px]" id="consulting-journey-title">Understand.<br /><span className="text-[#bd00f2]">Decide. Build. Move.</span></h2>
			<div className="relative grid grid-cols-4 border-t border-[#10161d]/[0.18] before:absolute before:top-[-1px] before:right-0 before:left-0 before:h-px before:bg-[#10161d]/[0.18] before:content-[''] max-[767px]:grid-cols-2">{consultingJourney.map(([number, title, description], index) => <article className={`relative min-h-[250px] border-r border-[#10161d]/[0.16] px-6 pt-16 pb-5 first:pl-0 last:border-r-0 max-[767px]:min-h-[210px] max-[767px]:border-b max-[767px]:px-3 max-[767px]:pt-12 max-[767px]:pb-[18px] max-[767px]:first:pl-0 max-[767px]:nth-[2]:border-r-0 max-[767px]:nth-last-[-n+2]:border-b-0`} key={number}><span className={`absolute top-[-6px] left-0 h-[10px] w-[10px] border border-[#85898f] bg-[#f2f0ea] ${index === 0 ? 'border-[#bd00f2] bg-[#bd00f2] shadow-[0_0_0_7px_rgba(189,0,242,0.12)]' : ''} ${index > 0 ? 'max-[767px]:left-3' : ''} ${index === 2 ? 'max-[767px]:left-0' : ''} ${index === 3 ? 'max-[767px]:left-3' : ''}`}><b className="hidden">{number}</b></span><div><span className="font-mono text-[8px] uppercase text-[#717d87]">{number} / {['Understand', 'Decide', 'Build', 'Move'][index]}</span><h3 className="mt-7 mb-[10px] text-[18px] max-[767px]:mt-5 max-[767px]:text-[15px]">{title}</h3><p className="m-0 max-w-[250px] text-[11px] leading-[1.65] text-[#68737d] max-[767px]:text-[10px]">{description}</p></div></article>)}</div>
		</section>

		 <ServiceLens
      heading={"Change the question.\nChange the route."}
      description="Use the map to explore the consulting lens that matches the decision in front of you."
      lenses={LENSES}
      lines={LINES}
    />

		<section className="bg-[#0d151d] px-[max(48px,calc((100vw-1320px)/2))] py-[90px] pb-[100px] text-[#f8f8f7] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="consulting-outcomes-title">
			<div className="mb-12 grid grid-cols-[1fr_300px] items-end gap-[60px] max-[1023px]:grid-cols-1 max-[1023px]:gap-5 max-[767px]:mb-[30px]"><h2 className="m-0 max-w-[850px] text-[62px] leading-[1.04] max-[767px]:text-[42px]" id="consulting-outcomes-title">Clarify the choices that come next.</h2><p className="mb-[5px] text-[12px] leading-[1.7] text-[#a3a8b1] max-[1023px]:max-w-[500px]">The consulting offer connects capability, evidence and audience understanding to practical business decisions.</p></div>
			<div className="grid grid-cols-3 border-y border-white/[0.18] max-[767px]:grid-cols-1">{consultingOutcomes.map(([label, title, description]) => <article className="flex min-h-[230px] flex-col justify-between border-r border-white/[0.15] p-6 last:border-r-0 max-[767px]:min-h-[165px] max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:px-3 max-[767px]:py-[18px] max-[767px]:last:border-b-0" key={label}><span className="font-mono text-[8px] text-[#bd00f2]">{label}</span><div><h3 className="mb-[10px] text-[22px]">{title}</h3><p className="m-0 max-w-[280px] text-[11px] leading-[1.6] text-[#a4aab3]">{description}</p></div></article>)}</div>
		</section>

		<section className="relative flex min-h-[540px] flex-col justify-center overflow-hidden bg-[#0d151d] px-[max(48px,calc((100vw-1320px)/2))] py-[84px] text-[#f8f8f7] max-[767px]:min-h-[450px] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="consulting-cta-title">
			<p className="relative z-[1] mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#bd00f2] max-[767px]:mb-5 max-[767px]:text-[8px]"><span className="mr-[10px] inline-block w-[26px] align-middle border-t border-[#bd00f2]" />05 / Consulting</p><h2 className="relative z-[1] mb-5 text-[68px] leading-[1.03] max-[767px]:text-[44px]" id="consulting-cta-title">Ready to turn<br />uncertainty into a<br /><span className="text-[#bd00f2]">route?</span></h2><p className="relative z-[1] mb-6 max-w-[480px] text-[12px] leading-[1.7] text-[#a4aab3]">Book a consulting call, request a research scope or book a segmentation review.</p><Link className="relative z-[1] inline-flex min-h-[45px] items-center gap-[14px] bg-[#f8f8f7] px-[17px] text-[11px] font-bold text-[#101116] no-underline transition-all duration-200 max-[767px]:text-[10px]" to="/contact">Talk to mDNA <span aria-hidden="true">↗</span></Link><div className="absolute top-1/2 right-[18%] h-[260px] w-[260px] -translate-y-1/2 rotate-45 border border-[#bd00f2]/40 max-[767px]:right-[-35%] max-[767px]:h-[200px] max-[767px]:w-[200px]" />
		</section>
	</div>
}
