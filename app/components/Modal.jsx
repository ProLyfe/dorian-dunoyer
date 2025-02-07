import { motion } from "framer-motion";
import Backdrop from './Backdrop'
import styles from '../styles/_modal.module.scss';
import SimpleSlider from "./SimpleSlider";

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  
const Modal = ({ handleClose, imgCarousel, videoCarousel, type }) => (
  <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}  
        className={styles.modal}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={styles.modalContainer}>
            <SimpleSlider imgCarousel={imgCarousel} videoCarousel={videoCarousel} type={type} handleClose={handleClose}/>
        </div>
      </motion.div>
  </Backdrop>
);

export default Modal;