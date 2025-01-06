'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/_koreantext-section.module.scss';

const KoreanTextSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isKorean, setIsKorean] = useState(true); // État pour alterner le texte
  const [isVisible, setIsVisible] = useState(true); // État pour gérer la visibilité pendant le moment de blanc

  useEffect(() => {
    // Capture la largeur de la fenêtre pour limiter les déplacements
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWindowWidth();

    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  useEffect(() => {
    const toggleText = setInterval(() => {
      setIsVisible(false); // Crée un moment de "blanc"
      setTimeout(() => {
        setIsKorean((prev) => !prev); // Change le texte après le moment de "blanc"
        setIsVisible(true); // Rétablit la visibilité
      }, 500); // Pause de 500ms avant le changement de texte
    }, 3000);

    return () => clearInterval(toggleText); // Nettoyage de l'intervalle
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcul des translations, limitant à 10% de la largeur de l'écran pour un mouvement plus lent
  const maxTranslation = windowWidth * 0.1;
  const translateRight = Math.min(scrollY * 0.1, maxTranslation); // Ralentissement à 10%
  const translateLeft = Math.max(-scrollY * 0.1, -maxTranslation); // Ralentissement à 10%

  return (
    <div className={styles.koreanTextSection}>
      <div
        style={{
          transform: `translateX(${translateRight}px)`,
          transition: `transform 0.1s linear`,
          position: 'relative', // Pour superposer les textes
          height: '2rem', // Hauteur définie pour éviter le décalage
        }}
      >
        {/* Texte coréen */}
        <h2
          className={`${styles.text} ${
            isVisible ? (isKorean ? styles.fadeIn : styles.fadeOut) : styles.hidden
          }`}
        >
          도리안
        </h2>
        {/* Texte anglais */}
        <h2
          className={`${styles.text} ${
            isVisible ? (!isKorean ? styles.fadeIn : styles.fadeOut) : styles.hidden
          }`}
        >
          Dorian
        </h2>
      </div>
      <h2
        className={styles.welcome}
        style={{
          transform: `translateX(${translateLeft}px)`,
          transition: `transform 0.1s linear`, // Même effet pour le deuxième texte
        }}
      >
        Welcome
      </h2>
    </div>
  );
};

export default KoreanTextSection;
