import NeedList from "../../components/common/NeedList/NeedList";
import "../../screens/home/home.css";
import {audits} from "./data/homedata";


export default function AuditSection() {
  return <section className="audit-section light-section">
    <div className="audit-copy"><p className="eyebrow">04 - Start with clarity</p><h2>Don't know<br />where to start?<br />Start with<br /><span>clarity.</span></h2><p>Understand what is working, what isn't and what deserves attention before you invest further.</p><div className="button-row"><a className="button button-primary" href="#contact">Book a Free Audit -&gt;</a><a className="button button-outline" href="#contact">Explore Audits &amp; Diagnostics -&gt;</a></div></div>
    <NeedList needs={audits} variant="simple" />
  </section>
}
