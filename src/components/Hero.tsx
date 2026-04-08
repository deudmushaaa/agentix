import styles from './Hero.module.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Smart Digital Infrastructure</span>
          </div>
          
          <h1 className={styles.title}>
            Empowering Progress, <br />
            <span className={styles.gradient}>Together.</span>
          </h1>
          
          <p className={styles.subtitle}>
            Agentix is a forward-thinking technology solutions company committed to reshaping the digital landscape 
            across Africa and beyond. We build cutting-edge ICT and engineering solutions tailored to your unique needs.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link href="#services" className={styles.primaryBtn}>
              Explore Solutions
            </Link>
            <Link href="#about" className={styles.secondaryBtn}>
              Learn Our Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
