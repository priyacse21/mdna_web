import { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
	['01', 'Webinars & Digital Events', 'Planning, promotion and hosting webinars and digital events.', 'Generates leads and positions teams as experts.', 'Plan a webinar'],
	['02', 'Video Production', 'Create useful video stories for the places your audience watches.', 'Makes complex ideas easier to understand and share.', 'Plan a video'],
	['03', 'Podcast Setup & Production', 'Develop and produce a podcast with a clear point of view.', 'Builds familiarity through a format audiences return to.', 'Start a podcast'],
	['06', 'Rapid Response PR', 'Respond to timely conversations with relevant expertise.', 'Helps brands earn attention when the moment matters.', 'Build a response plan'],
]

const journey = [
	['01', 'Create', 'Build a story worth sharing.'],
	['02', 'Distribute', 'Put it in front of relevant audiences.'],
	['03', 'Amplify', 'Extend its reach across digital channels.'],
	['04', 'Build trust', 'Turn attention into credibility over time.'],
]

const formats = [
	['01', 'Podcast', 'A considered conversation, made to travel.', 'format-podcast'],
	['02', 'Video', 'Useful stories with a human point of view.', 'format-video'],
	['03', 'Webinar', 'Expertise shared directly with an audience.', 'format-webinar'],
	['04', 'Community', 'A place for people to gather around an idea.', 'format-community'],
	['05', 'Reviews', 'Real voices that reinforce earned trust.', 'format-reviews'],
]

const benefits = [
	['01 / VISIBILITY', 'Be present.', 'Show up where relevant conversations happen.'],
	['02 / CREDIBILITY', 'Build proof.', 'Earn trust beyond paid advertising.'],
	['03 / DEMAND', 'Create movement.', 'Turn attention into meaningful business opportunities.'],
]

export default function Branding() {
	const [activeService, setActiveService] = useState(0)
	const service = services[activeService]

	return <div className="branding-page">
		<section className="branding-hero dark-section" aria-labelledby="branding-title">
			<div className="branding-hero-copy">
				<p className="eyebrow">mDNA / BRAND</p>
				<h1 id="branding-title">Make your<br />brand part of<br />the <span>conversation.</span></h1>
				<p>Branding that builds visibility, credibility and attention across the channels your audience already trusts.</p>
				<div className="button-row"><Link className="button button-primary" to="/contact">Talk to us <span aria-hidden="true">↗</span></Link><a className="button button-outline" href="#branding-system">Explore branding <span aria-hidden="true">↓</span></a></div>
			</div>
			<div className="branding-hero-visual" aria-label="A grid of brand and media touchpoints">
				<div className="branding-tile-grid">{Array.from({ length: 35 }, (_, index) => <span className={`branding-tile${[2, 8, 12, 17, 23, 29, 33].includes(index) ? ' highlighted' : ''}`} key={index} />)}</div>
				<div className="branding-mark" aria-hidden="true"><span>m</span><b>D</b><span>NA</span></div>
				<div className="branding-hero-steps"><span>STORY</span><span>AUDIENCE</span><span>PROOF</span><span>INFLUENCE</span></div>
				<span className="branding-hero-side">/ EVENTS / FORMAT / TRUST</span>
				<span className="branding-hero-caption">SCALE / TO / EXPLORE</span>
			</div>
		</section>

		<section className="branding-premise light-section" aria-labelledby="branding-premise-title">
			<p className="eyebrow"><span>01</span> / The premise</p>
			<div className="branding-premise-content"><h2 id="branding-premise-title">PR that moves beyond press releases.</h2><p>mDNA uses digital channels, content formats, communities and reputation platforms to help brands build visibility and credibility.</p></div>
		</section>

		<section className="branding-system dark-section" id="branding-system" aria-labelledby="branding-system-title">
			<div className="branding-section-heading"><div><p className="eyebrow"><span>02</span> / The service system</p><h2 id="branding-system-title">Four ways to create digital attention.</h2></div><p>Choose a format. See how it works. Move from attention to the next useful action.</p></div>
			<div className="branding-service-board">
				<div className="branding-service-list" role="group" aria-label="Choose a branding service">{services.map(([number, name], index) => <button className={`branding-service-option${index === activeService ? ' active' : ''}`} type="button" key={number} onClick={() => setActiveService(index)} aria-pressed={index === activeService}><span>{number}</span><strong>{name}</strong><b aria-hidden="true">{index === activeService ? '×' : '+'}</b></button>)}</div>
				<div className="branding-service-panel" aria-live="polite"><span className="branding-panel-count">{service[0]} / 04</span><span className="branding-panel-label">BRANDING SERVICES</span><div><h3>{service[1]}</h3><p>{service[2]}</p><div className="branding-panel-impact"><span>Impact</span><p>{service[3]}</p></div><Link to="/contact" className="button button-outline">{service[4]} <span aria-hidden="true">↗</span></Link></div><span className="branding-panel-diamond" /></div>
			</div>
		</section>

		<section className="branding-journey light-section" aria-labelledby="branding-journey-title">
			<p className="eyebrow"><span>03</span> / The journey</p>
			<h2 id="branding-journey-title">From story to influence.</h2>
			<div className="branding-journey-list">{journey.map(([number, title, description], index) => <article className={index === 0 ? 'current' : ''} key={number}><span><b>{number}</b></span><div><strong>{title}</strong><p>{description}</p></div></article>)}</div>
		</section>

		<section className="branding-formats light-section" aria-labelledby="branding-formats-title">
			<div className="branding-formats-heading"><div><p className="eyebrow"><span>04</span> / The newsroom</p><h2 id="branding-formats-title">One story.<br /><span>Many signals.</span></h2></div><p>Different formats. One connected brand presence.</p></div>
			<div className="branding-format-grid">{formats.map(([number, name, description, style]) => <article className={`branding-format-card ${style}`} key={number}><span>{`FORMAT ${number}`}</span><h3>{name}</h3><p>{description}</p><b aria-hidden="true">↗</b></article>)}</div>
		</section>

		<section className="branding-benefits light-section" aria-labelledby="branding-benefits-title">
			<p className="eyebrow"><span>05</span> / Why branding</p><h2 id="branding-benefits-title">Attention is easy.<br />Credibility takes work.</h2>
			<div className="branding-benefit-grid">{benefits.map(([label, title, description]) => <article key={label}><span>{label}</span><div><h3>{title}</h3><p>{description}</p></div><i aria-hidden="true" /></article>)}</div>
		</section>

		<section className="branding-cta dark-section" aria-labelledby="branding-cta-title">
			<p className="eyebrow"><span>06</span> / Start here</p><h2 id="branding-cta-title">Have a story worth<br /><span>amplifying?</span></h2><p>Let's turn it into something people notice, trust and remember.</p><Link className="button button-primary" to="/contact">Talk to mDNA <span aria-hidden="true">↗</span></Link><div className="branding-cta-diamond" />
		</section>
	</div>
}
