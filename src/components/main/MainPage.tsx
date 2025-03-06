import React from "react";
import styles from "./MainPage.module.scss";
import Button from "../UI/button/Button.tsx";

const MainPage: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1>Комплексная разработка <br/> IT-решений: от идеи <br/> до поддержки</h1>
                <p>
                    TrioTech — ваш надежный партнер в создании инновационных IT-решений. Мы
                    поможем вашему бизнесу масштабироваться, автоматизироваться и быть на
                    шаг впереди конкурентов.
                </p>
                <div className={styles.buttons}>
                    <Button text="Работать с нами" />
                    <button className={styles.secondaryButton}>Узнать больше</button>
                </div>
            </div>
        </section>
    );
};

export default MainPage;
