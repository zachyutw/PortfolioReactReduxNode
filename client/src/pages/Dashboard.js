import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileCard from '../components/profileCard';
import SurveyList from '../components/surverys/SurveyList';
import FloatNavButton from '../components/buttons/floatNavButton';

import {PAGEROUTES} from '../App';

class Dashboard extends Component {
    renderContentGoogleOauth() {
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return <a href="/auth/google" className="btn social-signin google">Log in with Google+</a>;
            default:
                return <ProfileCard auth={this.props.auth} />
        }
    }

    renderNewSurveyButton(){
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return <FloatNavButton linkLeft={PAGEROUTES[1]} />;
            default:
                return (<div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </Link>
            </div>)
        }
    }

    render() {
        return (
            <div className="dashboard">
                <div className="container">
                <div className="row" style={{display:'block'}}>
                    <div className="col l4 m4 s12 ">
                        <div className="left"> {this.renderContentGoogleOauth()}</div>
                    </div>
                    <div className="col l8 m8 s12" >
                    <h2 >Collect feedback form your users </h2>
                    <h5> You need to comsume credit to create a survey </h5>
                    <h5>Fake credit number is 4242 4242 4242 4242 </h5>
                    <h5>Valid Date: need to after this month</h5>
                    </div>
                </div>
                <div className="row" style={{display:'block'}}>
                    <SurveyList />
                </div>    
                    {this.renderNewSurveyButton()}
                </div>
            </div>
        );
    }
}
// find value from state
function mapStateToProps({ auth }) {
    //drog piece info from state
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);
