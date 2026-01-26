import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import WhyFlowstate from "./pages/WhyFlowstate";
import StartSearch from "./pages/StartSearch";
import Contact from "./pages/Contact";
import Portal from "./pages/Portal";
import JobDescription from "./pages/JobDescription";
import JobDescriptionCPM from "./pages/JobDescriptionCPM";
import JobDescriptionSuperintendent from "./pages/JobDescriptionSuperintendent";
import JobDescriptionFreightBroker from "./pages/JobDescriptionFreightBroker";
import AIArchitectJob from "./pages/jobs/AIArchitect";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/why-flowstate" component={WhyFlowstate} />
      <Route path="/start-search" component={StartSearch} />
      <Route path="/contact" component={Contact} />
      <Route path="/portal" component={Portal} />
      <Route path="/jobs/senior-project-manager-ny" component={JobDescription} />
      <Route path="/jobs/construction-project-manager-in" component={JobDescriptionCPM} />
      <Route path="/jobs/senior-superintendent-in" component={JobDescriptionSuperintendent} />
      <Route path="/jobs/freight-broker-remote" component={JobDescriptionFreightBroker} />
      <Route path="/jobs/ai-architect" component={AIArchitectJob} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

import Layout from "./components/Layout";
import Loading from "./components/Loading";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Loading />
          <Toaster />
          <Layout>
            <Router />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
