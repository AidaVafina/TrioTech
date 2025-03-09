import React from "react";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                <div className={styles.carddesc}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
