import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <h2>Let's <span>Connect</span> there</h2>
                <a href="#contact" className={styles.footerCta}>Hire Me</a>
            </div>
            <div className={styles.footerGrid}>
                <div className={styles.footerCol}>
                    <div className={styles.footerLogo}>Ocirzy</div>
                    <p>Passionate designer and developer creating impactful digital experiences.</p>
                    <div className={styles.footerSocial}>
                        <a href="https://www.facebook.com/Rickolodeonnn" title="Facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="https://www.instagram.com/ririricko/" title="Instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" title="TikTok"><i className="bx bxl-tiktok"></i></a>
                        <a href="#" title="LinkedIn"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
                <div className={styles.footerCol}>
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h4>Contact</h4>
                    <p>+63 981 518 8422</p>
                    <p>ocirzybetacura@gmail.com</p>
                    <p>Philippines</p>
                </div>
                <div className={styles.footerCol}>
                    <h4>Our Certifications</h4>
                    <div className={styles.certBadges}>
                        <div className={styles.certBadge}><i className="bx bx-badge-check"></i></div>
                        <div className={styles.certBadge}><i className="bx bx-badge-check"></i></div>
                        <div className={styles.certBadge}><i className="bx bx-badge-check"></i></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
