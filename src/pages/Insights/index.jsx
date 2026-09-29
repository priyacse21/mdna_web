import React from "react";
import InsightsHero from "../../screens/insights/HeroSection";
import ContentIndexSection from "../../screens/insights/ContentIndexSection";
import UpcomingSection from "../../screens/insights/UpcomingSection";
import FAQSection from "../../screens/insights/FAQSection";

export default function Insights() {
	return (
		<div>
			<InsightsHero />
			<ContentIndexSection />
			<UpcomingSection />
			<FAQSection />

		</div>
	);
}
