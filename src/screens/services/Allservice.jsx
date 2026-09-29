import './services.css'
import { Link } from 'react-router-dom'

const servicePortfolios = [
	{
		number: '01',
		name: 'Lead Generation',
		path: '/services/lead-generation',
		description: 'Build a focused path from ideal accounts to sales-ready conversations.',
		services: 'ABM, cold email outreach and researched lead lists.',
	},
	{
		number: '02',
		name: 'Content, Search & AI Visibility',
		path: '/services/content-search-ai',
		description: 'Make the brand discoverable across search, AI, email and social.',
		services: 'Content marketing, SEO & GEO, email, targeted campaigns and organic social.',
	},
	{
		number: '03',
		name: 'Branding',
		path: '/services/branding',
		description: 'Build attention, authority and a recognisable presence around the brand.',
		services: 'Webinars, video, podcasts and rapid-response PR.',
	},
	{
		number: '04',
		name: 'Audits & Diagnostics',
		path: '/services/audits',
		description: 'Find what is working, what is leaking value and what needs attention next.',
		services: 'Marketing setup, channel, AI-readiness and website audits.',
	},
	{
		number: '05',
		name: 'Consulting',
		path: '/services/consulting',
		description: 'Bring structure to marketing capability, market understanding and customer focus.',
		services: 'Function setup, market research and customer segmentation.',
	},
	{
		number: '06',
		name: 'Performance Marketing',
		path: '/services/performance-marketing',
		description: 'Turn paid media and conversion systems into measurable growth.',
		services: 'Search, social, programmatic, CRO, tracking, creative and partnerships.',
	},
]

export default function Allservice() {
	return <section className="all-services" aria-labelledby="all-services-title">
		<header className="all-services-heading">
			<div>
				<p className="eyebrow"><span>03</span> / Services</p>
				<p className="all-services-kicker">One connected portfolio</p>
				<h1 id="all-services-title">Marketing work,<br /><span>built to connect.</span></h1>
			</div>
			<p className="all-services-intro">Six service portfolios. Each built around a different growth problem, and designed to work with the others when the problem needs more than one answer.</p>
		</header>
		<div className="all-services-grid">
			{servicePortfolios.map(({ number, name, path, description, services }) => <article className="all-services-card" key={number}>
				<span className="all-services-number">{number}</span>
				<h2>{name}</h2>
				<p>{description}</p>
				<p className="all-services-listing">{services}</p>
				<Link to={path} aria-label={`${name === 'Performance Marketing' ? 'Discuss' : 'Learn more about'} ${name}`}>
					<span>{name === 'Performance Marketing' ? 'Discuss the service' : 'Learn more'}</span>
					<b aria-hidden="true">↗</b>
				</Link>
			</article>)}
		</div>
	</section>
}
