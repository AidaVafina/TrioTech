import React from "react";
import styles from "./Partner.module.scss";

type PartnerProps = {
    name: string;
};

const Partner: React.FC<PartnerProps> = ({ name }) => {
    return <span className={styles.partner}>{name}</span>;
};

export default Partner;
