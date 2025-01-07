// components/FullscreenModal.js
"use client";
import { useState, useEffect } from 'react';
import styles from '../styles/_fullscreenmodal.module.scss';
import useDetectDevTools from './customHooks/useDetectDevTools';

export default function FullscreenModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);

    // Détecte si l'utilisateur est sur un appareil mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Par exemple, largeur max pour mobile
    };

    handleResize(); // Vérification initiale
    window.addEventListener("resize", handleResize); // Écoute les changements de taille d'écran

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleVideoEnd = () => {
    setIsModalOpen(false);
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Bloque le clic droit
  };

  const isDevToolsOpen = useDetectDevTools();
  // console.log('test :', isDevToolsOpen)
  return (
    <div>
      {isModalOpen && (
        <div className={styles.modal}>
          {isDevToolsOpen ? setIsModalOpen(false) : 
          <video
            className={styles.video}
            src={isMobile ? "Tracking_vers_mobile.mp4" : "Tracking_vers_pc.mp4"} // Vidéo différente selon l'écran
            autoPlay
            muted
            onEnded={handleVideoEnd}
            playsInline
            onContextMenu={handleContextMenu}
          />
          }
          <button
            className={styles.closeButton}
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
