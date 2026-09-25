import { Link } from 'react-router-dom'

export default function NotFound() {
  return <section className="light-section page-placeholder">
    <p className="eyebrow">404 - Page not found</p>
    <h1>That route<br />doesn't exist.</h1>
    <Link className="button button-primary" to="/">Return home -&gt;</Link>
  </section>
}
