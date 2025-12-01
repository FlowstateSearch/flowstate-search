import { useEffect } from "react";

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
    <div className="h-screen w-screen overflow-hidden bg-background">
      <iframe
        id="knack-app-iframe"
        src="https://apps.knack.com/flowstatesearch/untitled-app/client-dashboard?embedKey=dist_2"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className="w-full h-full border-0"
        title="Client Portal"
      ></iframe>
    </div>
  );
}
