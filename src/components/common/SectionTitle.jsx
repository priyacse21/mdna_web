export default function SectionTitle({ eyebrow, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
    </div>
  )
}
