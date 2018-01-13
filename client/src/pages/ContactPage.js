import React from 'react';
import {Link} from 'react-router-dom';
const ContactPage = () => {

    return (
        <div className="ContactPage">
            <div className="container" style={{ textAlign: 'center' }}>
            <h1>PortfolioPage</h1>
            <h2>Coming soon!</h2>
            <a href="http://zachywp2017.yabi.me/wp" class="social_button flickr"><span><i class="fa fa-flickr"></i></span><p>WordPress Old Website</p></a>
            <a href="https://github.com/zachyutw" class="social_button github"><span><i class="fa fa-github"></i></span><p>Github</p></a>

        </div>
            <div className="floating-button ">
                <span className="left toggle-text hide-on-small-only">
                    <Link to="/portfolio"><i className="material-icons"> keyboard_arrow_left </i></Link><span>Work</span>
                </span>
            </div>
        </div>
    );
}
export default ContactPage;