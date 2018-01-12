import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {

    return (
        <div className="PortfolioPage">
            <div className="container" style={{ textAlign: 'center' }}>
                <h1>PortfolioPage</h1>

            </div>
            <div className="floating-button ">
                <span className="right toggle-text hide-on-small-only">
                    <span>Contact</span><Link to="/contact"><i className="material-icons" > keyboard_arrow_right </i></Link>
                </span>
            </div>
            <div className="floating-button ">
                <span className="left toggle-text hide-on-small-only">
                    <Link to="/"><i className="material-icons"> keyboard_arrow_left </i></Link><span>About</span>
                </span>
            </div>
        </div>

    );
}
export default PortfolioPage;