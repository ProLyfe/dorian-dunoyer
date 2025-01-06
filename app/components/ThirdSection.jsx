import styles from '../styles/_third-section.module.scss';
import PortfolioHomeCard from './PortfolioHomeCard';
import sample13 from '../images/sample13.png';
import sample21 from '../images/sample21.png';
import sample6 from '../images/sample6.png';
import UIWidth from './UIWidth';
import model2_2 from '../images/jewelry/final/finalmodel2/bracelet1_2.webp';

const ThirdSection = () => (
    <div className={styles.thirdSection} id="portfolio">
        <UIWidth>
            <h2>Portfolio</h2>
            <div className={styles.thirdSectionPortfolioContainer}>
                <PortfolioHomeCard coverImage={sample6} link="/interior-design"/>
                <PortfolioHomeCard coverImage={sample13} link="/jewelry"/>
            </div>
        </UIWidth>
    </div>
);
export default ThirdSection;