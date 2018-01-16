import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './floatNavButton.css';


const renderFloatButtonRight = (link) => {
    if (!_.isEmpty(link)) {
        return (<div className="floating-nav-arrow-btn ">
            <span className="right toggle-text hide-on-small-only">
                <span>{link.linkRight.title}</span><Link to={link.linkRight.path}><i className="material-icons" > keyboard_arrow_right </i></Link>
            </span>
        </div>);
    }
    else {
        return <div></div>
    }
}
const renderFloatButtonLeft = (link) => {
    if (!_.isEmpty(link)) {
        return (
            <div className="floating-nav-arrow-btn ">
                <span className="left toggle-text hide-on-small-only">
                    <Link to={link.linkLeft.path}><i className="material-icons"> keyboard_arrow_left </i></Link><span>{link.linkLeft.title}</span>
                </span>
            </div>
        );
    }else {
        return <div></div>
    }
}

const FloatNavButton = (linkLeft = {}, linkRight = {}) => {
    return (
        <div>
            {renderFloatButtonRight(linkLeft)}
            {renderFloatButtonLeft(linkRight)}
        </div>
    );
}

export default FloatNavButton;

