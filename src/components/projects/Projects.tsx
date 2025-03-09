import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../UI/project/ProjectCard";

import placeholder from "../../assets/images/placeholder.png";

const text = "Платформа для успешной реализации бизнес-идей и выгодных инвестиций"

const projects = [
    { title: "FINDELER", description: text, image: placeholder, className: styles.bigCard },
    { title: "FINDELER", description: text, image: placeholder, className: styles.smallCard },
    { title: "FINDELER", description: text, image: placeholder, className: styles.bigCard },   // <-- Большая карта теперь 3-я
    { title: "FINDELER", description: text, image: placeholder, className: styles.smallCard }  // <-- Маленькая карта теперь 4-я
];



const Projects: React.FC = () => {
    return (
        <section className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <button className={styles.category}>Наши проекты</button>
                    <h2>От идеи до готового продукта</h2>
                </div>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                        />
                    ))}
                </div>
                <button className={styles.moreButton}>Больше проектов</button>
            </div>
        </section>
    );
};

export default Projects;
