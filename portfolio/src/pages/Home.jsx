import styles from "./Home.module.css"
import { Navbar } from "./Navbar";

export default function Home() {
    return (
        <section id="home">
            <Navbar />
            <div className={styles.container}>
                <h1>Hi, I'm
                    <span className={styles.highlight}> Nathanael
                        Gospodinov </span></h1>
                <p>
                    Computer Science and Engineering student at OSU with experience in software engineering and full-stack development, passionate about creating intuitive, impactful applications.
                </p>
            </div>
        </section>
    );
}
