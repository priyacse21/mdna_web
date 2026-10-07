import { Routes, Route } from "react-router-dom";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import Home from "../pages/Home";
import OurStory from "../pages/OurStory";
// import OurWork from "../pages/OurWork";
import Insights from "../pages/Insights";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services";

import LeadGeneration from "../screens/services/leadGeneration";
import ContentSearchAI from "../screens/services/ContentSearchAI";

import Audits from "../screens/services/Audits";
import Consulting from "../screens/services/Consulting";
import Branding from "../screens/services/Branding";
import PerformanceMarketing from "../screens/services/PerformanceMarketing";
import NotFound from "../pages/NotFound";
import Terms from "../screens/PrivacyPolicy/Terms";
import PrivacyPolicy from "../screens/PrivacyPolicy/policy";

export default function AppRoutes() {
  return (
    <Routes>
     <Route element={<WebsiteLayout />}>
      <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="our-story" element={<OurStory />} />

        <Route path="services">
          <Route
            path="lead-generation"
            element={<LeadGeneration />}
          />

          <Route
            path="content-search-ai"
            element={<ContentSearchAI />}
          />


          <Route
            path="audits"
            element={<Audits />}
          />

          <Route
            path="consulting"
            element={<Consulting />}
          />

          <Route
            path="branding"
            element={<Branding />}
          />

          <Route
            path="performance-marketing"
            element={<PerformanceMarketing />}
          />
        </Route>
         <Route path="our-work" element={<Insights />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
  
    </Routes>
  );
}