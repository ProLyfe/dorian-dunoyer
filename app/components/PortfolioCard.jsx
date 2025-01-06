"use client";
import styles from '../styles/_portfoliocard.module.scss';
import styles2 from '../styles/_portfoliocard-jewely.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

const PortfolioCard = ({ image, imgCarousel, videoCarousel, alt, key, type, isArchi }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Ajoute un défilement fluide
        });
    };
    
    return (
        <>
            <motion.div 
                className={type === 'interior' ? styles.portfolioSectionPhotos: styles2.portfolioSectionPhotos} 
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                    (modalOpen ? close() : open())
                    console.log('cc')
                    scrollToTop();
                }}
                >
                <Image 
                    fill
                    src={image} 
                    alt={alt}
                    className={type === 'interior' ? styles.firstSectionImage : styles2.firstSectionImage}
                />
            </motion.div>
            
            <AnimatePresence
                // Disable any initial animations on children that
                // are present when the component is first rendered
                initial={false}
                // Only render one component at a time.
                // The exiting component will finish its exit
                // animation before entering component is rendered
                mode='wait'
                // Fires when all exiting nodes have completed animating out
                onExitComplete={() => null}
            >
                {modalOpen && <Modal modalOpen={modalOpen} imgCarousel={imgCarousel} videoCarousel={videoCarousel} handleClose={close} type={type} />}
            </AnimatePresence>
        </>
    );
};

export default PortfolioCard;