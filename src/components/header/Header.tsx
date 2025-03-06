import styles from "./Header.module.scss";
import logo from "../../assets/main-logo1.svg";
import Button from "../UI/button/Button.tsx";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src= {logo} alt="TRIOTECH Logo" />
                </div>
                <nav className={styles.nav}>
                    <a href="#services">Услуги</a>
                    <a href="#projects">Проекты</a>
                    <a href="#about">О компании</a>
                    <a href="#skills">Навыки</a>
                    <a href="#contacts">Контакты</a>
                </nav>
                <div className={styles.contactButton}>
                <Button text="Связаться с нами" />
                </div>
            </div>
        </header>
    );
};

export default Header;