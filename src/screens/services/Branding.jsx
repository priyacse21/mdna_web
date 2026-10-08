import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../../components/common/SectionTitle'
import { brandingBenefits, brandingFormats, brandingJourney, brandingServices } from './data/serviceData'
import { BrandingData } from './data/toolsCatlog'
import ToolsSection from './common/ToolSection/Toolsection'
import ServiceShowcase from './common/ServiceShowcase/ServiceShowcase'



import { SERVICES_branding } from './data/serviceData'

export default function Branding() {
	const [activeService, setActiveService] = useState(0)
	const service = brandingServices[activeService]

	return <div className="[&_h1]:tracking-normal [&_h1]:normal-case [&_h2]:tracking-normal [&_h2]:normal-case">
		<section className="grid min-h-[700px] grid-cols-[1.15fr_0.85fr] bg-[#101116] text-white max-[1023px]:grid-cols-2 max-[767px]:grid-cols-1" aria-labelledby="branding-title">
			<div className="self-center py-[75px] pr-12 pl-[max(48px,calc((100vw-1400px)/2))] max-[1023px]:px-7 max-[1023px]:py-[65px] max-[1023px]:pl-6 max-[767px]:px-5 max-[767px]:pt-[68px] max-[767px]:pb-[42px]">
				<SectionTitle className="mb-7 max-[767px]:mb-5">mDNA / BRAND</SectionTitle>
				<h1 className="m-0 mb-[22px] text-[84px] leading-[1.02] max-[1023px]:text-[62px] max-[767px]:text-5xl" id="branding-title">Make your<br />brand part of<br />the <span className="text-[#bd00f2]">conversation.</span></h1>
				<p className="mb-7 max-w-[580px] text-[18px] leading-[1.7] text-[#B8C1CC] max-[767px]:text-xs">Branding that builds visibility, credibility and attention across the channels your audience already trusts.</p>
				<div className="flex flex-wrap gap-[10px]">
					<Link className="inline-flex min-h-[45px] items-center gap-[14px] bg-[#f8f8f7] px-[17px] text-[11px] font-bold text-[#101116] no-underline transition-all duration-200 max-[767px]:text-[10px]" to="/contact">Talk to us <span aria-hidden="true">↗</span></Link></div>
			</div>
			<div className="relative min-h-[700px] overflow-hidden border-l border-white/[0.14] bg-[#111318] max-[1023px]:min-h-[600px] max-[767px]:min-h-[420px] max-[767px]:border-t max-[767px]:border-l-0" aria-label="A grid of brand and media touchpoints">
				<div className="absolute inset-[-6%] grid grid-cols-7 auto-rows-fr gap-2 rotate-[-10deg] scale-[1.08]">{Array.from({ length: 35 }, (_, index) => <span className={`border ${[2, 8, 12, 17, 23, 29, 33].includes(index) ? 'border-[#bd00f2]/[0.65] bg-[#bd00f2]/[0.04]' : 'border-white/[0.09] bg-[#0d0f15]/75'}`} key={index} />)}</div>
				<div className="absolute top-1/2 left-1/2 flex h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 border border-[#bd00f2]/70 bg-[#111318] text-[42px] font-extrabold text-[#f8f8f7] max-[767px]:h-[150px] max-[767px]:w-[150px] max-[767px]:text-[30px]" aria-hidden="true"><span>m</span><b className="text-[#bd00f2]">D</b><span>NA</span></div>
				<div className="absolute top-[38%] left-[12%] z-[1] grid font-mono text-[8px] leading-[2] text-[#9aa0aa] [&_span]:before:mr-[10px] [&_span]:before:inline-block [&_span]:before:w-7 [&_span]:before:border-t [&_span]:before:border-[#bd00f2] [&_span]:before:align-middle"><span>STORY</span><span>AUDIENCE</span><span>PROOF</span><span>INFLUENCE</span></div>
				<span className="absolute top-[10px] right-3 z-[1] font-mono text-[8px] leading-[2] text-[#9aa0aa] [writing-mode:vertical-rl]">/ EVENTS / FORMAT / TRUST</span>
				<span className="absolute bottom-[18px] left-[12%] z-[1] font-mono text-[8px] leading-[2] text-[#707782]">SCALE / TO / EXPLORE</span>
			</div>
		</section>

		<section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1300px)/2))] pt-[100px] pb-[112px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="branding-premise-title">
			<SectionTitle className="mb-7 max-[767px]:mb-5"><span>01</span> / The premise</SectionTitle>
			<div className="ml-auto max-w-[1030px] border-b border-[#10161d]/[0.18] pb-[42px] max-[767px]:mt-6 max-[767px]:pb-7"><h2 className="m-0 max-w-[900px] text-[72px] leading-[1.04] max-[767px]:text-[42px]" id="branding-premise-title">PR that moves beyond press releases.</h2><p className="mt-6 mb-0 max-w-[640px] text-[16px] leading-[1.7] text-[#3B4452]">mDNA uses digital channels, content formats, communities and reputation platforms to help brands build visibility and credibility.</p></div>
		</section>

	<ServiceShowcase
				eyebrowIndex="02"
				eyebrowLabel=" THE SERVICE SYSTEM"
				heading="Six Ways We Create Digital Attention."
				description="Choose a format. See how it works. Move from attention to the next useful action.."
				panelLabel="Digital PR services"
				codePrefix="mDNA / PR "
				items={SERVICES_branding}
			/>

	<section className="bg-[#f5f4f7] px-[max(48px,calc((100vw-1320px)/2))] pt-[92px] pb-[100px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="branding-journey-title">
  <SectionTitle className="mb-7 max-[767px]:mb-5"><span>03</span> / The journey</SectionTitle>
  <h2 className="mb-[50px] max-w-[1000px] text-[72px] leading-[1.04] ml-auto max-[767px]:mt-6 max-[767px]:mb-9 max-[767px]:text-[42px]" id="branding-journey-title">From story to influence.</h2>
  <div className="relative mx-auto  w-fit max-w-[850px] before:absolute before:top-8 before:bottom-8 before:left-[31px] before:w-px before:bg-[#10161d]/[0.18] before:content-[''] max-[767px]:before:left-[25px]">	
    {brandingJourney.map(([number, title, description], index) => (
      <article className="relative grid min-h-[140px] grid-cols-[64px_1fr] items-center gap-6 max-[767px]:min-h-28 max-[767px]:grid-cols-[52px_1fr] max-[767px]:gap-[18px]" key={number}>
       <span
  className={`z-[1] grid h-16 w-16 place-items-center border font-mono text-[9px] max-[767px]:h-[52px] max-[767px]:w-[52px] ${
    index === 0
      ? 'rotate-45 border-[#bd00f2] bg-[#bd00f2] text-white'
      : 'border-[#10161d]/20 bg-[#f2f0ea]'
  }`}
>
  <b className={`font-normal ${index === 0 ? 'rotate-[-45deg]' : ''}`}>{number}</b>
</span>
        <div>
          <strong className="text-[19px] font-semibold uppercase max-[767px]:text-[15px]">{title}</strong>
          <p className="mt-[6px] mb-0 text-[12px] text-[#3B4452]">{description}</p>
        </div>
      </article>
    ))}
  </div>
</section>

		<section className="bg-[#f2f0ea] px-[max(48px,calc((100vw-1260px)/2))] pt-[92px] pb-[104px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="branding-formats-title">
			<div className="grid grid-cols-[1fr_280px] items-end gap-[60px] border-b border-[#10161d]/[0.18] pb-8 max-[1023px]:grid-cols-1 max-[1023px]:gap-5 max-[767px]:gap-[18px]"><div><SectionTitle className="mb-7 max-[767px]:mb-5"><span>04</span> / The newsroom</SectionTitle><h2 className="m-0 text-[72px] leading-[1.04] max-[767px]:text-[42px]" id="branding-formats-title">One story.<br /><span className="text-[#bd00f2]">Many signals.</span></h2></div><p className="mb-1 text-[12px] leading-[1.7] text-[#67727d]">Different formats. One connected brand presence.</p></div>
			<div className="grid grid-cols-5 items-start gap-[22px] pt-12 max-[1023px]:grid-cols-3 max-[1023px]:gap-y-7 max-[767px]:grid-cols-2 max-[767px]:gap-x-[14px] max-[767px]:gap-y-[22px] max-[767px]:px-2 max-[767px]:pt-[30px] max-[767px]:pb-[10px]">
				{brandingFormats.map(([number, name, description], index) => (
					<article
						className={`group relative flex min-h-[300px] flex-col justify-between border border-[#10161d]/[0.28] px-4 py-[22px] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#111318] hover:text-white hover:shadow-lg ${index === 1 || index === 3 ? 'mt-12 rotate-[4deg] max-[767px]:mt-[30px]' : '-rotate-[3deg]'} ${index === 2 ? 'rotate-[-2deg]' : ''} ${index === 3 ? 'rotate-[3deg] bg-[#d4d5d2]' : ''} ${index === 4 ? '-rotate-[6deg] bg-[#bd00f2] text-white' : 'bg-[#f2f0ea]'} max-[1023px]:min-h-[250px] max-[767px]:min-h-[220px] max-[767px]:px-3 max-[767px]:py-4`}
						key={number}
					>
						<span className="font-mono text-[7px] text-[#78818a] group-hover:text-white">{`FORMAT ${number}`}</span>
						<h3 className="mt-auto mb-2 text-xl max-[767px]:text-base">{name}</h3>
						<p className="mb-0 min-h-[52px] text-[9px] leading-[1.55] opacity-[0.72] max-[767px]:text-[8px]">{description}</p>
						<b className={`mt-4 self-end text-[13px] text-[#bd00f2] group-hover:text-white ${index === 4 ? 'text-white' : ''}`} aria-hidden="true">↗</b>
					</article>
				))}
			</div>
		</section>

		<section className="bg-[#f5f4f7] px-[max(48px,calc((100vw-1160px)/2))] py-[90px] pb-[100px] text-[#10161d] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="branding-benefits-title">
			<SectionTitle className="mb-7 max-[767px]:mb-5"><span>05</span> / Why branding</SectionTitle><h2 className="mb-[54px]  max-w-[900px] text-[72px] leading-[1.04] max-[767px]:mt-6 max-[767px]:mb-8 max-[767px]:text-[42px]" id="branding-benefits-title">Attention is easy.<br />Credibility takes work.</h2>
			<div className="grid grid-cols-3 border-y border-[#10161d]/[0.18] max-[767px]:grid-cols-1">{brandingBenefits.map(([label, title, description]) => 
			<article className="relative flex min-h-[210px] flex-col justify-between border-r border-[#10161d]/[0.16] p-6 last:border-r-0 max-[767px]:min-h-40 max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:p-[18px] max-[767px]:last:border-b-0" key={label}>
				<span className="font-mono text-[10px]  text-violet">{label}</span>
				<div><h3 className="mb-[10px] text-[19px]">{title}</h3>
				<p className="m-0 max-w-[240px] text-[15px] leading-[1.6] text-[#3B4452]">{description}</p>
				</div><i className="absolute right-6 bottom-4 h-7 w-7 rotate-45 border border-[#10161d]/[0.18]" aria-hidden="true" /></article>)}
				</div>
		</section>

		<section className="relative flex min-h-[520px] flex-col justify-center overflow-hidden bg-[#0d151d] px-[max(48px,calc((100vw-1320px)/2))] py-[82px] text-[#f8f8f7] max-[767px]:min-h-[440px] max-[767px]:px-5 max-[767px]:py-[68px]" aria-labelledby="branding-cta-title">
			<SectionTitle className="relative z-[1] mb-7 max-[767px]:mb-5"> Start here</SectionTitle>
			<h2 className="relative z-[1] mb-[18px] text-[68px] leading-[1.03] max-[767px]:text-[44px]" id="branding-cta-title">Have a story worth<br />
			<span className="text-[#bd00f2]">amplifying?</span>
			</h2><p className="relative z-[1] mb-[22px] max-w-[430px] text-[18px] leading-[1.7] text-[#B8C1CC]">Let's turn it into something people notice, trust and remember.</p>
			<Link className="relative z-[1] inline-flex min-h-[45px] items-center gap-[14px] bg-[#f8f8f7] px-[17px] text-[11px] font-bold text-[#101116] no-underline transition-all duration-200 max-[767px]:text-[10px]" to="/contact">Talk to mDNA <span aria-hidden="true">↗</span>
			</Link>
			<div className="absolute top-[-100px] right-[18%] h-[300px] w-[300px] rotate-45 border border-[#bd00f2]/[0.35]" />
		</section>
		<ToolsSection tools={BrandingData.tools} />
	</div>
}
