import { useEffect } from "react";

declare global {
  interface Window {
    initCursifiy: () => void;
  }
}

export default function CursifiyCursor() {
  useEffect(() => {
    const script = document.createElement("script");
    // Replace this URL with the correct CDN URL for Cursifiy if necessary.
    script.src = "https://cdn.jsdelivr.net/npm/cursifiy/dist/cursifiy.min.js";
    script.async = true;
    script.onload = () => {
      if (window.initCursifiy) {
        // Initialize Cursifiy to activate custom cursor effects.
        window.initCursifiy();
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

