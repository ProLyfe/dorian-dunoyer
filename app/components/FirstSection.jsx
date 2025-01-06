"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/_first-section.module.scss';
import dorianImage from '../images/shooting/imagedorian5.jpg';

const FirstSection = () => {

    const texts = ['도리안', 'Dorian']; // Les textes à alterner
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState(styles.fadeIn); // Classe pour le fade

    useEffect(() => {
        const interval = setInterval(() => {
        // Réinitialiser l'animation à chaque changement de texte
        setFadeClass('');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setFadeClass(styles.fadeIn);
            }, 100); // Attends un peu avant de réappliquer le fade pour bien le relancer
        }, 3000);

        return () => clearInterval(interval); // Nettoyage lors du démontage du composant
    }, [texts.length]);

    return (
        <div className={styles.firstSection} id="home">
            <Image 
                src={dorianImage} 
                alt="Dorian walking in front of the sea"
                className={styles.firstSectionImage}
            />
            <h1 className={`${styles.firstSectionKoreanText} ${fadeClass}`}>
                {texts[currentIndex]}
            </h1>      
        </div>
    );
};

export default FirstSection;