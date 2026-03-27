"use client";

import { useEffect, useState } from "react";

export default function LoadingSpinner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setVisible(false), 300); // slight delay for smooth fade
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "opacity 0.3s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="spinner" />
      <style>{`
        .spinner {
          width: 52px;
          height: 52px;
          border: 5px solid #e5e7eb;
          border-top-color: #e63b27;
          border-radius: 50%;
          animation: spin 0.75s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}