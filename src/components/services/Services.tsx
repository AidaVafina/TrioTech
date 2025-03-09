import React from "react";
import styles from "./Services.module.scss";

const Services: React.FC = () => {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <h2>блок услуг</h2>
            </div>
        </section>
    );
};

export default Services;
