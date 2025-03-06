import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
    return (
        <button className={`${styles.button} ${className || ""}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
