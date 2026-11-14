import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let current = '';
            sections.forEach((sec) => {
                if (window.scrollY >= sec.offsetTop - 120) {
                    current = sec.id;
                }
            });
            setActive(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onDocClick = (e) => {
            if (!e.target.closest(`.${styles.dropdown}`)) {
                setOpenDropdown(null);
            }
        };
        const onKey = (e) => {
            if (e.key === 'Escape') {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('click', onDocClick);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('click', onDocClick);
            document.removeEventListener('keydown', onKey);
        };
    }, []);

    const closeAll = () => {
        setMenuOpen(false);
        setOpenDropdown(null);
    };

    const toggleDropdown = (name) => (e) => {
        e.stopPropagation();
        setOpenDropdown((prev) => (prev === name ? null : name));
    };

    const menuClass = (name) => `${styles.dropdownMenu}${openDropdown === name ? ` ${styles.show}` : ''}`;
    const arrowClass = (name) => `${styles.dropdownArrow}${openDropdown === name ? ` ${styles.rotate}` : ''}`;
    const linkClass = (id) => (active === id ? styles.active : '');

    return (
        <header className={styles.header}>
            <a href="#home" className={styles.logo} onClick={closeAll}>Ocirzy</a>
            <input
                type="checkbox"
                id="menu-toggle"
                className={styles.menuToggle}
                checked={menuOpen}
                onChange={(e) => setMenuOpen(e.target.checked)}
            />
            <label htmlFor="menu-toggle" className={styles.menuBtn} aria-label="Toggle menu">
                <i className={`bx bx-menu ${styles.iconMenu}`}></i>
                <i className={`bx bx-x ${styles.iconClose}`}></i>
            </label>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li>
                        <a href="#home" className={linkClass('home')} onClick={closeAll}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className={linkClass('about')} onClick={closeAll}>About</a>
                    </li>
                    <li className={styles.dropdown}>
                        <button type="button" className={styles.dropdownBtn} onClick={toggleDropdown('services')}>
                            Services <i className={arrowClass('services')}></i>
                        </button>
                        <ul className={menuClass('services')}>
                            <li><a href="#services" onClick={closeAll}>Web Development</a></li>
                            <li><a href="#services" onClick={closeAll}>Mobile Development</a></li>
                            <li><a href="#services" onClick={closeAll}>Graphic Design</a></li>
                        </ul>
                    </li>
                    <li className={styles.dropdown}>
                        <button type="button" className={styles.dropdownBtn} onClick={toggleDropdown('industries')}>
                            Industries <i className={arrowClass('industries')}></i>
                        </button>
                        <ul className={menuClass('industries')}>
                            <li><a href="#industries" onClick={closeAll}>E-Commerce</a></li>
                            <li><a href="#industries" onClick={closeAll}>Healthcare</a></li>
                            <li><a href="#industries" onClick={closeAll}>Real Estate</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#portfolio" className={linkClass('portfolio')} onClick={closeAll}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className={linkClass('contact')} onClick={closeAll}>Contact</a>
                    </li>
                </ul>
            </nav>
            <a href="#contact" className={styles.headerCta}>Let's Talk</a>
        </header>
    );
}
