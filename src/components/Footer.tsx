import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brandInfo}>
            <h2 className={styles.logo}>Agentix</h2>
            <p className={styles.tagline}>Leading enabler of smart digital infrastructure in Africa.</p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.group}>
              <h4 className={styles.groupTitle}>Company</h4>
              <Link href="#about" className={styles.link}>About Us</Link>
              <Link href="#services" className={styles.link}>Services</Link>
              <Link href="#" className={styles.link}>Core Values</Link>
            </div>
            
            <div className={styles.group}>
              <h4 className={styles.groupTitle}>Contact</h4>
              <p className={styles.contactItem}><strong>Tel:</strong> +267-76877016</p>
              <p className={styles.contactItem}><strong>Email:</strong> info@agentixbotswana.com</p>
              <p className={styles.address}>
                Plot 50161, Block 5, Grand Park Business Centre, Building 6, Sec 20 Unit 4, Gaborone
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Agentix (Pty) Ltd. All rights reserved.</p>
          <div className={styles.socials}>
            {/* Social icons can go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
