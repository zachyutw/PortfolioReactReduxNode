import React from 'react';
import './portfolioCard.css';

const PortfolioCard = ({ content }) => {

    switch (content) {
        case null: return '';
        default:

            return (
                <div className="p-card">
                    <div className="p-card-header" style={{backgroundImage: `url(${content.img})`}}>
                        <span className="p-card-title">
                            <h3>{content.title}</h3>
                        </span>
                    </div>
                    <span className="p-card-meta">
                        Published: {content.project_date}
                    </span>
                </div>);
    }
}

export default PortfolioCard;