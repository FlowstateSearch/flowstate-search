/**
 * RouterContent — the Switch/Route tree extracted from App.tsx.
 * Used by both App.tsx (client) and entry-server.tsx (SSR build).
 */
import { Route, Switch } from "wouter";
import NotFound from "@/pages/NotFound";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import WhyFlowstate from "./pages/WhyFlowstate";
import StartSearch from "./pages/StartSearch";
import Contact from "./pages/Contact";
import CandidatePortal from "./pages/CandidatePortal";
import JobDescription from "./pages/JobDescription";
import JobDescriptionCPM from "./pages/JobDescriptionCPM";
import JobDescriptionSuperintendent from "./pages/JobDescriptionSuperintendent";
import JobDescriptionFreightBroker from "./pages/JobDescriptionFreightBroker";
import AIArchitectJob from "./pages/jobs/AIArchitect";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LLMResources from "./pages/LLMResources";
import AdminPortals from "./pages/AdminPortals";
import Community from "./pages/Community";
import Insights from "./pages/Insights";
import CostOfBadHire from "./pages/blog/CostOfBadHire";
import PMSalary from "./pages/blog/PMSalary";
import SuperintendentSalary from "./pages/blog/SuperintendentSalary";
import PassiveCandidates from "./pages/blog/PassiveCandidates";
import TalentShortage from "./pages/blog/TalentShortage";
import RetainedVsContingency from "./pages/blog/RetainedVsContingency";
import VPOperationsSalary from "./pages/blog/VPOperationsSalary";
import PMRecruiter from "./pages/seo/PMRecruiter";
import SuperintendentRecruiter from "./pages/seo/SuperintendentRecruiter";

export default function RouterContent() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/why-flowstate" component={WhyFlowstate} />
      <Route path="/start-search" component={StartSearch} />
      <Route path="/contact" component={Contact} />
      <Route path="/portal/:username" component={CandidatePortal} />
      <Route path="/jobs/senior-project-manager-ny" component={JobDescription} />
      <Route path="/jobs/construction-project-manager-in" component={JobDescriptionCPM} />
      <Route path="/jobs/senior-superintendent-in" component={JobDescriptionSuperintendent} />
      <Route path="/jobs/freight-broker-remote" component={JobDescriptionFreightBroker} />
      <Route path="/jobs/ai-architect" component={AIArchitectJob} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/llm-resources" component={LLMResources} />
      <Route path="/admin/portals" component={AdminPortals} />
      <Route path="/community" component={Community} />
      <Route path="/insights" component={Insights} />
      <Route path="/blog/cost-of-bad-hire-construction" component={CostOfBadHire} />
      <Route path="/blog/construction-project-manager-salary" component={PMSalary} />
      <Route path="/blog/construction-superintendent-salary" component={SuperintendentSalary} />
      <Route path="/blog/how-to-find-passive-construction-candidates" component={PassiveCandidates} />
      <Route path="/blog/construction-talent-shortage-2026" component={TalentShortage} />
      <Route path="/blog/retained-vs-contingency-construction-recruiting" component={RetainedVsContingency} />
      <Route path="/blog/construction-vp-operations-salary" component={VPOperationsSalary} />
      <Route path="/construction-project-manager-recruiter" component={PMRecruiter} />
      <Route path="/construction-superintendent-recruiter" component={SuperintendentRecruiter} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}
