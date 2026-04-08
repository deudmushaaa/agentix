import styles from './Mission.module.css';

const Mission = () => {
  return (
    <section id="about" className={styles.mission}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.textBox}>
            <h2 className={styles.label}>Our Mission</h2>
            <p className={styles.text}>
              To deliver innovative, high-quality, and cost-effective ICT and engineering solutions 
              tailored to meet our clients' unique needs.
            </p>
          </div>
          <div className={styles.textBox}>
            <h2 className={styles.label}>Our Vision</h2>
            <p className={styles.text}>
              To be the leading enabler of smart, secure, and sustainable digital infrastructure in Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
