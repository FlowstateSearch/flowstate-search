import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Portal() {
  useEffect(() => {
    // Load Knack embed helper
    const scriptHelper = document.createElement("script");
    scriptHelper.src = "//cdn.knack.com/assets/js/knack-embed-helper.js";
    scriptHelper.async = true;
    document.body.appendChild(scriptHelper);

    // Load iframe resizer
    const scriptResizer = document.createElement("script");
    scriptResizer.type = "module";
    scriptResizer.innerHTML = `
      import { initialize } from "//cdn.knack.com/assets/js/open-iframe-resizer.min.js";
      initialize({ offsetSize: 1 }, "#knack-app-iframe");
    `;
    document.body.appendChild(scriptResizer);

    return () => {
      document.body.removeChild(scriptHelper);
      document.body.removeChild(scriptResizer);
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Client Portal</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Access your dashboard to track search progress, view candidate profiles, and manage your hiring pipeline.
            </p>
          </div>

          <Card className="border-border/50 shadow-lg overflow-hidden bg-card">
            <CardContent className="p-0 min-h-[600px]">
              <iframe
                id="knack-app-iframe"
                src="https://apps.knack.com/flowstatesearch/untitled-app/client-dashboard?embedKey=dist_2"
                width="100%"
                height="800"
                frameBorder="0"
                allowFullScreen
                className="w-full"
                title="Client Portal"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
