import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <Link href="/" className={styles.logoLink}>
            <Image 
              src="/logo.png" 
              alt="Agentix Logo" 
              width={120} 
              height={40} 
              className={styles.logo}
            />
          </Link>
        </div>
        
        <div className={styles.navLinks}>
          <Link href="#services" className={styles.link}>Services</Link>
          <Link href="#about" className={styles.link}>About</Link>
          <Link href="#contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.actions}>
          <Link href="mailto:info@agentixbotswana.com" className={styles.cta}>
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
