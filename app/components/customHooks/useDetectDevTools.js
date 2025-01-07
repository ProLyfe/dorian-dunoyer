import { useEffect, useState } from 'react';

const useDetectDevTools = () => {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  useEffect(() => {
    const isMobileDevice = () => {
      return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    };

    const detectDevTools = () => {
      if (isMobileDevice()) {
        setIsDevToolsOpen(false); // Ne fait rien si c'est un mobile
        return;
      }

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