'use client';
import UIWidth from './UIWidth';
import styles from '../styles/_portfolio-section-jewelry.module.scss';
import dorianImage from '../images/shooting/imagedorian5.jpg';
import dorianImage2 from '../images/shooting/imagedorian2.jpg';
import dorianImage3 from '../images/shooting/imagedorian3.jpg';
import PortfolioCard from './PortfolioCard';
import Hr from './Hr';
import Image from 'next/image';

//Jewelry imports
//Model 1
// import model1_1 from '../images/jewelry/model1/model1_1.jpg';
// import model1_2 from '../images/jewelry/model1/model1_2.jpg';
// import model1_3 from '../images/jewelry/model1/model1_3.jpg';
// import model1_4 from '../images/jewelry/model1/model1_vdo.gif';

// //Model 2
// import bracelet_1 from '../images/jewelry/model2/bracelet1_1.jpg';
// import bracelet_2 from '../images/jewelry/model2/bracelet1_1.gif';
// import bracelet_3 from '../images/jewelry/model2/bracelet1_2.jpg';
// import bracelet_4 from '../images/jewelry/model2/bracelet1_3.jpg';

// //Model 3
// import baguemodel2_1 from '../images/jewelry/model3/baguemodel2_1.jpg';
// import baguemodel2_2 from '../images/jewelry/model3/baguemodel2_boite.jpg';
// import baguemodel2_3 from '../images/jewelry/model3/baguemodel2_boitezoom.jpg';

// ========================================================
// ========================================================
// ========================================================

//Model 1 final 
import model1_1 from '../images/jewelry/final/finalmodel1/model1_1.webp';
import model1_2 from '../images/jewelry/final/finalmodel1/model1_2.webp';
import model1_3 from '../images/jewelry/final/finalmodel1/model1_3.webp';

//Model 2 final 
import model2_1 from '../images/jewelry/final/finalmodel2/bracelet1_1.webp';
import model2_2 from '../images/jewelry/final/finalmodel2/bracelet1_2.webp';
import model2_3 from '../images/jewelry/final/finalmodel2/bracelet1_3.webp';

//Model 3 final 
import model3_1 from '../images/jewelry/final/finalmodel3/model2_1.webp';
import model3_2 from '../images/jewelry/final/finalmodel3/model2_2.webp';
import model3_3 from '../images/jewelry/final/finalmodel3/model2_3.webp';

//Model 4 final 
import model4_1 from '../images/jewelry/final/finalmodel4/boucle_oreille_1.webp';
import model4_2 from '../images/jewelry/final/finalmodel4/boucle_oreille_2.webp';
import model4_3 from '../images/jewelry/final/finalmodel4/boucle_oreille_3.webp';

//Model 5 final 
import model5_1 from '../images/jewelry/final/finalmodel5/collier1_1.webp';
import model5_2 from '../images/jewelry/final/finalmodel5/collier1_2.webp';
import model5_3 from '../images/jewelry/final/finalmodel5/collier1_3.webp';

//Model 5 final 
import model6_1 from '../images/jewelry/final/finalmodel6/bracelet2_1.webp';
import model6_2 from '../images/jewelry/final/finalmodel6/bracelet2_2.webp';
import model6_3 from '../images/jewelry/final/finalmodel6/bracelet2_3.webp';



const PortfolioSectionJewelery = () => {

    const portfolioContent = [
        // { id: 1, imgUrl: model1_1, imgCarousel: [model1_1, model1_2, model1_3, model1_4], videoCarousel: "https://www.youtube.com/watch?v=lgZnP8a80Bs&ab_channel=T%C3%A9l%C3%A9Crayon" },
        // { id: 1, imgUrl: bracelet_1, imgCarousel: [bracelet_1, bracelet_3, bracelet_4, bracelet_2] },
        // { id: 1, imgUrl: baguemodel2_1, imgCarousel: [baguemodel2_1, baguemodel2_2, baguemodel2_3] },
        { id: 1, imgUrl: model1_1, imgCarousel: [model1_1, model1_2, model1_3], videoCarousel: "model1_vdo.mp4" },
        { id: 2, imgUrl: model2_1, imgCarousel: [model2_1, model2_2, model2_3], videoCarousel: "model2_vdo.mp4" },
        { id: 3, imgUrl: model3_1, imgCarousel: [model3_1, model3_2, model3_3], videoCarousel: "model3_vdo.mp4" },
        { id: 4, imgUrl: model4_1, imgCarousel: [model4_1, model4_2, model4_3], videoCarousel: "model4_vdo.mp4" },
        { id: 6, imgUrl: model6_1, imgCarousel: [model6_1, model6_2, model6_3], videoCarousel: "model5_vdo.mp4" },
        { id: 5, imgUrl: model5_1, imgCarousel: [model5_1, model5_2, model5_3], videoCarousel: "model6_vdo.mp4" },
    ];

    return (
        <div className={styles.portfolioSection}>
            <UIWidth>
                <div className={styles.portfolioSectionContainer}>
                    <h2>Jewelry</h2>
                    {/* <Image src={model4} alt="my gif" height={300} width={500} /> */}

                    <Hr color="black"/>
                    <div className={styles.portfolioSectionPhotosContainer}>
                        {portfolioContent.map(({id, imgUrl, imgCarousel, videoCarousel}) => (
                            <PortfolioCard 
                                key={id}
                                image={imgUrl}
                                imgCarousel={imgCarousel}
                                videoCarousel={videoCarousel}
                                alt="Dorian walking in front of the sea"
                                type="jewelry"
                            />
                        ))}
                    </div>
                </div>
            </UIWidth>
        </div>
    );
};

export default PortfolioSectionJewelery;