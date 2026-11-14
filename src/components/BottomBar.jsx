import styles from './BottomBar.module.css';

export default function BottomBar() {
    return (
        <div className={styles.bottomBar}>
            <div className={styles.bottomLeft}>
                <span>Designed by <span className={styles.green}>Ocirzy</span></span>
                <span>&copy; Copyright 2026. All Rights Reserved.</span>
            </div>
            <div className={styles.bottomSocial}>
                <a href="https://www.facebook.com/Rickolodeonnn"><i className="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/ririricko/"><i className="bx bxl-instagram"></i></a>
                <a href="#"><i className="bx bxl-tiktok"></i></a>
                <a href="#"><i className="bx bxl-linkedin"></i></a>
                <a href="#"><i className="bx bxl-youtube"></i></a>
            </div>
        </div>
    );
}
