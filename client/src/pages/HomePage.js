import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileCard from '../components/profileCard';
import FloatNavButton from '../components/buttons/floatNavButton'; /** linkLeft, linkRight */

import {PAGEROUTES} from '../App';



class HomePage extends Component {
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
    render() {
        return (
            <div className="HomePage">
                <div className="container" >
                    <div className="moving-background">
                        <div className="title">
                            <div className="title-line hide-on-small-only"></div>
                            <div className="title-text">ZYX's <div className="subtitle"> ReactRedux Website</div></div>
                            <div className="title-line hide-on-small-only"></div>

                        </div>
                    </div>
                    <div className="page-body">  <h3>Hello! my name is Zach Yu.</h3>
                        <h3> I am a fresh Full Stack Developer who just graduated from BCIT CIT program. </h3>
                        <div className="row">
                            <div className="col s8 offset-s2"><p className="hide-on-small-only">
                                My passion is to use technology based solutions, to help solve some real world challenges. <br />
                                I builded this website to show some of my skills.<br />
                                Play the button below to authorization my website by using google account <br />
                                You will find my old and newest portfolio projects in different fields on work page <br />
                                I also have a sendgrid auto mail form on contact page <br />
                            </p></div>
                        </div>
                        {this.renderContentGoogleOauth()}</div>
                    <FloatNavButton linkRight= {PAGEROUTES[1]} />


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

export default connect(mapStateToProps)(HomePage);