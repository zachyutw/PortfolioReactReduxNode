import React from 'react';


const ProfileCard = (props) => {

    return (<div className="profileCard">
        <img src={props.auth.photo} alt="profile img"></img>
        <div className="profileCard-content"> 
        <p>{props.auth.name} <br/>
            Welcome</p>
            </div>
    </div>);
}
// find value from state


export default ProfileCard;