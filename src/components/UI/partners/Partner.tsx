import React from "react";
import styles from "./Partner.module.scss";

type PartnerProps = {
    logo: string;
    alt: string;
};

const Partner: React.FC<PartnerProps> = ({ logo, alt }) => {
    return (
        <div className={styles.partner}>
            <img src={logo} alt={alt} className={styles.logo} />
        </div>
    );
};

export default Partner;
