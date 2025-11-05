import styles from "./Navbar.module.css"
import { useDarkMode } from "../hooks/DarkMode";
import { LightModeIcon, DarkModeIcon } from "../assets/Icons";
import { useState } from "react";


export function Navbar() {
    const [theme, setTheme] = useDarkMode();
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const val = (
        <><div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#about"> About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </div>
        </>);
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <p>Nathanael's</p>
                <p>Portfolio</p>
            </div>
            <div className={styles.linkContainer}>
                {val}
            </div>
            <div
                className={`${styles.hamburger} ${sideBarOpen ? styles.active : ""}`}
                onClick={() => setSideBarOpen(!sideBarOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`${styles.sideBarOpen} ${sideBarOpen ? styles.active : ""}`}>
                {val}
            </div>

            <button
                type="button" className={styles.darkModeToggle} onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                }>
                {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}

            </button>

        </div >
    );
}