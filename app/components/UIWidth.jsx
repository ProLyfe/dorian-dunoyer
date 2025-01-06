import styles from '../styles/_uiwidth.module.scss';

const UIWidth = ({ children }) => {
    return (
        <div className={styles.uiwidthContainer}>
            {children}
        </div>
    )
};

export default UIWidth;