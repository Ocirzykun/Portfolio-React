import styles from './Industries.module.css';
import shared from './shared.module.css';

const industries = [
    { icon: 'bx bx-cart', title: 'E-Commerce', desc: 'Online shopping platforms and marketplace solutions.' },
    { icon: 'bx bx-health', title: 'Healthcare', desc: 'Medical apps, telehealth, and patient management systems.' },
    { icon: 'bx bx-building-house', title: 'Real Estate', desc: 'Property listings, virtual tours, and real estate platforms.' },
    { icon: 'bx bx-restaurant', title: 'Education', desc: 'E-learning platforms and educational tools.' },
    { icon: 'bx bx-dollar', title: 'Finance', desc: 'Banking apps, fintech solutions, and financial tools.' },
    { icon: 'bx bx-food-menu', title: 'Hospitality', desc: 'Hotel booking, restaurant ordering, and travel apps.' },
    { icon: 'bx bx-run', title: 'Fitness', desc: 'Workout trackers, health monitoring, and fitness platforms.' },
    { icon: 'bx bx-football', title: 'Sports', desc: 'Sports analytics, team management, and fan engagement apps.' },
];

export default function Industries() {
    return (
        <section className={styles.industries} id="industries">
            <div className={shared.sectionTitle}>
                <h2>Top 8 Industries <span>We Cover in App Design</span></h2>
            </div>
            <div className={styles.industriesGrid}>
                {industries.map((item) => (
                    <div className={styles.industryCard} key={item.title}>
                        <div className={styles.industryIcon}><i className={item.icon}></i></div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
