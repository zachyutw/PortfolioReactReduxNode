import React from 'react';
import _ from 'lodash';
import './portfolioCard.css';

const PortfolioCard = ({ content }) => {

    switch (content) {
        case null: return '';
        default:

            return (
                <div >
                    <div className="card-header" style={{backgroundImage: `url(${content.img})`,color:'black'}}>
                        <span className="card-title">
                            <h3>{content.title}</h3>
                        </span>
                    </div>
                    <span className="card-summary">
                        {content.desc}
                    </span>
                    <span className="card-meta">
                        Published: {content.project_date}
                    </span>
                </div>);
    }
}

export default PortfolioCard;