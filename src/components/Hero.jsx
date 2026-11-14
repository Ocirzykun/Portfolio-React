import { useState } from 'react';
import styles from './Hero.module.css';

const filters = [
    { id: 'all', label: 'Web Design' },
    { id: 'app', label: 'App Design' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'wireframe', label: 'Wireframe' },
];

export default function Hero() {
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <section className={styles.home} id="home">
            <p className={styles.heroSubtitle}>Portfolio - Services</p>
            <h1>Service <span>Details</span></h1>
            <p className={styles.heroDesc}>Passionate about creating impactful digital experiences through design, development, and
                creative strategy.</p>

            <div className={styles.filterBar}>
                {filters.map((f) => (
                    <button
                        key={f.id}
                        type="button"
                        className={activeFilter === f.id ? `${styles.filterBtn} ${styles.active}` : styles.filterBtn}
                        onClick={() => setActiveFilter(f.id)}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <div className={styles.heroImages}>
                <div className={styles.heroImgCard}>
                    <img src="images/AKO.jpg" alt="Project showcase" />
                </div>
                <div className={styles.heroImgCard}>
                    <img src="images/1.jpg" alt="Project showcase" />
                </div>
                <div className={styles.heroImgCard}>
                    <img src="images/AKO.jpg" alt="Project showcase" />
                </div>
            </div>
        </section>
    );
}
