import styles from './Portfolio.module.css';

const projects = [
    {
        icon: 'bx bx-laptop',
        tag: 'Frontend',
        title: 'Personal Portfolio Website',
        desc: 'A fully responsive portfolio website built with HTML, CSS, and JavaScript.',
        links: [
            { href: '#', title: 'Live Demo', icon: 'bx bx-link-external' },
            { href: '#', title: 'GitHub', icon: 'bx bxl-github' },
        ],
    },
    {
        icon: 'bx bx-store',
        tag: 'Web Design',
        title: 'E-Commerce Landing Page',
        desc: 'A modern e-commerce homepage with product showcase and responsive layout.',
        links: [
            { href: '#', title: 'Live Demo', icon: 'bx bx-link-external' },
            { href: '#', title: 'GitHub', icon: 'bx bxl-github' },
        ],
    },
    {
        icon: 'bx bx-mobile-alt',
        tag: 'UI/UX',
        title: 'Mobile App UI Design',
        desc: 'A clean and minimal mobile app UI design for a productivity tool.',
        links: [
            { href: '#', title: 'Live Demo', icon: 'bx bx-link-external' },
            { href: '#', title: 'Figma', icon: 'bx bxl-figma' },
        ],
    },
];

export default function Portfolio() {
    return (
        <section className={styles.portfolio} id="portfolio">
            <div className={styles.portfolioGrid}>
                {projects.map((p) => (
                    <div className={styles.portfolioCard} key={p.title}>
                        <div className={styles.portfolioThumb}><i className={p.icon}></i></div>
                        <div className={styles.portfolioInfo}>
                            <span className={styles.tag}>{p.tag}</span>
                            <h4>{p.title}</h4>
                            <p>{p.desc}</p>
                            <div className={styles.portfolioLinks}>
                                {p.links.map((link) => (
                                    <a href={link.href} title={link.title} key={link.title}>
                                        <i className={link.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
