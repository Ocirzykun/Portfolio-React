import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [sent, setSent] = useState(false);
    const formRef = useRef(null);
    const timerRef = useRef(null);

    useEffect(() => () => clearTimeout(timerRef.current), []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setSent(false);
            if (formRef.current) formRef.current.reset();
        }, 3000);
    };

    return (
        <section className={styles.contact} id="contact">
            <div>
                <div className={styles.contactCard}>
                    <h2>Let's Talk for <span>Your</span></h2>
                    <h2 className={styles.contactHighlight}>Next Projects</h2>
                    <p className={styles.contactEmail}>Email: <strong>ocirzybetacura@gmail.com</strong></p>
                </div>
            </div>
            <div className={styles.contactRight}>
                <h2>Contact <span>Me</span></h2>
                <form className={styles.contactForm} id="contactForm" ref={formRef} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="contactName">Your Name *</label>
                            <input type="text" id="contactName" name="name" placeholder="Enter Your Name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="contactEmail">Email *</label>
                            <input type="email" id="contactEmail" name="email" placeholder="Enter Email Address" required />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="contactPhone">Phone *</label>
                            <input type="tel" id="contactPhone" name="phone" placeholder="Enter Phone Number" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="contactDesignation">City, Designation *</label>
                            <input type="text" id="contactDesignation" name="designation"
                                placeholder="Enter Your Designation" required />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="contactBudget">Budget Range (USD) *</label>
                            <input type="text" id="contactBudget" name="budget" placeholder="$500 - $1000" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="contactCountry">Country *</label>
                            <input type="text" id="contactCountry" name="country" placeholder="Enter Your Country" required />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="contactMessage">Your Message *</label>
                        <textarea id="contactMessage" name="message" placeholder="Write Your Message..."
                            required></textarea>
                    </div>
                    <button type="submit" className={styles.btnSubmit} style={sent ? { background: '#22c55e' } : undefined}>
                        <i className={sent ? 'bx bx-check' : 'bx bx-send'}></i> {sent ? 'Message Sent!' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}
