/** https://redux-form.com/7.2.0/examples/wizard/ 
 *  use redux-form wizard form
 */
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import _ from 'lodash';
//use reduxForm to communicate with our store
//Filed can help to render any form input

import validateEmails from '../../utilis/validateEmails'; 

import formFields from './formField';

class SurveyForm extends Component {
    renderFields(){
        
        return  _.map(formFields,({label,name})=>{
            return (
                <Field key={name} component={SurveyField} type="text" label={label} name={name} />
            );
        })
        
    }
    //<form onSubmit={this.props.handleSubmit(values=>{this.renderFields()})}
     //<Field type="text" name="surveyTitle" component="input" />
    render() {
        return (
            <div className="surveyForm">
               <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)   }>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button className="btn waves-effect waves-light right" type="submit" name="action">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}
//the validate function need to return a object to redux-form
function validate(values){
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');
    _.each(formFields, ({name, noValueError})=>{
        //special case
        if(!values[name]){
            errors[name] = noValueError;
        }
    });
   // console.log(values);
    
   
    return errors;
}
// first argument accept one option with a property form
//Redux-form helper
export default reduxForm(
 { 
     //validate function would recive all values from reduxForm
     validate,
     form: 'surveyForm',
     //persisting form value
     destroyOnUnmount:false
}
)( SurveyForm);