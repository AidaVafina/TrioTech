import React from "react";
import styles from "./ProjectCard.module.scss";
import placeholder from "../../../assets/images/placeholder.png"; // Импортируем заглушку

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string; // необязательный
    className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, className }) => {
    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.imageContainer}>
                <img src={image || placeholder} alt={title} className={!image ? styles.placeholder : styles.image} />
            </div>
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
