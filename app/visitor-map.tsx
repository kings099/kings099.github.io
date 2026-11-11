"use client";

import { useEffect, useRef } from "react";

// Public embed URL supplied by the site owner from MapMyVisitors.
const globeScriptUrl = "https://mapmyvisitors.com/globe.js?d=BFN2LUAy3nU-f6W8xAoQkOPR_BeJhSiFIhKhkbvlee8";

export default function VisitorMap() {
  const container = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !container.current) return;
    initialized.current = true;
    const script = document.createElement("script");
    script.id = "mmvst_globe";
    script.type = "text/javascript";
    script.src = globeScriptUrl;
    script.async = true;
    container.current.appendChild(script);
  }, []);

  return (
    <section className="visitor-section" aria-labelledby="visitors-title">
      <h2 id="visitors-title">Visitors</h2>
      <div className="visitor-map" ref={container} aria-label="MapMyVisitors globe showing visitor locations" />
    </section>
  );
}
