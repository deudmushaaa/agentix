import styles from './Services.module.css';
import Image from 'next/image';
import { NetworkIcon, SecurityIcon, CloudIcon, IoTIcon, ProjectIcon } from './ServiceIcons';

const services = [
  {
    title: 'Artificial Intelligence (AI) Solutions',
    description: 'We design and integrate AI-powered systems for data analysis, automation, and decision support. Predictive maintenance, chatbots, and more.',
    imageIcon: '/ai-icon.png'
  },
  {
    title: 'Network Consultancy',
    description: 'Expert network design, optimization, and troubleshooting services to improve connectivity, performance, and scalability.',
    component: NetworkIcon
  },
  {
    title: 'Cybersecurity & GRC',
    description: 'Building robust cybersecurity frameworks, risk assessments, policy development, and compliance audits to protect your digital assets.',
    component: SecurityIcon
  },
  {
    title: 'Cloud & Data Centre Hosting',
    description: 'Scalable, secure, and reliable cloud services and local data center hosting for public, private, and hybrid environments.',
    component: CloudIcon
  },
  {
    title: 'Internet of Things (IoT)',
    description: 'Smart building solutions, agricultural automation, asset tracking, and energy management through intelligent sensors and analytics.',
    component: IoTIcon
  },
  {
    title: 'Project Management',
    description: 'Comprehensive IT project management services ensuring successful delivery on time, within budget, and aligned with your goals.',
    component: ProjectIcon
  }
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Cutting-Edge Services</h2>
          <p className={styles.subtitle}>Reshaping the digital landscape with next-generation innovations.</p>
        </header>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.imageIcon ? (
                  <Image src={service.imageIcon} alt={service.title} width={48} height={48} className={styles.imageIcon} />
                ) : service.component ? (
                  <div className={styles.svgIcon}>
                    <service.component />
                  </div>
                ) : (
                  <div className={styles.iconPlaceholder}>
                    <div className={styles.dot}></div>
                  </div>
                )}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
