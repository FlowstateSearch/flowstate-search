import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Construction, Home, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-lg shadow-xl border-border/50 bg-background">
        <CardContent className="pt-12 pb-12 text-center px-8">
          <div className="flex justify-center mb-8">
            <div className="relative p-6 bg-primary/10 rounded-full">
              <Construction className="h-16 w-16 text-primary" />
            </div>
          </div>

          <h1 className="text-6xl font-heading font-bold text-primary mb-4">404</h1>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Blueprint Missing
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
            Looks like this page is still under construction or has been moved to a new job site.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
            <Button
              onClick={handleGoHome}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
