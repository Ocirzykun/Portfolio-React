import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.about} id="about">
            <div className={styles.aboutHeader}>
                <div className={styles.aboutIcon}><i className="bx bx-user"></i></div>
                <div>
                    <h2>About <span>Application Design Services</span></h2>
                </div>
            </div>
            <div className={styles.aboutContent}>
                <p>We are a team of passionate designers and developers who craft exceptional digital experiences. Our
                    approach combines creative vision with technical expertise to deliver products that stand out in the
                    market.</p>
                <p>With years of experience in the industry, we specialize in creating user-centered designs that drive
                    engagement and deliver results. Every project we take on is a reflection of our commitment to
                    excellence.</p>
                <p>Our mission is to help businesses transform their ideas into reality through innovative design and
                    cutting-edge technology solutions.</p>
            </div>
        </section>
    );
}
