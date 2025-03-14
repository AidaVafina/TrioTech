import React from "react";
import "./ServiceCard.scss";

type ServiceCardProps = {
    title: string;
    description: string;
    tools: string[];
    image: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, tools, image }) => {
    return (
        <div className="service-card">
            <div className="service-card__header">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="service-card__footer">
                <div className="service-card__tools">
                    {tools.map((tool, index) => (
                        <span key={index} className="tool">{tool}</span>
                    ))}
                </div>
                <div className="service-card__image">
                    <img src={image} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
