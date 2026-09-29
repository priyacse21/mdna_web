import NeedList from "../../components/common/NeedList/NeedList";

const audits = [
  {
    title: "Marketing Setup Audit",
    description: "Full review of marketing operations.",
  },
  {
    title: "Channel Performance Audit",
    description: "Deep-dive into marketing channels and ROI.",
  },
  {
    title: "AI Readiness (GEO) Audit",
    description: "Assessment for AI visibility readiness.",
  },
  {
    title: "Website Audit",
    description: "Evaluate conversion, SEO and UX issues.",
  },
]

export default function AuditSection() {
  return <section className="audit-section light-section">
    <div className="audit-copy"><p className="eyebrow">04 - Start with clarity</p><h2>Don't know<br />where to start?<br />Start with<br /><span>clarity.</span></h2><p>Understand what is working, what isn't and what deserves attention before you invest further.</p><div className="button-row"><a className="button button-primary" href="#contact">Book a Free Audit -&gt;</a><a className="button button-outline" href="#contact">Explore Audits &amp; Diagnostics -&gt;</a></div></div>
    <NeedList needs={audits} variant="simple" />
  </section>
}
