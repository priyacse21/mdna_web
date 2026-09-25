const needs = [
  'I need more qualified conversations.',
  'I need to be found on Google and AI.',
  'I need stronger digital credibility.',
  "I need to know what's working.",
  'I need a stronger marketing function.',
]

const capabilities = [
  'Lead Generation',
  'Content, Search & AI Visibility',
  'Digital PR',
  'Audits & Diagnostics',
  'Consulting',
]

export default function NeedsSection() {
  return <section className="needs-section light-section">
    <div className="section-heading">
      <div><p className="eyebrow">02 - Where should we start?</p><h2>What do you<br />need<br />to move<br />forward?</h2></div>
      <p>Choose the situation that sounds most like yours. We'll point you toward the mDNA capability built around that need.</p>
    </div>
    <div className="question-list">
      {needs.map((text, index) => <div className={`question-row ${index === 4 ? 'selected' : ''}`} key={text}>
        <small>0{index + 1}</small><strong>{text}</strong><em>{capabilities[index]}</em><b>-&gt;</b>
        {index === 4 && <p><b>Start with Consulting.</b><br />Build stronger marketing functions and make better decisions.</p>}
      </div>)}
    </div>
  </section>
}
