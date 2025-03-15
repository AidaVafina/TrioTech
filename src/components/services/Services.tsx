import React from "react";
import styles from "./Services.module.scss";
import ServiceCardBlue from "../UI/services/blue/ServiceCardBlue.tsx";
import image from "../../assets/images/service-card.png"
import image2 from "../../assets/images/service-card-grey.png"
import ServiceCardLight from "../UI/services/light/ServiceCardLight.tsx";

const Services: React.FC = () => {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <button className={styles.category}>Услуги</button>
                    <h2>Предлагаем решения профессионального уровня</h2>
                </div>
                <div className={styles.cards}>
                    <ServiceCardBlue
                        title="Дизайн и UX"
                        description="Профессиональная цифровая упаковка для бизнеса"
                        tools={["Figma", "Sketch", "3D", "Иллюстрации", "AI"]}
                        imageSrc= {image}
                    />
                    <ServiceCardBlue
                        title="Дизайн и UX"
                        description="Профессиональная цифровая упаковка для бизнеса"
                        tools={["Figma", "Sketch", "3D", "Иллюстрации", "AI"]}
                        imageSrc= {image}
                    />
                    <ServiceCardLight
                        title="Дизайн и UX"
                        description="Профессиональная цифровая упаковка для бизнеса"
                        tools={["Figma", "Sketch", "3D", "Иллюстрации", "AI"]}
                        imageSrc= {image2}
                    />

                    <ServiceCardLight
                        title="Дизайн и UX"
                        description="Профессиональная цифровая упаковка для бизнеса"
                        tools={["Figma", "Sketch", "3D", "Иллюстрации", "AI"]}
                        imageSrc= {image2}
                    />

                    <ServiceCardLight
                        title="Дизайн и UX"
                        description="Профессиональная цифровая упаковка для бизнеса"
                        tools={["Figma", "Sketch", "3D", "Иллюстрации", "AI"]}
                        imageSrc= {image2}
                    />

                    <ServiceCardLight
                        title="Дизайн и UX"
                        description="Профессиональная цифровая упаковка для бизнеса"
                        tools={["Figma", "Sketch", "3D", "Иллюстрации", "AI"]}
                        imageSrc= {image2}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
