import React, { useEffect, useRef, useState } from 'react';

const VimeoEmbed = ({ videoId }) => {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoaded(true);
        }
      },
      { threshold: 0.1 }
    );
//hghgfhgghevaus ffaire kolohdedolefjsalu tcomment tu vas dinediederayane merci beacucoupo rayane t un bon jalais je vais te kai donner parsce que jtzteeh etciao merci aurvecoir 
    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        top: -24,
        left: -24,
        position: 'relative',
        width: '110%',
        height: '110%', // Laisse le conteneur remplir tout l'espace parent
        overflow: 'hidden',
      }}
    >
      <iframe
        ref={iframeRef}
        src={
          loaded
            ? `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=1`
            : `https://player.vimeo.com/video/${videoId}?background=1`
        }
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Assure que la vidéo couvre tout l'espace sans distorsion
          border: 'none',
        }}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Vimeo Video"
      ></iframe>
    </div>
  );
};

export default VimeoEmbed;
