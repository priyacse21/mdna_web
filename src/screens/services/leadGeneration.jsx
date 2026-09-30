import './services.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { accountNodes, leadMethods, leadOutcomes, leadPathway } from './data/serviceData'
import { leadGenerationData } from './data/toolsCatlog'
import ToolsSection from './common/ToolSection/Toolsection'

export default function LeadGeneration() {
	const [activeMethod, setActiveMethod] = useState(0)
	const selectedMethod = leadMethods[activeMethod]

	return <main className="lead-page">
		<section className="lead-hero dark-section" aria-labelledby="lead-title">
			<div className="lead-hero-copy">
				<p className="eyebrow"><span>01</span> / Lead generation</p>
				<h1 id="lead-title">Find the<br />right buyers.<br /><span>Start the right conversations.</span></h1>
				<p className="lead-hero-description">Identify ideal buyers, reach them through targeted channels and create a more focused path to sales-ready conversations.</p>
				<div className="button-row">
					<Link className="button button-primary" to="/contact">Talk to us <span aria-hidden="true">↗</span></Link>
					<a className="button button-outline" href="#lead-system">Explore the system <span aria-hidden="true">↓</span></a>
				</div>
			</div>
			<div className="lead-hero-visual" aria-label="A visual map of targeted conversations">
				<span className="lead-hero-side-label">TARGET / MESSAGE / PIPELINE</span>
				<div className="lead-hero-crosshair" />
				<div className="lead-hero-orbit lead-hero-orbit-outer" />
				<div className="lead-hero-orbit lead-hero-orbit-middle" />
				<div className="lead-hero-orbit lead-hero-orbit-inner" />
				<span className="lead-orbit-point lead-orbit-point-one" />
				<span className="lead-orbit-point lead-orbit-point-two" />
				<span className="lead-orbit-point lead-orbit-point-three" />
				<span className="lead-orbit-point lead-orbit-point-four" />
				<span className="lead-orbit-point lead-orbit-point-five" />
				<span className="lead-hero-status">01 / TARGET IN FOCUS</span>
			</div>
		</section>

		<section className="lead-opportunity light-section" aria-labelledby="lead-opportunity-title">
			<p className="eyebrow"><span>02</span> / The opportunity</p>
			<div className="lead-opportunity-content">
				<h2 id="lead-opportunity-title">More outreach doesn't automatically mean <span>more opportunity.</span></h2>
				<div className="lead-opportunity-detail">
					<p>Lead generation starts with knowing who you want to reach, then choosing the channels and messages that make those buyers worth pursuing.</p>
					<p className="lead-micro-label">TARGET / CHANNEL / MESSAGE / CONVERSATION<br />BUILD FOCUS BEFORE ADDING VOLUME.</p>
				</div>
			</div>
		</section>

		<section className="lead-system-section dark-section" id="lead-system" aria-labelledby="lead-system-title">
			<div className="lead-section-heading">
				<div>
					<p className="eyebrow"><span>03</span> / The lead generation system</p>
					<h2 id="lead-system-title">Three ways to move from target to conversation.</h2>
				</div>
				<p>Choose the mechanism that fits the problem. See what it does, what it changes and where the next conversation starts.</p>
			</div>
			<div className="lead-methods" aria-label="Lead generation methods">
				<div className="lead-method-list" role="group" aria-label="Select a lead generation method">
					{leadMethods.map((method, index) => <button className={`lead-method-button${index === activeMethod ? ' active' : ''}`} type="button" key={method.number} onClick={() => setActiveMethod(index)} aria-pressed={index === activeMethod}>
						<span>{method.number}</span><strong>{method.name}</strong><b aria-hidden="true">+</b>
					</button>)}
				</div>
				<div className="lead-method-panel" aria-live="polite">
					<span className="lead-panel-index">{selectedMethod.number} / 03</span>
					<span className="lead-panel-label">LEAD GENERATION / SERVICE SYSTEM</span>
					<div className="lead-method-detail">
						<h3>{selectedMethod.name}</h3>
						<p>{selectedMethod.description}</p>
						<div className="lead-impact"><span>Impact</span><p>{selectedMethod.impact}</p></div>
						<Link className="button button-outline" to="/contact">Talk through your pipeline <span aria-hidden="true">↗</span></Link>
					</div>
					<span className="lead-panel-foot">mDNA / LG / {selectedMethod.number}</span>
					<span className="lead-panel-coordinate">TARGET · MESSAGE · CONVERSATION</span>
					<div className="lead-panel-orbit" />
				</div>
			</div>
		</section>

		<section className="lead-pathway light-section" aria-labelledby="lead-pathway-title">
			<div className="lead-pathway-intro">
				<p className="eyebrow"><span>04</span> / The pathway</p>
				<div>
					<h2 id="lead-pathway-title">From market to a working pipeline.</h2>
					<p>The service components can work independently or as part of a connected lead generation system: identify the buyers, reach them with targeted outreach and work from researched decision-maker lists.</p>
				</div>
			</div>
			<div className="lead-pathway-steps">
				{leadPathway.map(([number, title, description, label], index) => <article className={`lead-pathway-step${index === 0 ? ' current' : ''}`} key={number}>
					<span className="lead-step-diamond"><b>{number}</b></span>
					<h3>{title}</h3>
					<p>{description}</p>
					<span className="lead-step-label">{label}</span>
				</article>)}
			</div>
		</section>

		<section className="lead-targeting light-section" aria-labelledby="lead-targeting-title">
			<div className="lead-targeting-heading">
				<div>
					<p className="eyebrow"><span>05</span> / Signature interaction</p>
					<h2 id="lead-targeting-title">The account targeting board.</h2>
				</div>
				<p>Lead generation is not a list of names. It is a system for deciding who deserves attention, then connecting the right signals.</p>
			</div>
			<div className="lead-target-map" role="img" aria-label="Five priority account signals connected around a focus account">
				<span className="lead-map-label">ACCOUNT MAP / LIVE VIEW<br />SELECT A NODE</span>
				<span className="lead-map-axis lead-map-axis-x" />
				<span className="lead-map-axis lead-map-axis-y" />
				<span className="lead-map-link lead-map-link-one" />
				<span className="lead-map-link lead-map-link-two" />
				<span className="lead-map-link lead-map-link-three" />
				{accountNodes.map(([label, name, position]) => <div className={`lead-account-node ${position}`} key={label}><small>{label}</small><strong>{name}</strong><i /></div>)}
				<div className="lead-map-focus"><span>FOCUS</span></div>
				<span className="lead-map-status">STATUS: <b>FOCUS ACTIVE</b></span>
			</div>
		</section>

		<section className="lead-outcomes light-section" aria-labelledby="lead-outcomes-title">
			<p className="eyebrow"><span>06</span> / What changes</p>
			<h2 id="lead-outcomes-title">Turn prospecting into a more focused system.</h2>
			<div className="lead-outcome-grid">
				{leadOutcomes.map(([label, title, description]) => <article className="lead-outcome" key={label}>
					<span>{label}</span>
					<div><h3>{title}</h3><p>{description}</p></div>
					<i aria-hidden="true" />
				</article>)}
			</div>
		</section>

		<section className="lead-cta dark-section" aria-labelledby="lead-cta-title">
			<p className="eyebrow"><span>07</span> / Start here</p>
			<h2 id="lead-cta-title">Know who you want to reach?<br /><span>Let's build the path.</span></h2>
			<p>Tell us what you are trying to solve. We’ll help identify the right starting point for your lead generation system.</p>
			<Link className="button button-primary" to="/contact">Talk to mDNA <span aria-hidden="true">↗</span></Link>
			<div className="lead-cta-orbit" />
		</section>

      <ToolsSection tools={leadGenerationData.tools} />
	</main>
}
