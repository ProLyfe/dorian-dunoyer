'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from '../styles/_hr.module.scss';

const Hr = ({ color }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.hr
            className={styles.hr}
            ref={ref}
            initial={{ width: '0%' }}        // Commence à 0% de largeur
            animate={{ width: isInView ? '100%' : '0%' }} // S'étend à 100% lorsque visible
            transition={{ duration: 1 }}     // Durée de l'animation (1 seconde ici)
            style={{
                border: 'none',
                height: '2px',
                backgroundColor: color,     // Couleur du hr
            }}
        />
    );
};

export default Hr;