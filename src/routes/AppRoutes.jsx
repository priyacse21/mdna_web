import { Routes, Route } from "react-router-dom";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import Home from "../pages/Home";
import OurStory from "../pages/OurStory";
import OurWork from "../pages/OurWork";
import Insights from "../pages/Insights";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";

import LeadGeneration from "../screens/services/leadGeneration";
import ContentSearchAI from "../screens/services/ContentSearchAI";
import DigitalPR from "../screens/services/DigitalPR";
import Audits from "../screens/services/Audits";
import Consulting from "../screens/services/Consulting";
import Branding from "../screens/services/Branding";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
     <Route element={<WebsiteLayout />}>
      <Route index element={<Home />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="our-work" element={<OurWork />} />
       
        {/* Services */}
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
            path="digital-pr"
            element={<DigitalPR />}
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
        </Route>
         <Route path="insights" element={<Insights />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
  
    </Routes>
  );
}