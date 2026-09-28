import { useState } from 'react'
import { Link } from 'react-router-dom'

const capabilities = [
	['01', 'Content Marketing', 'Blogs, guides and thought-leadership content.', 'Build lasting inbound traffic with useful, relevant information.'],
	['02', 'SEO & GEO', 'Search engine and generative engine optimisation.', 'Help the brand get found through search and recommended by AI.'],
	['03', 'Paid Digital Advertising', 'Paid campaigns across the channels buyers use.', 'Put useful messages in front of the right audiences with control.'],
	['04', 'Email Marketing & Newsletters', 'Regular communication with the audiences you own.', 'Keep useful ideas moving between discovery and decision.'],
	['05', 'Targeted Marketing Campaigns', 'Connected campaigns built around a clear audience.', 'Bring content, channels and timing together around an objective.'],
	['06', 'Organic Social Media', 'Consistent organic publishing across social channels.', 'Extend the signal and keep the brand present in the conversation.'],
]

const visibilityModes = [
	['Search', 'INDEXED', 'Make useful information easier to find.', 'Content and SEO work together so relevant information has a stronger path into search discovery.', ['Content structure', 'Search discovery', 'Findability']],
	['AI', 'RECOMMENDED', 'Make the brand easier to understand.', 'Clear, well-structured expertise gives answer engines useful signals to interpret and reference.', ['Expertise signals', 'Answer inclusion', 'Brand context']],
	['Paid', 'ACTIVATED', 'Put the signal in front of the right audience.', 'Paid campaigns extend useful content to focused audiences and support timely discovery.', ['Audience focus', 'Campaign reach', 'Action signals']],
	['Owned', 'RETAINED', 'Stay useful after the first visit.', 'Email and owned channels bring interested audiences back to relevant ideas and next steps.', ['Subscriber value', 'Repeat visits', 'Ongoing relevance']],
]

const process = [
	['01', 'Create', 'Build useful content that answers real audience questions.'],
	['02', 'Optimise', 'Structure it for search discovery and generative answers.'],
	['03', 'Activate', 'Extend the signal through paid, email and social channels.'],
	['04', 'Sustain', 'Keep the brand visible with consistent, valuable publishing.'],
]

const impacts = [
	['01', 'DISCOVERY', 'Be easier to find.', 'Content and optimisation create lasting inbound traffic and make expertise visible across search.'],
	['02', 'DEMAND', 'Reach the right people.', 'Paid campaigns, email and targeted activity extend useful ideas to relevant audiences.'],
	['03', 'RECALL', 'Stay in the conversation.', 'Consistent owned and organic channels keep the brand familiar and useful over time.'],
]

export default function ContentSearchAI() {
	const [activeCapability, setActiveCapability] = useState(0)
	const [activeVisibility, setActiveVisibility] = useState(0)
	const capability = capabilities[activeCapability]
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
				<div className="content-ai-question"><i />What should we know about this category?</div>
				<div className="content-ai-signal-list">
					<div><span>01</span><strong>Structured content signal</strong><small>Useful, relevant information designed to build lasting inbound traffic.</small><b>CONTENT</b></div>
					<div><span>02</span><strong>Search + AI discoverability</strong><small>Classic SEO and Generative Engine Optimization working together.</small><b>SEO / GEO</b></div>
					<div><span>03</span><strong>Active distribution</strong><small>Paid, email, campaigns and organic social extend the signal.</small><b>CHANNELS</b></div>
				</div>
				<div className="content-ai-browser" aria-hidden="true"><span className="content-ai-browser-bar">mDNA <i /></span><span className="content-ai-browser-label">CONTENT, SEARCH &amp; AI VISIBILITY</span><strong>Be found.<br />Be <em>seen.</em><br />Be remembered.</strong></div>
				<span className="content-ai-visual-caption">MODEL / ILLUSTRATIVE</span>
			</div>
		</section>

		<section className="content-ai-problem light-section" aria-labelledby="content-ai-problem-title">
			<p className="eyebrow"><span>01</span> / The problem</p>
			<div className="content-ai-problem-content">
				<h2 id="content-ai-problem-title">Good marketing doesn't happen by <span>accident.</span></h2>
				<div className="content-ai-problem-detail">
					<p>Visibility is no longer one channel. Buyers discover brands through search, AI answers, paid media, email and social content. The work has to connect across those surfaces.</p>
					<div>{['Content needs a job beyond filling a calendar.', 'Search visibility now includes generative engines.', 'Distribution keeps useful ideas in circulation.'].map((point, index) => <p key={point}><span>{String(index + 1).padStart(2, '0')}</span>{point}</p>)}</div>
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
					{capabilities.map(([number, name], index) => <button className={`content-ai-capability${index === activeCapability ? ' active' : ''}`} type="button" key={number} onClick={() => setActiveCapability(index)} aria-pressed={index === activeCapability}><span>{number}</span><strong>{name}</strong><b aria-hidden="true">{index === activeCapability ? '×' : '+'}</b></button>)}
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
				{process.map(([number, title, description], index) => <article className={`content-ai-process-step${index === 0 ? ' current' : ''}`} key={number}><span className="content-ai-process-number">{number}</span><div><span className="content-ai-process-label">{['CREATE', 'OPTIMISE', 'ACTIVATE', 'SUSTAIN'][index]}</span><h3>{title}</h3><p>{description}</p></div></article>)}
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
			<div className="content-ai-impact-list">{impacts.map(([number, label, title, description]) => <article key={number}><span>{number}</span><strong>{label}</strong><h3>{title}</h3><p>{description}</p></article>)}</div>
		</section>

		<section className="content-ai-cta dark-section" aria-labelledby="content-ai-cta-title">
			<p className="eyebrow"><span>07</span> / Start here</p><h2 id="content-ai-cta-title">Ready to be found?<br /><span>Let's make the signal clear.</span></h2><p>Start with the visibility problem you need to solve. We can map the relevant content, search and channel work from there.</p><Link className="button button-primary" to="/contact">Talk to mDNA <span aria-hidden="true">↗</span></Link><div className="content-ai-cta-diamond" />
		</section>
	</div>
}
