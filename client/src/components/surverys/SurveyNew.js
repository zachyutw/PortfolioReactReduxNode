/** https://redux-form.com/7.2.0/examples/wizard/ 
 *  use redux-form wizard form
 *  SurveyForm would show the SurveyNew and SurveyReview
 */
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';


class SurveyNew extends Component {
    /** 
    constructor(props) {
        super(props);
        this.state = {formReview true}
    }
    */
    // A short cut for constructor
    state = {showFromReview: false}

    renderContent(){
        if(this.state.showFormReview){
            return <SurveyFormReview 
             onCancel={()=>this.setState({showFormReview:false})}
            />;
        }
        //send a callback to form change the state value 
        return <SurveyForm onSurveySubmit={() => this.setState({showFormReview:true})} />;
    }
    render() {
        return (
            <div className="surveyNew">
                {this.renderContent()}

            </div>
        );
    }
}

export default reduxForm({
    form:'surveyForm'
})(SurveyNew);