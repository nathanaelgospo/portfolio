import ExperienceContainer from "../components/ExperienceContainer";
import styles from "./Experience.module.css"
import osuLogo from "../assets/osu.jpeg";
import bbiLogo from "../assets/bbi.svg";
export default function Experience() {
    const bbiExperience = {
        company: "BBI Logistics",
        title: "Software Engineer Intern",
        description: "Spearheaded the development of an interactive office mapping system and internal analytics dashboard using React.js on the frontend and C# on the backend to manage desk assignments and visualize ticketing data.",
        skills: ["React", "C# .NET", "Git", "HTML", "CSS"],
    };
    const skywideLogicExperience = {
        company: "Skywide Logic",
        title: "Full-Stack Developer Intern",
        description: "Led the development of a sophisticated full-stack application for resume analysis leveraging Python, HTML/CSS, and Django following Agile methodologies to ensure iterative and continuous improvement.",
        skills: ["Python", "Django", "OpenAI API", "HTML", "CSS"]
    };
    const osuTeachingAssitantExperience = {
        company: "The Ohio State University",
        title: "Undergraduate Teaching Assistant",
        description: "Offer timely and constructive feedback to enhance student learning and academic performance. Maintain regular office hours to provide personalized support and guidance, ensuring student success.",
        skills: ["Java", "OOP", "Data Structures", "Grading", "Communication"],
    };

    return (
        <secton id="experience">
            <div className={styles.mainContainer}>
                <h1> My <span className={styles.highlight}> Experience </span></h1>
                <div className={styles.grid}>
                    <ExperienceContainer experience={bbiExperience} />
                    <ExperienceContainer experience={skywideLogicExperience} />
                    <ExperienceContainer experience={osuTeachingAssitantExperience} />
                </div>
            </div>
        </secton>
    );
}