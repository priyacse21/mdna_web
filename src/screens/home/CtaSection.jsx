import { Link } from 'react-router-dom'

export default function CtaSection() {
  return <section className="cta-section dark-section" id="contact">
    <div className="cta-orbit" /><p className="eyebrow">07 - The next move</p><h2>Ready to make<br />your next<br /><span>marketing move?</span></h2><p>Start with the need that matters most - pipeline, visibility, credibility, clarity or capability.</p><div className="button-row"><Link className="button button-primary" to="/contact">Talk to mDNA -&gt;</Link><Link className="button button-outline" to="/services">Explore Services -&gt;</Link></div>
  </section>
}
