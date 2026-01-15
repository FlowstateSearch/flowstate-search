import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 800); // Show for at least 800ms for smooth transition
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="relative flex flex-col items-center">
        <div className="relative h-20 w-20">
          {/* Pulse effect behind logo */}
          <div className="absolute inset-0 rounded-xl bg-primary/20 animate-ping" />
          {/* Logo */}
          <img 
            src="/favicon.png" 
            alt="Loading..." 
            className="relative h-20 w-20 object-contain animate-pulse" 
          />
        </div>
        <div className="mt-4 h-1 w-32 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full origin-left animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </div>
    </div>
  );
}
