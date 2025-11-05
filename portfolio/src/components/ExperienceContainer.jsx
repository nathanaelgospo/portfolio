import styles from "./ExperienceContainer.module.css"

export default function ExperienceContainer({ experience }) {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {experience.title}
            </div>
            <div className={styles.company}>
                {experience.company}
                {experience.image && (
                    <img
                        src={experience.image}
                        alt={`${experience.company} logo`}
                        className={styles.companyLogo}
                    />
                )}            </div>
            <div className={styles.skillsContainer}>

                {experience.skills.map((skill, index) => (
                    <span key={index} className={styles.skillBadge}>{skill} </span>
                ))}

            </div>
            <div className={styles.description}>
                {experience.description}
            </div>

        </div>
    );

}