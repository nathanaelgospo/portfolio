import styles from "./SkillContainer.module.css"

export default function SkillContainer({ skill }) {

    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <img
                    src={skill.image}
                    alt={`${skill.skill} logo`}
                    className={styles.image}
                />
                <h2>{skill.skill}</h2>
            </div>
        </div>
    )
}