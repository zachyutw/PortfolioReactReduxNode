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
        <div >
            <label className="surveyForm-field-label">{label}</label>
            <input className="surveyForm-field-input" {...input}  />
            <div className="red-text surveyForm-field-error"   >
            {touched && error}
            </div>
           
        </div>
     );
 }