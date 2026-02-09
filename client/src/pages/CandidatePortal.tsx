import { useParams } from "wouter";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";

/**
 * Candidate Portal Welcome Page
 * 
 * This page provides branded welcome screen before redirecting to Loxo hiring portals.
 * Hiring managers visit: flowstatesearch.com/portal/TomJones
 * They see a personalized welcome message and click a button to access their portal.
 * 
 * Portal users are now managed through the admin dashboard at /admin/portals
 * No need to edit code to add new hiring managers!
 */

export default function CandidatePortal() {
  const params = useParams();
  const username = params.username || '';

  // Fetch user info from database (case-insensitive lookup)
  const { data: userInfo, isLoading, error } = trpc.portals.getByUsername.useQuery(
    { username },
    { enabled: !!username }
  );

  // Track access mutation
  const trackAccess = trpc.portals.trackAccess.useMutation();

  // Handle button click - track access and redirect to Loxo portal
  const handleAccessPortal = async () => {
    if (userInfo?.loxoUrl) {
      // Track the access (fire and forget)
      try {
        await trackAccess.mutateAsync({ username });
      } catch (error) {
        console.error('Failed to track access:', error);
        // Continue with redirect even if tracking fails
      }
      window.location.href = userInfo.loxoUrl;
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-md w-full text-center">
          <p className="text-muted-foreground">Loading your portal...</p>
        </div>
      </div>
    );
  }

  // User not found
  if (!userInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-md w-full">
          <Alert variant="destructive">
            <AlertCircle className="h-4 h-4" />
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
          Welcome, {userInfo.displayName}
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
