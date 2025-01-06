import UIWidth from './UIWidth';
import styles from '../styles/_portfolio-section.module.scss';
import dorianImage from '../images/shooting/imagedorian5.jpg';
import dorianImage2 from '../images/shooting/imagedorian2.jpg';
import dorianImage3 from '../images/shooting/imagedorian3.jpg';
import PortfolioCard from './PortfolioCard';
import Hr from './Hr';

//Import images
import archi1 from '../images/archi/1.webp';
import archi2 from '../images/archi/2.webp';
import archi3 from '../images/archi/3.webp';
import archi4 from '../images/archi/4.webp';
import archi5 from '../images/archi/5.webp';
import archi6 from '../images/archi/6.webp';
import archi7 from '../images/archi/7.webp';
import archi8 from '../images/archi/8.webp';

const PortfolioSection = () => {

    const portfolioContent = [
        { id: 1, imgUrl: archi1, imgCarousel: [archi1] },
        { id: 2, imgUrl: archi2, imgCarousel: [archi2] },
        { id: 3, imgUrl: archi3, imgCarousel: [archi3] },
        { id: 4, imgUrl: archi4, imgCarousel: [archi4] },
        { id: 5, imgUrl: archi5, imgCarousel: [archi5] },
        { id: 6, imgUrl: archi6, imgCarousel: [archi6] },
        { id: 6, imgUrl: archi7, imgCarousel: [archi7] },
        { id: 6, imgUrl: archi8, imgCarousel: [archi8] },
    ]
    return (
        <div className={styles.portfolioSection}>
            <UIWidth>
                <div className={styles.portfolioSectionContainer}>
                    <h2>Interior designer</h2>
                    <Hr color="black"/>
                    <div className={styles.portfolioSectionPhotosContainer}>
                        {portfolioContent.map(({id, imgUrl, imgCarousel}) => (
                            <PortfolioCard 
                                key={id}
                                image={imgUrl}
                                imgCarousel={imgCarousel}
                                alt="Dorian walking in front of the sea"
                                type="interior"
                                isArchi={true}
                            />
                        ))}
                    </div>
                </div>
            </UIWidth>
        </div>
    );
};

export default PortfolioSection;