import styles from '../styles/_footer.module.scss';
import logoDorian from '../images/logo-dorian-white.svg';
import Image from 'next/image';
import UIWidth from './UIWidth';
import Link from 'next/link';

const Footer = () => (
    <footer className={styles.footerContainer} id="contact">
        <UIWidth>
            <Image src={logoDorian} alt={""} height={75}/>
            <p>Personal Information: </p>
            <p>Dorian Dunoyer | Contact: </p>
            <p>sinui7@naver.com | Address: boulevard Saint-Denis, 92400 Courbevoie</p>
            <p></p>
            <Link href="/legal-notice">
                <p className={styles.footerLink}>Legal Notice</p>
            </Link>
            <p className={styles.footerCopyright}>Copyright © Dorian.Dunoyer All rights reserved.</p>
        </UIWidth>
    </footer>
);

export default Footer;