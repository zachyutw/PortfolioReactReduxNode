import React from 'react';
import { connect } from 'react-redux';
import formField from './formField';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';



const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    //console.log(props)

    const reviewFields = _.map(formField, ({ name, label }) => {
        return (
            <div key={name}>
                <label className="surveyForm-field-label"> {label} </label>
                <div className="surveyForm-field-input">
                    {formValues[name]}
                </div>
            </div>
        )
    });

    return (
        <div className="surveyFormReview">

            <h3>Please confirm your Survey</h3>
            <div className="surveyForm-fields">
                {reviewFields}
            </div>
            <div className="surveyFormReview-buttons">
                <button className="btn waves-effect waves-light yellow darken-2"
                    onClick={onCancel} > <i className="material-icons left"> arrow_back</i> Back </button>

                <button onClick={() => submitSurvey(formValues, history)} className="btn waves-effect waves-light right">
                    Send Survey
                <i className="material-icons right">email</i>
                </button>
            </div>
        </div>
    );
}
//this function would return value to the props 
function mapStateToProps(state) {
    //console.log(state);
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

