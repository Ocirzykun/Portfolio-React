import styles from './Services.module.css';
import shared from './shared.module.css';

const services = [
    { icon: 'bx bx-code-alt', title: 'Frontend Development', desc: 'Building responsive and performant web interfaces with modern technologies.' },
    { icon: 'bx bx-palette', title: 'UI/UX Design', desc: 'Creating intuitive and visually stunning user experiences.' },
    { icon: 'bx bx-mobile-alt', title: 'Mobile Development', desc: 'Developing cross-platform mobile applications.' },
    { icon: 'bx bx-layout', title: 'Wireframing', desc: 'Creating wireframes and prototypes for effective planning.' },
];

export default function Services() {
    return (
        <section className={styles.services} id="services">
            <div className={shared.sectionTitle}>
                <h2>Services <span>Include</span></h2>
            </div>
            <div className={styles.servicesGrid}>
                {services.map((s) => (
                    <div className={styles.serviceCard} key={s.title}>
                        <div className={styles.serviceIcon}><i className={s.icon}></i></div>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
