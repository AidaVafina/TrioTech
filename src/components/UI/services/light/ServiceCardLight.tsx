import React from "react";
import styles from "./ServiceCardLight.module.scss";

type ServiceCardProps = {
    title: string;
    description: string;
    tools: string[];
    imageSrc: string;
};

const ServiceCardLight: React.FC<ServiceCardProps> = ({ title, description, tools, imageSrc}) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.tools}>
                        {tools.map((tool, index) => (
                            <span key={index} className={styles.tool}>{tool}</span>
                        ))}
                    </div>
                    <img src={imageSrc} alt={title} className={styles.image}/>
                </div>
            </div>
            <button className={styles.button}>Подробнее</button>
        </div>
    );
};

export default ServiceCardLight;
