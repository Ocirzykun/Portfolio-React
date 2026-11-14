import styles from './CtaSection.module.css';

export default function CtaSection() {
    return (
        <section className={styles.ctaSection}>
            <h2>Let's Create an <span>Amazing</span></h2>
            <h2 className={styles.ctaHighlight}>Project Together!</h2>
            <div className={styles.ctaImages}>
                <div className={styles.ctaImg}><img src="images/AKO.jpg" alt="Project" /></div>
                <div className={styles.ctaImg}><img src="images/1.jpg" alt="Project" /></div>
                <div className={styles.ctaImg}><img src="images/AKO.jpg" alt="Project" /></div>
                <div className={styles.ctaImg}><img src="images/1.jpg" alt="Project" /></div>
            </div>
        </section>
    );
}
