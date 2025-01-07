"use client";
import styles from '../styles/_header.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import SVGIMG from '../images/logo-dorian.svg';
import UIWidth from './UIWidth';
import Link from 'next/link';
import Video from './Video';
import { usePathname } from 'next/navigation'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (e) => {
        e.preventDefault();
        
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
    };

    return (
    <div className={styles.uiMaxWidth}>
        <UIWidth>
            <nav className={styles.navbar}>
                <div className={styles.navbarDesktop}>
                <Link href="/">
                    <Image src={SVGIMG} alt={"Logo Dorian"} height={85}/>
                </Link>
                    <ul className={styles.navbarDesktopMenu}>
                        <li><Link href="/" onClick={pathname === '/' && handleScroll}>Home</Link></li>
                        <li><Link href="/#about-me" onClick={pathname === '/' && handleScroll}>About me</Link></li>
                        <li><Link href="/#portfolio" onClick={pathname === '/' && handleScroll}>Portfolio</Link></li>
                        <li><Link href="/#about" onClick={pathname === '/' && handleScroll}>Contact</Link></li>
                    </ul>
                </div>
                {/* Burger Menu */}
                <div className={`${styles.burger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>

                {/* Logo centré */}
                <div className={styles.logo}>
                    {/* <Image src={logo} alt="Logo" /> */}
                    <Link href="/">
                        <Image src={SVGIMG} alt={"Logo Dorian"}/>
                    </Link>
                </div>

                {/* Menu */}
                <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about-me">About me</a></li>
                    <li><a href="/#portfolio">Portfolio</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
        </UIWidth>
    </div>
    );
};

export default Header;