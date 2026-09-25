import Hero from '../../screens/home/Hero'
import ProblemSection from '../../screens/home/ProblemSection'
import ServicesOverview from '../../screens/home/ServicesOverview'
import NeedsSection from '../../screens/home/NeedsSection'
import MovementSection from '../../screens/home/MovementSection'
import AuditSection from '../../screens/home/AuditSection'
import ExplorerSection from '../../screens/home/ExplorerSection'
import ValueSection from '../../screens/home/ValueSection'
import CtaSection from '../../screens/home/CtaSection'

export default function Home() {
  return <div className="home-page">
    <Hero />
    <ProblemSection />
    <ServicesOverview />
    <NeedsSection />
    <MovementSection />
    <AuditSection />
    <ExplorerSection />
    <ValueSection />
    <CtaSection />
  </div>
}
