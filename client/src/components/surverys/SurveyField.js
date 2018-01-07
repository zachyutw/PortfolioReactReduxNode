/**
 * SurveyField contain a logic label and text input 
 */

 import React from 'react';

 export default ({input,label, meta:{error,touched} }) => {
     //console.log(props);
     //{...input} would pass all properties from props.input
     //console.log(meta);
     //touched is true and error has value
     
     return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom:'5px'}} />
            <div className="red-text" style={{marginBottom:'20px'}}  >
            {touched && error}
            </div>
           
        </div>
     );
 }