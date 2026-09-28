import HeroSection from "../../screens/careers/HeroSection";
import "../../pages/careers/Careers.css";
import TeamSection from "../../screens/careers/TeamSection";
import OpportunitiesSection from "../../screens/careers/OpportunitiesSection";
import IdeaSection from "../../screens/careers/IdeaSection";
import CtaSection from "../../screens/careers/CtaSection";


export default function Careers() {
	return (
		<div>
			<HeroSection />
			<TeamSection />
			<OpportunitiesSection />
			<IdeaSection />
			<CtaSection />

		</div>
	);
}
