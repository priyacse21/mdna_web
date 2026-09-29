import './services.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NeedList from '../../components/common/NeedList/NeedList'
import { contentCapabilities, contentHeroNeeds, contentImpacts, contentProcess, contentProblemNeeds, visibilityModes } from './data/serviceData'


export default function ContentSearchAI() {
	const [activeCapability, setActiveCapability] = useState(0)
	const [activeVisibility, setActiveVisibility] = useState(0)
	const capability = contentCapabilities[activeCapability]
	const visibility = visibilityModes[activeVisibility]

	return <div className="content-ai-page">
		<section className="content-ai-hero dark-section" aria-labelledby="content-ai-title">
			<div className="content-ai-hero-copy">
				<p className="eyebrow"><span>02</span> / Content, search &amp; AI visibility</p>
				<p className="content-ai-kicker">mDNA / VISIBILITY SYSTEMS</p>
				<h1 id="content-ai-title">Be found.<br />Be <span>seen.</span><br />Be remembered.</h1>
				<p className="content-ai-description">Content, search and AI visibility services that help your brand appear where buyers look, from search results to AI recommendations and the channels that keep you top-of-mind.</p>
				<div className="button-row">
					<Link className="button button-primary" to="/contact">Talk to us <span aria-hidden="true">↗</span></Link>
					<a className="button button-outline" href="#visibility-system">Explore the service <span aria-hidden="true">↓</span></a>
				</div>
			</div>
			<div className="content-ai-hero-visual" aria-label="Content, search and AI visibility signals">
				<NeedList needs={contentHeroNeeds} title="What should we know about this category?" />
			</div>
		</section>

		<section className="content-ai-problem light-section" aria-labelledby="content-ai-problem-title">
			<p className="eyebrow"><span>01</span> / The problem</p>
			<div className="content-ai-problem-content">
				<h2 id="content-ai-problem-title">Good marketing doesn't happen by <span>accident.</span></h2>
				<div className="content-ai-problem-detail">
					<p>Visibility is no longer one channel. Buyers discover brands through search, AI answers, paid media, email and social content. The work has to connect across those surfaces.</p>
					<NeedList className="content-ai-problem-list" needs={contentProblemNeeds} />
				</div>
			</div>
		</section>

		<section className="content-ai-system dark-section" id="visibility-system" aria-labelledby="content-ai-system-title">
			<div className="content-ai-system-heading">
				<div><p className="eyebrow"><span>03</span> / Visibility system</p><h2 id="content-ai-system-title">One visibility system. Six ways to activate it.</h2></div>
				<p>Explore the approved mDNA service components. Select a capability to see what it is, the client impact it defines and its next-step action.</p>
			</div>
			<div className="content-ai-capabilities">
				<div className="content-ai-capability-list" role="group" aria-label="Select a visibility capability">
					{contentCapabilities.map(([number, name], index) => <button className={`content-ai-capability${index === activeCapability ? ' active' : ''}`} type="button" key={number} onClick={() => setActiveCapability(index)} aria-pressed={index === activeCapability}><span>{number}</span><strong>{name}</strong><b aria-hidden="true">{index === activeCapability ? '×' : '+'}</b></button>)}
				</div>
				<div className="content-ai-capability-panel" aria-live="polite">
					<span className="content-ai-panel-index">{capability[0]} / 06</span><span className="content-ai-panel-code">VIS / CONTENT</span>
					<div><h3>{capability[1]}</h3><p>{capability[2]}</p><div className="content-ai-panel-impact"><span>Impact for client</span><p>{capability[3]}</p></div></div>
					<Link to="/contact" className="content-ai-panel-link">Get a content plan <span aria-hidden="true">↗</span></Link>
					<span className="content-ai-panel-mark" />
				</div>
			</div>
		</section>

		<section className="content-ai-process light-section" aria-labelledby="content-ai-process-title">
			<div className="content-ai-process-intro"><p className="eyebrow"><span>04</span> / Process</p><h2 id="content-ai-process-title">From useful ideas to sustained visibility.</h2></div>
			<div className="content-ai-process-list">
				{contentProcess.map(([number, title, description], index) => <article className={`content-ai-process-step${index === 0 ? ' current' : ''}`} key={number}><span className="content-ai-process-number">{number}</span><div><span className="content-ai-process-label">{['CREATE', 'OPTIMISE', 'ACTIVATE', 'SUSTAIN'][index]}</span><h3>{title}</h3><p>{description}</p></div></article>)}
			</div>
		</section>

		<section className="content-ai-visibility light-section" aria-labelledby="content-ai-visibility-title">
			<div className="content-ai-visibility-heading"><div><p className="eyebrow"><span>05</span> / Signature interaction</p><h2 id="content-ai-visibility-title">See the visibility layer.</h2></div><p>This is a visual model, not a live search result. Switch the signal to see how the same marketing system can surface through different routes.</p></div>
			<div className="content-ai-visibility-demo">
				<div className="content-ai-visibility-tabs" role="group" aria-label="Choose a visibility channel">{visibilityModes.map(([name, state], index) => <button type="button" className={index === activeVisibility ? 'active' : ''} key={name} onClick={() => setActiveVisibility(index)} aria-pressed={index === activeVisibility}><span>{name}</span><small>{state}</small></button>)}</div>
				<div className="content-ai-visibility-panel" aria-live="polite"><div className="content-ai-visibility-meta"><span>{visibility[0].toUpperCase()} SURFACE</span><span>MODEL / ILLUSTRATIVE</span></div><div className="content-ai-visibility-main"><h3>{visibility[2]}</h3><p>{visibility[3]}</p><div className="content-ai-signal-meter"><i style={{ width: `${34 + activeVisibility * 14}%` }} /></div><div className="content-ai-signal-rows">{visibility[4].map((signal, index) => <div key={signal}><span>{['SIGNAL', 'ROUTE', 'ROLE'][index]}</span><strong>{signal}</strong><small>{String(index + 1).padStart(2, '0')}</small></div>)}</div></div><span className="content-ai-visibility-orbit" /></div>
			</div>
		</section>

		<section className="content-ai-impact light-section" aria-labelledby="content-ai-impact-title">
			<p className="eyebrow"><span>06</span> / Business impact</p><h2 id="content-ai-impact-title">Visibility that has a job to do.</h2>
			<div className="content-ai-impact-list">{contentImpacts.map(([number, label, title, description]) => <article key={number}><span>{number}</span><strong>{label}</strong><h3>{title}</h3><p>{description}</p></article>)}</div>
		</section>

		<section className="content-ai-cta dark-section" aria-labelledby="content-ai-cta-title">
			<p className="eyebrow"><span>07</span> / Start here</p><h2 id="content-ai-cta-title">Ready to be found?<br /><span>Let's make the signal clear.</span></h2><p>Start with the visibility problem you need to solve. We can map the relevant content, search and channel work from there.</p><Link className="button button-primary" to="/contact">Talk to mDNA <span aria-hidden="true">↗</span></Link><div className="content-ai-cta-diamond" />
		</section>
	</div>
}
