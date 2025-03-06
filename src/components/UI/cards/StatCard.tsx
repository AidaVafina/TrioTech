import React from "react";
import styles from "./StatCard.module.scss";

interface StatCardProps {
    value: string;
    description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, description }) => {
    return (
        <div className={styles.statCard}>
            <h3>{value}</h3>
            <p>{description}</p>
        </div>
    );
};

export default StatCard;
