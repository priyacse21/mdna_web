const tabs = ['Pipeline', 'Visibility', 'Credibility', 'Clarity', 'Capability']

export default function ExplorerSection() {
  return <section className="explorer-section dark-section">
    <div className="section-heading"><div><p className="eyebrow">05 - One business. Different starting points.</p><h2>Choose<br />your<br />starting<br />point.</h2></div><p>The right entry point changes with the problem. Select one to see how that starting point connects into the wider mDNA system.</p></div>
    <div className="tabs">{tabs.map((tab, index) => <button className={index === 0 ? 'active' : ''} key={tab}>{tab}</button>)}</div>
    <div className="explorer-map"><span className="map-point point-pipeline">Pipeline</span><span className="map-point point-visibility">Visibility</span><span className="map-point point-credibility">Credibility</span><span className="map-point point-clarity">Clarity</span><span className="map-point point-capability">Capability</span><div className="map-center">mDNA<br />system</div><div className="map-caption"><h3>Pipeline</h3><p>Lead Generation - identify, target and message ideal buyers.</p></div></div>
  </section>
}
