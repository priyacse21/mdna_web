import { Link } from 'react-router-dom'
import SectionTitle from '../../components/common/SectionTitle'
import { servicePortfolios } from './data/serviceData'

export default function Allservice() {
	return <section className="min-h-[calc(100vh-68px)] bg-[#f2f0ea] px-[30px] py-[40px] sm:py-[60px] lg:py-[100px] max-[767px]:px-4" aria-labelledby="all-services-title">
		<header className="grid grid-cols-[1fr_1fr] items-center gap-10 pb-12 max-[800px]:grid-cols-1 max-[800px]:gap-6 max-[767px]:gap-[18px] max-[767px]:pb-[30px]">
			<div>
				<SectionTitle className="mb-[30px]"> Services</SectionTitle>

				<h1 className="m-0 text-[76px] leading-[1.02] tracking-normal font-bold normal-case max-[800px]:text-[60px] max-[767px]:text-[44px]" id="all-services-title">Marketing work,<br /><span className="text-[#b400e8]">built to connect.</span></h1>
			</div>
			<p className="m-0 max-w-[600px] translate-y-12 text-[18px] leading-[1.6] text-left text-[#3B4452] max-[800px]:max-w-[500px] max-[757px]:text-[16px] whitespace-normal">
        Six service portfolios. Each built around a different growth problem, and designed to work with the others when the problem needs more than one answer.</p>

		</header>
		<div className="grid grid-cols-2 gap-[14px] border-t border-[#10161d]/[0.18] pt-4 max-[767px]:grid-cols-1 max-[767px]:gap-[10px]">
			{servicePortfolios.map(({ number, name, path, description, services }) => (
  <Link
    key={number}
    to={path}
    className="group flex min-h-[220px] flex-col items-start border border-[#10161d]/20 bg-white/[0.08] px-5 pt-5 pb-4 no-underline transition-[background-color,border-color] duration-200 hover:border-[#10161d]/[0.42] hover:bg-white/[0.38] max-[767px]:min-h-[200px] max-[767px]:px-4 max-[767px]:pt-[18px] max-[767px]:pb-[14px]"
  >
    <span className="font-mono text-[18px] text-violet">{number}</span>
    <h2 className="mt-7 mb-2 text-[30px] leading-[1.1] tracking-normal font-semibold normal-case text-[#111318] max-[767px]:mt-6 max-[767px]:text-2xl">{name}</h2>
    <p className="mb-2 max-w-[620px] text-[15px] leading-[1.55] text-[#0A0A0A]">{description}</p>
    <p className="mb-2 text-[15px] text-[#1C1C1C]">{services}</p>

    <div className="mt-auto inline-flex items-center gap-4 pt-3 font-mono text-[12px] text-[#0A0A0A] before:absolute before:mt-[-24px] before:w-20 before:border-t before:border-[#10161d]/20">
      <span>{name === 'Performance Marketing' ? 'Discuss the service' : 'Learn more'}</span>
      <b className="text-xs font-normal text-[#b400e8] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">↗</b>
    </div>
  </Link>
))}
		</div>
	</section>
}
