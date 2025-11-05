import styles from "./About.module.css"
import MyImage from "../assets/headshot.jpg";
export default function About() {

    return (
        <section id="about">
            <div className={styles.mainContainer}>
                <h1> About <span className={styles.highlight}> Me </span></h1>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h3>Aspiring Software Engineer & Full-Stack Dev</h3>
                        <p>
                            I am a third-year Computer Science and Engineering student at The Ohio State University. Over the past 2.5 years, I’ve immersed myself in learning opportunities both inside and outside the classroom, gaining hands-on experience in software development and system design.
                            <br />

                            <br />
                            I’ve built scalable projects that combine intuitive front-end solutions using React.js and HTML/CSS with robust back-end architectures powered by C# .NET and Django. I’m passionate about developing technologies that create meaningful impact solutions that extend beyond functionality to improve everyday experiences.
                        </p>
                    </div>
                    <div className={styles.image}>
                        <img src={MyImage} alt="Nathanael Gospodinov Headshot" />
                    </div>
                </div>
            </div>
        </section>
    );

}