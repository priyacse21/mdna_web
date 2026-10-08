import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import WebsiteLayout from "../components/layout/WebsiteLayout";
const Home = lazy(() => import("../pages/Home"));
const OurStory = lazy(() => import("../pages/OurStory"));
// import OurWork from "../pages/OurWork";
const Insights = lazy(() => import("../pages/Insights"));
const Careers = lazy(() => import("../pages/Careers/Careers"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Services = lazy(() => import("../pages/Services"));
const LeadGeneration = lazy(() => import("../screens/services/leadGeneration"));
const ContentSearchAI = lazy(() => import("../screens/services/ContentSearchAI"));
const Audits = lazy(() => import("../screens/services/Audits"));
const Consulting = lazy(() => import("../screens/services/Consulting"));
const Branding = lazy(() => import("../screens/services/Branding"));
const PerformanceMarketing = lazy(() => import("../screens/services/PerformanceMarketing"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Terms = lazy(() => import("../screens/PrivacyPolicy/Terms"));
const PrivacyPolicy = lazy(() => import("../screens/PrivacyPolicy/policy"));

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