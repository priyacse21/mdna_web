
import "../../screens/home/home.css";
export default function ServicesOverview() {
  const services = [['01', 'Lead Generation', 'PIPELINE'], ['02', 'Content, Search & AI Visibility', 'VISIBILITY'], ['03', 'Digital PR', 'CREDIBILITY'], ['04', 'Audits & Diagnostics', 'CLARITY'], ['05', 'Consulting', 'CAPABILITY']]
  return <section className="system-section dark-section" id="system">
    <div className="section-heading">
      <div><p className="eyebrow">01 - The mDNA system</p><h2>Five entry points.<br />One marketing<br />system.</h2></div>
      <p>Five capabilities, connected around different business needs. Start with the one that matters now; move into the wider system when the need changes.</p></div>
      <div className="service-board"><p className="board-note">Select a node / explore a capability</p>
      {services.map(([number, title, label], index) => <div className={`service-node ${index === 0 ? 'active' : ''}`} key={number}>
        <div className="service-diamond"><small>{number}</small></div>
        <strong>{title}</strong><em>{label}</em></div>)}
        <div className="service-selected"><h3>Lead Generation</h3><p>Identify, target and message ideal buyers.</p><a href="#contact">Explore Lead Generation ↗</a>
        </div></div></section>
}
