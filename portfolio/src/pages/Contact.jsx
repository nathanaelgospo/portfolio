import { LinkedInIcon, MailIcon, MapPinIcon } from "../assets/Icons";
import styles from "./Contact.module.css"

export default function Contact() {
    return (
        <section id="contact">
            <div className={styles.mainContainer}>
                <h1> Get in <span className={styles.highlight}> Touch </span></h1>
                <div className={styles.info}>
                    <h1>
                        Contact Information
                    </h1>
                    <div className={styles.contact}>
                        <div className={styles.icon}>
                            <MailIcon />
                        </div>
                        <a>gospodinov.3@osu.edu</a>

                    </div>
                    <div className={styles.contact}>
                        <div className={styles.icon}>
                            <LinkedInIcon />
                        </div>
                        <a href="https://www.linkedin.com/in/nathanael-gospodinov/">Nathanael-Gospodinov</a>

                    </div>
                    <div className={styles.contact}>
                        <div className={styles.icon}>
                            <MapPinIcon />
                        </div>
                        Columbus, Ohio
                    </div>
                </div>

            </div>
        </section>
    );
}