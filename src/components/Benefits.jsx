import styles from './Benefits.module.css';
import shared from './shared.module.css';

const benefits = [
    'Professional and modern design solutions tailored to your business needs.',
    'Enhanced user experience through research-driven design methodologies.',
    'Responsive and cross-platform compatible solutions for maximum reach.',
    'Scalable architecture that grows with your business requirements.',
    'Timely delivery and ongoing support throughout the project lifecycle.',
];

export default function Benefits() {
    return (
        <section className={styles.benefits}>
            <div className={shared.sectionTitle}>
                <h2>Services <span>Benefits</span></h2>
            </div>
            <div className={styles.benefitsList}>
                {benefits.map((text) => (
                    <div className={styles.benefitItem} key={text}>
                        <i className="bx bx-check-circle"></i>
                        <span>{text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
