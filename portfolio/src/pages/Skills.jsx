import SkillContainer from "../components/SkillContainer";
import styles from "./Skills.module.css"
import javascript from "../assets/javascript.png";
import java from "../assets/java.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import typescript from "../assets/typescript.png";
import cSharp from "../assets/cSharp.png";
import c from "../assets/c.png";
import python from "../assets/python.png";
import ruby from "../assets/ruby.png";

export default function Skills() {

    const javaScriptSkill = { skill: "Javascript", image: javascript };
    const javaSkill = { skill: "Java", image: java };
    const htmlSkill = { skill: "HTML", image: html };
    const cssSkill = { skill: "CSS", image: css };
    const reactSkill = { skill: "React", image: react };
    const gitSkill = { skill: "Git/Github", image: git };
    const typeScriptSkill = { skill: "Typescript", image: typescript };
    const cSharpSkill = { skill: "C#", image: cSharp };
    const cSkill = { skill: "C", image: c };
    const pythonSkill = { skill: "Python", image: python };
    const rubySkill = { skill: "Ruby", image: ruby };

    return (

        <section id="skills">
            <div className={styles.mainContainer}>
                <h1> My <span className={styles.highlight}> Skills </span></h1>
                <div className={styles.grid}>
                    <SkillContainer skill={javaScriptSkill} />
                    <SkillContainer skill={javaSkill} />
                    <SkillContainer skill={htmlSkill} />
                    <SkillContainer skill={cssSkill} />
                    <SkillContainer skill={reactSkill} />
                    <SkillContainer skill={gitSkill} />
                    <SkillContainer skill={typeScriptSkill} />
                    <SkillContainer skill={cSharpSkill} />
                    <SkillContainer skill={cSkill} />
                    <SkillContainer skill={pythonSkill} />
                    <SkillContainer skill={rubySkill} />
                </div>
            </div>
        </section>
    );
}