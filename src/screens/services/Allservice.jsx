import './services.css'
import { Link } from 'react-router-dom'
import { servicePortfolios } from './data/serviceData'

export default function Allservice() {
	return <section className="all-services" aria-labelledby="all-services-title">
		<header className="all-services-heading">
			<div>
				<p className="eyebrow"><span>03</span> / Services</p>
				<p className="all-services-kicker">One connected portfolio</p>
				<h1 id="all-services-title">Marketing work,<br /><span>built to connect.</span></h1>
			</div>
			<p className="all-services-intro">Six service portfolios. Each built around a different growth problem, and designed to work with the others when the problem needs more than one answer.</p>
		</header>
		<div className="all-services-grid">
			{servicePortfolios.map(({ number, name, path, description, services }) => <article className="all-services-card" key={number}>
				<span className="all-services-number">{number}</span>
				<h2>{name}</h2>
				<p>{description}</p>
				<p className="all-services-listing">{services}</p>
				<Link to={path} aria-label={`${name === 'Performance Marketing' ? 'Discuss' : 'Learn more about'} ${name}`}>
					<span>{name === 'Performance Marketing' ? 'Discuss the service' : 'Learn more'}</span>
					<b aria-hidden="true">↗</b>
				</Link>
			</article>)}
		</div>
	</section>
}
