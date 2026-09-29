import './services.css'
import { Link } from 'react-router-dom'
import { performancePlatforms, performanceServices, performanceStages } from './data/serviceData'


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
			{performanceServices.map(([number, name, description, impact, action, prefill]) => <article className="performance-service-row" key={number}>
				<span className="performance-service-number">{number}</span>
				<div className="performance-service-info"><h2>{name}</h2><p>{description}</p></div>
				<div className="performance-service-result"><span>Impact</span><p>{impact}</p><Link to={prefill ? `/contact?service=${encodeURIComponent(prefill)}` : '/contact'}>{action}<b aria-hidden="true">↗</b></Link></div>
			</article>)}
		</section>

		<section className="performance-tools light-section" aria-labelledby="performance-tools-title">
			<p className="eyebrow">Tools</p>
			<div><h2 id="performance-tools-title">Built with the platforms teams already use.</h2><ul>{performancePlatforms.map((platform) => <li key={platform}>{platform}</li>)}</ul></div>
		</section>

		<section className="performance-loop light-section" aria-labelledby="performance-loop-title">
			<p className="eyebrow">The system</p>
			<div className="performance-loop-heading"><h2 id="performance-loop-title">Performance is not a channel.<br /><span>It is a feedback loop.</span></h2><Link to="/contact">Talk to us <span aria-hidden="true">↗</span></Link></div>
			<div className="performance-stage-grid">{performanceStages.map(([number, title, description]) => <article key={number}><span>{number} / {title}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
		</section>

		<section className="performance-cta dark-section" aria-labelledby="performance-cta-title">
			<p className="eyebrow"><span>06</span> / Performance marketing</p>
			<div><h2 id="performance-cta-title">Spend with purpose.<br /><span>Learn from every click.</span></h2><p>Bring acquisition, conversion and measurement together in a performance system built to keep improving.</p><Link className="button button-primary" to="/contact">Plan your next campaign <span aria-hidden="true">↗</span></Link></div>
		</section>
	</div>
}