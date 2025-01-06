import UIWidth from './UIWidth';
import styles from '../styles/_legal-notice-section.module.scss';
import Hr from './Hr';

const LegalNoticeSection = () => {

    return (
        <div className={styles.portfolioSection}>
            <UIWidth>
                <div className={styles.portfolioSectionContainer}>
                    <h2>Legal Notice</h2>
                    <Hr color="black"/>
                    <div className={styles.portfolioSectionPhotosContainer}>
                        <h3>Site Publisher</h3>
                        <p>Name: Rayane E</p>
                        <p>Address: 5 rue de longchamps</p>
                        <p>Email: rayane.prolyfee@gmail.com</p>
                    </div>
                    <div className={styles.portfolioSectionPhotosContainer}>
                        <h3>Host</h3>
                        <p>Name: OVH</p>
                        <p>Address: 2, rue Kellermann, 59100 Roubaix</p>
                        <p>Email: support@ovh.com</p>
                    </div>
                    <div className={styles.portfolioSectionPhotosContainer}>
                        <h3>Intellectual Property</h3>
                        <p>All content on this site (texts, images, videos, etc.) is the property of Dorian Dunoyer, unless otherwise stated. Any reproduction, even partial, is prohibited without prior authorization.</p>
                    </div>
                </div>
            </UIWidth>
        </div>
    );
};

export default LegalNoticeSection;