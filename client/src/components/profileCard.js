import React from 'react';
import Payments from '../components/Payments';

const ProfileCard = (props) => {

    console.log(props.auth);
    return (
        <div className="profileCard">
           <Payments style={{display:'block'}} />
            <img src={props.auth.photo} alt="profile img"></img>
            <div className="profileCard-content">
                <p>{props.auth.name} <br />
                    {props.content} <br />
                    Credit:{props.auth.credits}
                    </p>

            </div>
        </div>);
}
// find value from state


export default ProfileCard;