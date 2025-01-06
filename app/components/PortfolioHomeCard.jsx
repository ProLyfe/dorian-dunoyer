import styles from '../styles/_portfoliohomecard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioHomeCard = ({ coverImage, link }) => (
    <div className={styles.portfolioHomeCardContainer}>
        <div className={styles.portfolioHomeCardImageContainer}>
            <Link href={link}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src={coverImage} 
                        alt="Dorian walking in front of the sea"
                        className={styles.portfolioHomeCardContainerImage}
                        fill
                    />
                    <div className={styles.overlay}>
                        <span className={styles.viewMore}>View more</span>
                    </div>
                </div>
            </Link>
        </div>
    </div>
);

export default PortfolioHomeCard;
