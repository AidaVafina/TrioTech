import React from "react";
import styles from "./AboutUs.module.scss";
import StatCard from "../UI/cards/StatCard.tsx";
import Partner from "../UI/partners/Partner.tsx";

import grassLogo from "../../assets/logos/grass.png";
import gamersLogo from "../../assets/logos/true_gamers.png";
import bathLogo from "../../assets/logos/bath_space.png";
import bcsLogo from "../../assets/logos/bcs.png";
import gazpromLogo from "../../assets/logos/gazprombank.png";
import the86Logo from "../../assets/logos/the86.png";

const partners = [
    { logo: grassLogo, alt: "GRASS.SU" },
    { logo: gamersLogo, alt: "TRUE GAMERS" },
    { logo: bathLogo, alt: "БАННОЕ ПРОСТРАНСТВО" },
    { logo: bcsLogo, alt: "БКС" },
    { logo: gazpromLogo, alt: "ГАЗПРОМБАНК" },
    { logo: the86Logo, alt: "THE86" },
];

const repeatedPartners = Array(50).fill(partners).flat();

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
                    <StatCard value="30+" description="30+ успешно завершенных проектов за последний год."/>
                    <StatCard value="95%" description="95% клиентов возвращаются к нам с новыми задачами."/>
                    <StatCard value="5 раз" description="Ускоряем разработку в 5 раз благодаря четким процессам."/>
                    <StatCard value="100%" description="Гарантия: вы платите только за выполненные этапы."/>
                </div>
            </div>
            <div className={styles.partnersWrapper}>
                <div className={styles.partners}>
                    {repeatedPartners.map((partner, index) => (
                        <Partner key={index} logo={partner.logo} alt={partner.alt}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
