import { useParams } from "wouter";
import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

/**
 * Candidate Portal Welcome Page
 * 
 * This page provides branded welcome screen before redirecting to Loxo candidate portals.
 * Users visit: flowstatesearch.com/portal/TomJones
 * They see a personalized welcome message and click a button to access their portal.
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

/**
 * Extract first and last name from username for personalized greeting
 * Examples: "TomJones" → "Tom Jones", "SarahChen" → "Sarah Chen"
 */
function formatName(username: string): string {
  // Split on capital letters to separate first/last name
  const parts = username.split(/(?=[A-Z])/);
  return parts.join(' ');
}

export default function CandidatePortal() {
  const params = useParams();
  const username = params.username || '';
  const [error, setError] = useState<string | null>(null);

  // Look up the Loxo URL for this username
  const loxoUrl = userMapping[username];

  if (!loxoUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-md w-full">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Access Not Found</AlertTitle>
            <AlertDescription>
              Access not found for: "{username}"
              <br />
              <br />
              Please check your URL or contact Flowstate Search for assistance.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  const candidateName = formatName(username);

  // Handle button click - redirect to Loxo portal
  const handleAccessPortal = () => {
    window.location.href = loxoUrl;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="text-center max-w-2xl w-full">
        {/* Flowstate Logo */}
        <div className="mb-12 flex justify-center">
          <img 
            src="/logo.svg" 
            alt="Flowstate Search" 
            className="h-20 w-auto"
          />
        </div>

        {/* Welcome Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Welcome, {candidateName}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
          Your personalized hiring portal is ready. Click below to access qualified candidates for your open positions.
        </p>

        {/* Access Button */}
        <Button
          onClick={handleAccessPortal}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Access Your Hiring Portal
        </Button>

        {/* Helper Text */}
        <p className="mt-8 text-sm text-muted-foreground">
          You'll be redirected to your secure hiring portal where you can review candidate profiles, qualifications, and next steps.
        </p>
      </div>
    </div>
  );
}
