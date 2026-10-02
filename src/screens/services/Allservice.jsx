import { Link } from 'react-router-dom'
import { servicePortfolios } from './data/serviceData'

export default function Allservice() {
	return <section className="min-h-[calc(100vh-68px)] bg-[#f2f0ea] px-[30px] py-[40px] sm:py-[60px] lg:py-[100px] max-[767px]:px-4" aria-labelledby="all-services-title">
		<header className="grid grid-cols-[1fr_320px] items-end gap-16 pb-12 max-[800px]:grid-cols-1 max-[800px]:gap-6 max-[767px]:gap-[18px] max-[767px]:pb-[30px]">
			<div>
				<p className="mb-[30px] font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-[#69737d]"><span className="text-[#b400e8]">03</span> / Services</p>
				<p className="mb-[14px] font-mono text-[9px] tracking-[0.1em] uppercase text-[#68727d]">One connected portfolio</p>
				<h1 className="m-0 text-[76px] leading-[1.02] tracking-normal font-bold normal-case max-[800px]:text-[60px] max-[767px]:text-[44px]" id="all-services-title">Marketing work,<br /><span className="text-[#b400e8]">built to connect.</span></h1>
			</div>
			<p className="mb-2 max-w-[320px] text-[15px] leading-[1.6] text-[#20232a] max-[800px]:max-w-[500px] max-[767px]:text-[13px]">Six service portfolios. Each built around a different growth problem, and designed to work with the others when the problem needs more than one answer.</p>
		</header>
		<div className="grid grid-cols-2 gap-[14px] border-t border-[#10161d]/[0.18] pt-4 max-[767px]:grid-cols-1 max-[767px]:gap-[10px]">
			{servicePortfolios.map(({ number, name, path, description, services }) => (
  <Link
    key={number}
    to={path}
    className="group flex min-h-[220px] flex-col items-start border border-[#10161d]/20 bg-white/[0.08] px-5 pt-5 pb-4 no-underline transition-[background-color,border-color] duration-200 hover:border-[#10161d]/[0.42] hover:bg-white/[0.38] max-[767px]:min-h-[200px] max-[767px]:px-4 max-[767px]:pt-[18px] max-[767px]:pb-[14px]"
  >
    <span className="font-mono text-[8px] text-[#68727d]">{number}</span>
    <h2 className="mt-7 mb-2 text-[30px] leading-[1.1] tracking-normal font-semibold normal-case text-[#111318] max-[767px]:mt-6 max-[767px]:text-2xl">{name}</h2>
    <p className="mb-2 max-w-[620px] text-[11px] leading-[1.55] text-[#242831]">{description}</p>
    <p className="mb-2 text-[9px] text-[#727982]">{services}</p>

    <div className="mt-auto inline-flex items-center gap-4 pt-3 font-mono text-[8px] text-[#111318] before:absolute before:mt-[-24px] before:w-20 before:border-t before:border-[#10161d]/20">
      <span>{name === 'Performance Marketing' ? 'Discuss the service' : 'Learn more'}</span>
      <b className="text-xs font-normal text-[#b400e8] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">↗</b>
    </div>
  </Link>
))}
		</div>
	</section>
}
