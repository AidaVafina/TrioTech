import React from "react";
import styles from "./AboutUs.module.scss";
import StatCard from "../UI/cards/StatCard.tsx";
import Partner from "../UI/partners/Partner.tsx";

const AboutUs: React.FC = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.text}>
                <h2 className={styles.logo}>[ TRIOTECH ]</h2>
                <p className={styles.description}>
                    Команда профессионалов с более чем 5-летним опытом разработки IT-решений.
                    Мы верим, что каждая идея заслуживает воплощения в жизнь.
                </p>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stats}>
                        <StatCard value="30+" description="30+ успешно завершенных проектов за последний год."/>
                        <StatCard value="95%" description="95% клиентов возвращаются к нам с новыми задачами."/>
                        <StatCard value="5 раз" description="Ускоряем разработку в 5 раз благодаря четким процессам."/>
                        <StatCard value="100%" description="Гарантия: вы платите только за выполненные этапы."/>
                    </div>
                </div>
                <div className={styles.partners}>
                    <Partner name="GRASS.SU"/>
                    <Partner name="TRUE GAMERS"/>
                    <Partner name="БАННОЕ ПРОСТРАНСТВО"/>
                    <Partner name="БКС"/>
                    <Partner name="ГАЗПРОМБАНК"/>
                    <Partner name="THE86"/>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
