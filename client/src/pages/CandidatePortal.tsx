import { useParams } from "wouter";
import { useEffect, useState } from "react";
import { AlertCircle, ExternalLink } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

/**
 * Candidate Portal Redirect Page
 * 
 * This page provides branded redirect links to Loxo candidate portals.
 * Users visit: flowstatesearch.com/portal/TomJones
 * They see a Flowstate-branded loading page, then auto-redirect to Loxo.
 * 
 * HOW TO ADD NEW CANDIDATES:
 * 1. Get the full Loxo portal URL with user_email parameter
 * 2. Choose a username (e.g., first+last name: "TomJones")
 * 3. Add entry to userMapping below
 * 
 * Example:
 * const userMapping = {
 *   'TomJones': 'https://palermo-rhodes.app.loxo.co/agencies/340/jobs/3525548?user_email=tom.jones@example.com',
 *   'SarahChen': 'https://palermo-rhodes.app.loxo.co/agencies/340/jobs/3525548?user_email=sarah.chen@company.com',
 * };
 */

// USER MAPPING: Add your candidates here (username → full Loxo URL)
const userMapping: Record<string, string> = {
  // Example: Tom Jones
  'TomJones': 'https://palermo-rhodes.app.loxo.co/agencies/340/jobs/3525548?user_email=TestingTJones%40gmail.com',
  
  // Add more candidates below:
  // 'DavidSmith': 'https://palermo-rhodes.app.loxo.co/agencies/340/jobs/3525548?user_email=david.smith@example.com',
  // 'JaneWilliams': 'https://palermo-rhodes.app.loxo.co/agencies/340/jobs/3525548?user_email=jane.williams@example.com',
};

// REDIRECT DELAY: Time to show branded loading page before redirect (milliseconds)
const REDIRECT_DELAY_MS = 1500; // 1.5 seconds

export default function CandidatePortal() {
  const params = useParams();
  const username = params.username || '';
  const [error, setError] = useState<string | null>(null);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    // Look up the Loxo URL for this username
    const loxoUrl = userMapping[username];

    if (!loxoUrl) {
      setError(`Access not found for: "${username}"`);
      return;
    }

    // Show loading page, then redirect
    setRedirecting(true);
    const timer = setTimeout(() => {
      window.location.href = loxoUrl;
    }, REDIRECT_DELAY_MS);

    return () => clearTimeout(timer);
  }, [username]);

  // Error state: username not found in mapping
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-md w-full">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Access Not Found</AlertTitle>
            <AlertDescription>
              {error}
              <br />
              <br />
              Please check your URL or contact Flowstate Search for assistance.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  // Loading/redirect state
  if (redirecting) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
        <div className="text-center max-w-md">
          {/* Flowstate Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo.svg" 
              alt="Flowstate Search" 
              className="h-16 w-auto"
            />
          </div>

          {/* Loading Spinner */}
          <div className="relative mb-6">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary mx-auto"></div>
          </div>

          {/* Loading Message */}
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Loading Your Portal
          </h1>
          <p className="text-muted-foreground mb-6">
            Redirecting you to your personalized candidate portal...
          </p>

          {/* Manual Link (backup) */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-2">
              Not redirecting automatically?
            </p>
            <a
              href={userMapping[username]}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              Click here to continue
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Fallback (should never show)
  return null;
}
