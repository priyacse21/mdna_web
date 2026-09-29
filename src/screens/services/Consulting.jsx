import './services.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NeedList from '../../components/common/NeedList/NeedList'

const offers = [
	['01', 'Marketing Function Setup & Handover', 'Build and hand over an in-house marketing division.', 'Fully operational, self-sufficient team.', 'Book a consulting call'],
	['02', 'Market Research', 'Use industry reports and competitive benchmarking to understand the market.', 'Data-backed decisions.', 'Request a research scope'],
	['03', 'Customer Insights & Segmentation', 'Analyse customer behaviour to define useful audience segments.', 'Targeted campaigns, not one-size-fits-all.', 'Book a segmentation review'],
]

const journey = [
	['01', 'Understand', 'Establish the marketing, market or customer context that needs to be clear.'],
	['02', 'Decide', 'Use research, benchmarking or customer insight to define the direction.'],
	['03', 'Build', 'Turn the chosen direction into a marketing function, framework or audience structure.'],
	['04', 'Move', 'Hand over the capability or use the result clarity to take the next action.'],
]

const lenses = [
	['Function', 'Build the function you can hand over.', 'Marketing Function Setup & Handover - build and hand over an in-house marketing division.', 'CAPABILITY'],
	['Market', 'Know the market before you move.', 'Market Research - use industry reports and competitive benchmarking to support decisions.', 'CONTEXT'],
	['Customer', 'Understand who you need to reach.', 'Customer Insights & Segmentation - define audience segments from customer behaviour.', 'AUDIENCE'],
	['Direction', 'Choose the next move with confidence.', 'Connect capability, evidence and customer understanding into a clear direction.', 'MOVE'],
]

const outcomes = [
	['01 / CAPABILITY', 'Self-sufficient.', 'Build and hand over a fully operational in-house marketing division.'],
	['02 / EVIDENCE', 'Data-backed.', 'Use industry reports and competitive benchmarking to support decisions.'],
	['03 / PRECISION', 'Targeted.', 'Define audience segments from behaviour so campaigns are not one-size-fits-all.'],
]

export default function Consulting() {
	const [activeOffer, setActiveOffer] = useState(0)
	const [activeLens, setActiveLens] = useState(0)
	const offer = offers[activeOffer]
	const lens = lenses[activeLens]

	return <div className="consulting-page">
		<section className="consulting-hero dark-section" aria-labelledby="consulting-title">
			<div className="consulting-hero-copy">
				<p className="eyebrow"><span />05 / Consulting</p>
				<h1 id="consulting-title">Make the<br />next move<br />with a clear <span>map.</span></h1>
				<p>Consulting that helps you build the marketing function, understand the market and define the audiences that matter.</p>
				<div className="button-row"><a className="button button-primary" href="#consulting-system">Explore consulting <span aria-hidden="true">↓</span></a><Link className="button button-outline" to="/contact">Book a consulting call <span aria-hidden="true">↗</span></Link></div>
				<div className="consulting-hero-index">{['Setup & handover', 'Research & benchmarking', 'Insights & segmentation'].map((label, index) => <div key={label}><span>0{index + 1} / {['Function', 'Market', 'Customer'][index]}</span><strong>{label}</strong></div>)}</div>
			</div>
			<div className="consulting-hero-map" role="img" aria-label="Illustrative consulting strategy map linking start, market, decision, audience, build and move">
				<div className="consulting-map-grid" />
				<div className="consulting-map-top"><span>STRATEGIC MAP / ILLUSTRATIVE</span><span>01–05 / ROUTES</span></div>
				<span className="consulting-route consulting-route-one" /><span className="consulting-route consulting-route-two" /><span className="consulting-route consulting-route-three" />
				{[['START', 'consulting-node-start'], ['MARKET', 'consulting-node-market'], ['DECIDE', 'consulting-node-decide'], ['AUDIENCE', 'consulting-node-audience'], ['BUILD', 'consulting-node-build'], ['MOVE', 'consulting-node-move']].map(([label, position]) => <span className={`consulting-map-node ${position}`} key={label}><i />{label}</span>)}
				<div className="consulting-map-current"><span>CURRENT VIEW</span><strong>{lens[1]}</strong><small>ROUTES / INPUTS / NEXT ACTION</small></div>
				<div className="consulting-map-compass"><i /></div>
			</div>
		</section>

		<section className="consulting-opportunity light-section" aria-labelledby="consulting-opportunity-title">
			<p className="eyebrow"><span />The opportunity</p>
			<div className="consulting-opportunity-content"><h2 id="consulting-opportunity-title">Good decisions need more than <span>more activity.</span></h2>
				<div className="consulting-opportunity-grid">
					<article><span>01 / FUNCTION</span><h3>Build the capability.</h3><p>A marketing function can be built and handed over as a fully operational, self-sufficient team.</p></article>
					<article><span>02 / MARKET</span><h3>Know the context.</h3><p>Industry reports and competitive benchmarking provide a basis for data-backed decisions.</p></article>
					<article><span>03 / CUSTOMER</span><h3>See the segments.</h3><p>Customer behaviour can be analysed to define audience segments for more targeted campaigns.</p></article>
				</div>
			</div>
		</section>

		<section className="consulting-system dark-section" id="consulting-system" aria-labelledby="consulting-system-title">
			<div className="consulting-section-heading"><div><p className="eyebrow"><span />01 / The service system</p><h2 id="consulting-system-title">Three ways to turn insight into decision.</h2></div><p>The consulting offer is built around the practical questions behind marketing capability, market understanding and customer focus.</p></div>
			<NeedList
				className="consulting-offer-list"
				needs={offers.map(([, title, description, impact]) => ({ title, description, impact }))}
				variant="interactive"
				activeIndex={activeOffer}
				onSelect={setActiveOffer}
				accentColor="var(--violet)"
				ariaLabel="Choose a consulting service"
			/>
			<div className="consulting-offer-active" aria-live="polite"><span>{offer[0]} / 03</span><h3>{offer[1]}</h3><p>{offer[2]}</p><strong>{offer[3]}</strong><Link to="/contact">{offer[4]} <span aria-hidden="true">↗</span></Link></div>
		</section>

		<section className="consulting-journey light-section" aria-labelledby="consulting-journey-title">
			<p className="eyebrow"><span />The journey</p><h2 id="consulting-journey-title">Understand.<br /><span>Decide. Build. Move.</span></h2>
			<div className="consulting-journey-grid">{journey.map(([number, title, description], index) => <article className={index === 0 ? 'current' : ''} key={number}><span className="consulting-journey-marker"><b>{number}</b></span><div><span>{number} / {['Understand', 'Decide', 'Build', 'Move'][index]}</span><h3>{title}</h3><p>{description}</p></div></article>)}</div>
		</section>

		<section className="consulting-lens light-section" aria-labelledby="consulting-lens-title">
			<div className="consulting-lens-heading"><div><p className="eyebrow"><span />02 / Signature interaction</p><h2 id="consulting-lens-title">Change the question.<br />Change the route.</h2></div><p>Use the map to explore the consulting lens that matches the decision in front of you.</p></div>
			<div className="consulting-lens-board">
				<div className="consulting-lens-tabs" role="group" aria-label="Choose a consulting lens">{lenses.map(([name], index) => <button className={index === activeLens ? 'active' : ''} type="button" key={name} onClick={() => setActiveLens(index)} aria-pressed={index === activeLens}><span>0{index + 1}</span>{name}</button>)}</div>
				<div className="consulting-lens-map" aria-live="polite"><span className="consulting-lens-label">LENS / 0{activeLens + 1}</span><span className="consulting-lens-grid" />
					<i className="consulting-lens-line consulting-lens-line-one" /><i className="consulting-lens-line consulting-lens-line-two" /><i className="consulting-lens-line consulting-lens-line-three" />
					<span className="consulting-lens-point consulting-lens-point-one"><b />{lens[3]}</span><span className="consulting-lens-point consulting-lens-point-two"><b />CHOICE</span><span className="consulting-lens-point consulting-lens-point-three"><b />CONTEXT</span><span className="consulting-lens-point consulting-lens-point-four"><b />MOVE</span>
					<div className="consulting-lens-summary"><span>{lens[0].toUpperCase()} / LENS</span><h3>{lens[1]}</h3><p>{lens[2]}</p></div><span className="consulting-lens-note">MODEL / ILLUSTRATIVE MAP - NO LIVE DATA</span>
				</div>
			</div>
		</section>

		<section className="consulting-outcomes dark-section" aria-labelledby="consulting-outcomes-title">
			<div className="consulting-section-heading"><h2 id="consulting-outcomes-title">Clarify the choices that come next.</h2><p>The consulting offer connects capability, evidence and audience understanding to practical business decisions.</p></div>
			<div className="consulting-outcome-grid">{outcomes.map(([label, title, description]) => <article key={label}><span>{label}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
		</section>

		<section className="consulting-cta dark-section" aria-labelledby="consulting-cta-title">
			<p className="eyebrow"><span />05 / Consulting</p><h2 id="consulting-cta-title">Ready to turn<br />uncertainty into a<br /><span>route?</span></h2><p>Book a consulting call, request a research scope or book a segmentation review.</p><Link className="button button-primary" to="/contact">Talk to mDNA <span aria-hidden="true">↗</span></Link><div className="consulting-cta-mark" />
		</section>
	</div>
}
