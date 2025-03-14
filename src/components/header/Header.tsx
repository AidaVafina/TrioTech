import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/main-logo1.svg";
import Button from "../UI/button/Button.tsx";
import vk from "../../assets/header/vk.png"
import whatsup from "../../assets/header/whatsup.png"
import inst  from "../../assets/header/inst.png"
import tg from "../../assets/header/tg.png"

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 20;
            const elementPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="TRIOTECH Logo" />
                </div>
                <nav className={styles.nav}>
                    <a onClick={() => scrollToSection("services")}>Услуги</a>
                    <a onClick={() => scrollToSection("projects")}>Проекты</a>
                    <a onClick={() => scrollToSection("about")}>О компании</a>
                    <a onClick={() => scrollToSection("skills")}>Навыки</a>
                    <a onClick={() => scrollToSection("contacts")}>Контакты</a>
                </nav>
                <div className={styles.contactButton}>
                    {!scrolled ? (
                        <Button text="Связаться с нами" />
                    ) : (
                        <div className={styles.icons}>
                            <img src={vk} alt="Icon VK" />
                            <img src={inst} alt="Icon Inst" />
                            <img src={tg} alt="Icon tg" />
                            <img src={whatsup} alt="Icon WhatsUp" />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
