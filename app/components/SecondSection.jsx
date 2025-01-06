"use client";
import Image from 'next/image';
import styles from '../styles/_second-section.module.scss';
import dorianDiplome from '../images/diplomedorian.png';
import UIWidth from './UIWidth';
import Hr from './Hr';

const SecondSection = () => (
    <div className={styles.secondSection} id="about-me">
        <UIWidth>
            <div className={styles.secondSectionContainer}>
                <h2>About me</h2>
                <Hr color="white"/>
                <p>
                    My passion for 3D, which began at a very young age, has continually grown, allowing me to discover an infinite world of creative possibilities that I still explore with enthusiasm. To me, it represents the future of visual creation, and this is what fuels my passion every day. My goal is to take part in projects that merge art and technology. I aim not only to refine my technical skills but also to develop a unique visual style that could leave a impact on the industry. This passion recently led me to earn a master’s degree in Game Art.
                </p>
                <a 
                    className={styles.secondSectionDiplome}
                    href="https://www.smartcertificate.com/SmartDiploma/Default.aspx?1%7ccd9be495-d66e-49df-a3c7-a8650a8bbd9f%7c42a84ceb-86f5-46e0-bb96-7d371a2dc8ea#/"
                    target="_blank" rel="noopener noreferrer"
                >
                    <span className={styles.hoverText}>See more</span>   
                    <Image 
                        src={dorianDiplome} 
                        alt="Dorian walking in front of the sea"
                        width={180}
                    />   
                </a>
            </div>
        </UIWidth>
    </div>
);

export default SecondSection;