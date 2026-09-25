const steps = [
  ['Identify', 'Understand the business need in front of you.', 'Need'],
  ['Focus', 'Determine what deserves attention now.', 'Priority'],
  ['Act', 'Deploy the marketing capability that fits.', 'Action'],
  ['Move', 'Measure, learn and determine the next move.', 'Direction'],
]

export default function MovementSection() {
  return <section className="movement-section dark-section">
    <div className="section-heading">
      <div><p className="eyebrow">03 - How the system moves</p><h2>Start where<br />you are.<br />Move from<br />there.</h2></div>
      <p>There is no single starting point. The route is simple: identify the need, focus the work, act on the right capability, then determine the next move.</p>
    </div>
    <div className="timeline">{steps.map(([title, description, label], index) => <div className="timeline-step" key={title}>
      <div className="step-number">0{index + 1}</div><h3>{title}</h3><p>{description}</p><small>{label}</small>
    </div>)}</div>
  </section>
}
