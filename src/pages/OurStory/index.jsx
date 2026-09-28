
import React from "react";
import "./ourstory.css";
import CompanySection from "../../screens/ourstory/CompanySection";
import BeliefSection from "../../screens/ourstory/BeliefSection";
import OurStoryHero from "../../screens/ourstory/HeroSection";
import ObservationSection from "../../screens/ourstory/ObservationSection";
import CtaSection from "../../screens/ourstory/CtaSection";


export default function OurStory() {
  return (
    <div>
      <OurStoryHero />
      <ObservationSection />
			<CompanySection />
      <BeliefSection />
      <CtaSection />
    </div>
  );
}
