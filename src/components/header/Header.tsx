import styles from "./Header.module.scss";
import logo from "../../assets/main-logo1.svg";
import Button from "../UI/button/Button.tsx";

const Header: React.FC = () => {

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
        <header className={styles.header}>
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
                    <Button text="Связаться с нами" />
                </div>
            </div>
        </header>
    );
};

export default Header;