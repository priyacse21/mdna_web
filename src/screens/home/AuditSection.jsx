const audits = [
  ['Marketing Setup Audit', 'Full review of marketing operations.'],
  ['Channel Performance Audit', 'Deep-dive into marketing channels and ROI.'],
  ['AI Readiness (GEO) Audit', 'Assessment for AI visibility readiness.'],
  ['Website Audit', 'Evaluate conversion, SEO and UX issues.'],
]

export default function AuditSection() {
  return <section className="audit-section light-section">
    <div className="audit-copy"><p className="eyebrow">04 - Start with clarity</p><h2>Don't know<br />where to start?<br />Start with<br /><span>clarity.</span></h2><p>Understand what is working, what isn't and what deserves attention before you invest further.</p><div className="button-row"><a className="button button-primary" href="#contact">Book a Free Audit -&gt;</a><a className="button button-outline" href="#contact">Explore Audits &amp; Diagnostics -&gt;</a></div></div>
    <div className="audit-list">{audits.map(([title, description], index) => <div key={title}><small>0{index + 1}</small><strong>{title}</strong><p>{description}</p></div>)}</div>
  </section>
}
