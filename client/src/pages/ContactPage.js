import React from 'react';
import {Link} from 'react-router-dom';
const ContactPage = () => {

    return (
        <div className="ContactPage">
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="page-header">
                    <h1>Example page header <small>Subtext for header</small></h1>
                </div>

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