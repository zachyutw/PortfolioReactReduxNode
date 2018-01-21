import React, { Component } from 'react';
import { connect } from 'react-redux';
import FloatNavButton from '../components/buttons/floatNavButton';
import MyMap from '../components/maps/myMap';


import { PAGEROUTES } from '../App';
import '../css/contactPage.css';
import '../components/surverys/Survey.css';




class ContactPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            zoom: 15,
            location: { lat: 49.1562784, lng: -122.7810177 }
        }
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    renderContactForm(){

        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return (<div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className=" col s12">
                        <label className="surveyForm-field-label"> Name: </label>
                        <input className="surveyForm-field-input "  id="_name" type="text"  style={{fontSize:'24px',width:'70%'}}/> 
                                          
                        </div>
    
                    </div>
                    <div className="row">
                        <div className="col s12">
                        <label className="surveyForm-field-label"> Email: </label>    
                        <input className="surveyForm-field-input "  id="_email" type="text"  style={{fontSize:'24px',width:'70%'}}/> 
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col s12">
                        <label className="surveyForm-field-label">Subject</label>
                        <input className="surveyForm-field-input "  id="_subject" type="text"  style={{fontSize:'24px',width:'70%'}}/> 
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col s12">
                        <textarea name="message" id="message" className="form textarea"  placeholder="Message" style={{height:'200px',width:'70%'}}></textarea>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light right" type="submit" name="action" >
                        (Butoon Not Working Now)
                        <i className="material-icons right">message</i>
                    </button>
                    
                </form>
                </div>)
                ;
            default:
                return (<div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className=" col s12">
                        <label className="surveyForm-field-label"> Name: {this.props.auth.name}</label>
                        <label className="surveyForm-field-label"> Email: {this.props.auth.contact_info.email}</label>                      
                        </div>
    
                    </div>
    
                    <div className="row">
                        <div className="col s12">
                        <label className="surveyForm-field-label">Subject</label>
                        <input className="surveyForm-field-input "  id="_subject" type="text"  style={{fontSize:'24px',width:'70%'}}/> 
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col s12">
                        <textarea name="message" id="message" className="form textarea"  placeholder="Message" style={{height:'200px',width:'70%'}}></textarea>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light right" type="submit" name="action" >
                        (Butoon Not Working Now)
                        <i className="material-icons right">message</i>
                    </button>
                    
                </form>
                </div>)
        }

    }


    render() {
        console.log(this.props.auth)
        return (
            <div className="ContactPage">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1>Contact Me</h1>


                    

                    {this.renderContactForm()}

                    <div className="row">
                        <h2> My location </h2>
                        <MyMap isMarkerShown
                            isMarkerShown={this.state.isMarkerShown}
                            onMarkerClick={this.handleMarkerClick}
                            zoom={this.state.zoom}
                            location={this.state.location}
                            containerElement={<div style={{ height: `300px` }} />}
                        />
                    </div>


                </div>
                <FloatNavButton linkLeft={PAGEROUTES[1]} />
            </div>
        );
    }
}


// find value from state
function mapStateToProps({ auth }) {
    //drog piece info from state
    return { auth };
}

export default connect(mapStateToProps)(ContactPage);