"use client";
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from '../styles/_header.module.scss';
import SVGIMG from '../images/logo-dorian.svg';
import UIWidth from './UIWidth';

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const menuRef = useRef(null); 
  const burgerRef = useRef(null); 

  const toggleMenu = (state) => {
    setIsOpen(state !== undefined ? state : !isOpen); // Permet de fermer ou ouvrir
  };

  const handleScroll = (e) => {
    e.preventDefault();
    
    const href = e.currentTarget.getAttribute('href');
    const targetId = href?.split('#')[1];  
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
      toggleMenu(false); // Ferme le menu après le défilement
    }
  };

  const handleOutsideClick = (e) => {
    if (
      menuRef.current && 
      !menuRef.current.contains(e.target) && 
      burgerRef.current && 
      !burgerRef.current.contains(e.target)
    ) {
      toggleMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.uiMaxWidth}>
      <UIWidth>
        <nav className={styles.navbar} ref={menuRef}>
          <div className={styles.navbarDesktop}>
            <Link href="/">
              <Image src={SVGIMG} alt="Logo Dorian" height={85} />
            </Link>
            <ul className={styles.navbarDesktopMenu}>
              <li>
                <Link href="/" onClick={pathname === '/' ? handleScroll : null}>Home</Link>
              </li>
              <li>
                <Link href="/#about-me" onClick={pathname === '/' ? handleScroll : null}>About me</Link>
              </li>
              <li>
                <Link href="/#portfolio" onClick={pathname === '/' ? handleScroll : null}>Portfolio</Link>
              </li>
              <li>
                <Link href="/#contact" onClick={pathname === '/' ? handleScroll : null}>Contact</Link>
              </li>
            </ul>
          </div>
          <div 
            className={`${styles.burger} ${isOpen ? styles.open : ''}`} 
            onClick={() => toggleMenu()} 
            ref={burgerRef}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.logo} onClick={() => router.push("/")}>
            <Image src={SVGIMG} alt="Logo Dorian" />
          </div>
          <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
            <li><a href="/" onClick={() => toggleMenu(false)}>Home</a></li>
            <li><a href="/#about-me" onClick={() => toggleMenu(false)}>About me</a></li>
            <li><a href="/#portfolio" onClick={() => toggleMenu(false)}>Portfolio</a></li>
            <li><a href="/#contact" onClick={() => toggleMenu(false)}>Contact</a></li>
          </ul>
        </nav>
      </UIWidth>
    </div>
  );
};

export default Header;
