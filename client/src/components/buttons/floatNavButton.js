import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './floatNavButton.css';


function renderFloatButtonRight(link) {
    
    if (!_.isEmpty(link.linkRight)) {
        
        return (<div className="floating-nav-arrow-btn ">
            <span className="right toggle-text hide-on-small-only">
                <span>{link.linkRight.title}</span><Link to={link.linkRight.path}><i className="material-icons" > keyboard_arrow_right </i></Link>
            </span>
        </div>);
    }
    else {
        //console.log("right empty",link);
        return <div></div>
    }
}
function renderFloatButtonLeft(link) {
    if (!_.isEmpty(link.linkLeft)) {
        
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

const FloatNavButton = (props) => {
   
    return (
        <div>
            
             <div>   
                 {renderFloatButtonLeft(props)}
            </div>
            <div>
                {renderFloatButtonRight(props)}
             </div>
        </div>
    );
}

export default FloatNavButton;

