import React from 'react';
import { connect } from 'react-redux';
import formField from './formField';
import _ from 'lodash';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';



const SurveyFormReview = ({ onCancel, formValues,submitSurvey ,history }) => {
    //console.log(props)

    const reviewFields = _.map(formField, ({ name, label }) => {
        return (
            <div key={name}>
                <label> {label} </label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    });

    return (
        <div>
            <h5>Please confirm your form</h5>
            {reviewFields}
            <button className="yellow darken-3 white-text btn-flat"
                onClick={onCancel} > Back </button>

            <button onClick={()=>submitSurvey(formValues,history)} className="green white-text btn-flat right">
              Send Survey
                <i className="material-icon right">email</i>
            </button>
        </div>
    );
}
//this function would return value to the props 
function mapStateToProps(state) {
    //console.log(state);
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)( withRouter( SurveyFormReview));

