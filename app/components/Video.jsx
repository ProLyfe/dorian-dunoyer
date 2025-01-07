import React from 'react';
import useDetectDevTools from './customHooks/useDetectDevTools';

export default function Video({ videoCarousel, handleClose }) {

    const isDevToolsOpen = useDetectDevTools();
    const handleContextMenu = (e) => {
        e.preventDefault(); // Bloque le clic droit
      };
      
    return (
        <>
      {isDevToolsOpen ? (
        // Si l'inspecteur est ouvert, exécutez handleClose
        handleClose()
      ) : (
        // Sinon, affichez la vidéo
        <video
          style={{ width: '100%', height: '100%' }}
          autoPlay
          muted
          loop
          playsInline
          onContextMenu={handleContextMenu}
        >
          <source src={videoCarousel} type="video/mp4" />
        </video>
      )}
    </>
    );
}