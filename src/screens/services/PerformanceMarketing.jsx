import './services.css'
import { Link } from 'react-router-dom'

const services = [
	['01', 'Paid Search Advertising (PPC)', 'Manage search engine ads to capture high-intent users.', 'Get in front of people actively searching for what you offer, right when they are ready to buy.', 'Request a PPC audit', 'Paid Search Advertising (PPC)'],
	['02', 'Paid Social Campaigns', 'Run targeted video and image ads across Meta, LinkedIn and other social platforms.', 'Reach the right audience with the right message, wherever they are already scrolling.', 'Get a paid social plan', 'Paid Social Campaigns'],
	['03', 'Display & Programmatic Advertising', 'Place automated banner and video ads to retarget visitors or reach new, similar audiences.', 'Stay visible to people who have shown interest, and find more people like them.', 'Request a retargeting plan'],
	['04', 'Conversion Rate Optimisation (CRO)', 'Test and improve landing pages, forms and website layouts.', 'Turn more existing traffic into paying customers without spending more on ads.', 'Book a CRO audit', 'Conversion Rate Optimization (CRO)'],
	['05', 'Analytics & Tracking Setup', 'Implement reliable analytics, server-side tracking and conversion APIs.', 'Know exactly what your marketing spend is returning.', 'Book a tracking audit'],
	['06', 'Creative Asset Production', 'Design ad copy, banners and video variations built to test and improve engagement.', 'Create ads that are made to be tested and improved, not just published once.', 'Request a creative sample'],
	['07', 'Affiliate & Partner Marketing', 'Set up commission-based networks with publishers, blogs and creators.', 'Pay for performance and acquire customers at a predictable, performance-based cost.', 'Explore affiliate options'],
]

const stages = [
	['01', 'Invest', 'Put budget behind the channels and audiences with the strongest potential.'],
	['02', 'Measure', 'Track the actions that connect campaign activity to business outcomes.'],
	['03', 'Improve', 'Use what the data reveals to refine spend, creative and conversion.'],
]

const platforms = ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'YouTube', 'Google Analytics 4', 'Google Tag Manager']

export default function PerformanceMarketing() {
	return <div className="performance-page">
		<section className="performance-intro light-section" aria-labelledby="performance-title">
			<p className="eyebrow"><span>06</span> / Performance marketing</p>
			<div className="performance-intro-heading">
				<div><p className="performance-kicker">Performance systems</p><h1 id="performance-title">Make every<br /><span>click accountable.</span></h1></div>
				<p>Paid acquisition, conversion and measurement working together so performance can be tested, understood and improved.</p>
			</div>
		</section>

		<section className="performance-services light-section" aria-label="Performance marketing services">
			{services.map(([number, name, description, impact, action, prefill]) => <article className="performance-service-row" key={number}>
				<span className="performance-service-number">{number}</span>
				<div className="performance-service-info"><h2>{name}</h2><p>{description}</p></div>
				<div className="performance-service-result"><span>Impact</span><p>{impact}</p><Link to={prefill ? `/contact?service=${encodeURIComponent(prefill)}` : '/contact'}>{action}<b aria-hidden="true">↗</b></Link></div>
			</article>)}
		</section>

		<section className="performance-tools light-section" aria-labelledby="performance-tools-title">
			<p className="eyebrow">Tools</p>
			<div><h2 id="performance-tools-title">Built with the platforms teams already use.</h2><ul>{platforms.map((platform) => <li key={platform}>{platform}</li>)}</ul></div>
		</section>

		<section className="performance-loop light-section" aria-labelledby="performance-loop-title">
			<p className="eyebrow">The system</p>
			<div className="performance-loop-heading"><h2 id="performance-loop-title">Performance is not a channel.<br /><span>It is a feedback loop.</span></h2><Link to="/contact">Talk to us <span aria-hidden="true">↗</span></Link></div>
			<div className="performance-stage-grid">{stages.map(([number, title, description]) => <article key={number}><span>{number} / {title}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
		</section>

		<section className="performance-cta dark-section" aria-labelledby="performance-cta-title">
			<p className="eyebrow"><span>06</span> / Performance marketing</p>
			<div><h2 id="performance-cta-title">Spend with purpose.<br /><span>Learn from every click.</span></h2><p>Bring acquisition, conversion and measurement together in a performance system built to keep improving.</p><Link className="button button-primary" to="/contact">Plan your next campaign <span aria-hidden="true">↗</span></Link></div>
		</section>
	</div>
}