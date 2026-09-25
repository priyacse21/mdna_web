import Branding from '../../screens/services/Branding'
import Audits from '../../screens/services/Audits'
import Consulting from '../../screens/services/Consulting'
import ContentSearchAI from '../../screens/services/ContentSearchAI'
import DigitalPR from '../../screens/services/DigitalPR'
import LeadGeneration from '../../screens/services/leadGeneration'

export default function Home() {
  return <div className="home-page">
    <Audits />
    <Branding />
    <Consulting />
    <ContentSearchAI />
    <DigitalPR />
    <LeadGeneration />

  </div>
}
