export default function Hero() {
  const nodes = [
    ['01', 'LEAD GENERATION', 'PIPELINE / CONVERSATIONS'],
    ['02', 'CONTENT, SEARCH & AI VISIBILITY', 'FOUND / SEEN / DISCOVERED'],
    ['03', 'DIGITAL PR', 'CREDIBILITY / REACH'],
    ['04', 'AUDITS & DIAGNOSTICS', 'CLARITY / PRIORITIES'],
    ['05', 'CONSULTING', 'CAPABILITY / DIRECTION'],
  ]

  return <section className="hero-section dark-section" aria-labelledby="home-title">
    <div className="hero-gridline" />
    <div className="hero-copy">
      <p className="eyebrow">mDNA.digital &nbsp; Marketing that moves business forward</p>
      <h1 id="home-title">Marketing<br />that moves<br /><span>business.</span></h1>
      <p className="hero-description">From qualified conversations and visibility to credibility, diagnosis and strategy - mDNA brings the right marketing moves together.</p>
      <div className="button-row"><a className="button button-primary" href="#system">Explore the mDNA System <span>↓</span></a><a className="button button-outline" href="#contact">Talk to Us <span>↗</span></a></div>
      <p className="micro-note"><i /> Five capabilities / one connected portfolio</p>
    </div>
    <div className="hero-system" aria-label="The mDNA system">
      <p className="system-label">SYSTEM / 00 - STARTING POINTS</p>
      <div className="hero-orbit"><div className="hero-diamond">m<span>D</span>NA</div></div>
      {nodes.map(([number, title, sub], index) => <div className={`hero-node node-${index + 1}`} key={number}><small>{number}</small><strong>{title}</strong><em>{sub}</em></div>)}
    </div>
    </section>
}
