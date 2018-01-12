import React from 'react';


const ProfileCard = (props)=>{

    return <div className="profileCard">
            <h3>{props.auth.user_name}</h3>          
            <img src={props.auth.photo} alt="profile img"></img>
            <h4> Welcome</h4>
           </div>
}
// find value from state


export default ProfileCard;