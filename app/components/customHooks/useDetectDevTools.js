import { useEffect, useState } from 'react';

const useDetectDevTools = () => {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  useEffect(() => {
    const detectDevTools = () => {
      const threshold = 160; // Largeur minimale pour détecter la console devtools
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;

      if (widthThreshold || heightThreshold) {
        if (!isDevToolsOpen) {
          setIsDevToolsOpen(true);
        }
      } else {
        setIsDevToolsOpen(false);
      }
    };

    // Détection à l'ouverture de l'inspecteur
    const interval = setInterval(() => {
      detectDevTools();
    }, 500); // Vérifie toutes les 500 ms

    return () => clearInterval(interval); // Nettoyage
  }, [isDevToolsOpen]);

  return isDevToolsOpen;
};

export default useDetectDevTools;
