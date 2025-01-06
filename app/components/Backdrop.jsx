import { motion } from "framer-motion";
import { useEffect } from "react";
import styles from '../styles/_backdrop.module.scss';

const Backdrop = ({ children, onClick }) => {
  useEffect(() => {
    // Bloque le scroll en ajoutant une classe au body
    document.body.classList.add(styles.noScroll);

    // Nettoie la classe au démontage du composant
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, []);

  return (
    <motion.div
      onClick={onClick}
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
