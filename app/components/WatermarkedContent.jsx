"use client";
import { useEffect } from "react";

export default function WatermarkedContent({ children }) {

    useEffect(() => {
        const blockContextMenu = (e) => {
          e.preventDefault();
        };
    
        // Écoute l'événement contextmenu
        document.addEventListener("contextmenu", blockContextMenu);
    
        // Nettoyage de l'événement au démontage
        return () => {
          document.removeEventListener("contextmenu", blockContextMenu);
        };
      }, []);

    return (
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "3rem",
            color: "rgba(255, 255, 255, 0.3)",
            zIndex: 1000,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {/* Confidential - Your IP: 123.45.67.89 */}
        </div>
        <div style={{ zIndex: 1 }}>
          {/* Votre contenu ici */}
          {children}
        </div>
      </div>
    );
  }
  