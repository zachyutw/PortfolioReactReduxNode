import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import logo from '../imgs/icon-small.svg';

class Header extends Component {
    renderContentGoogleOauth() {
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return [
                    <li key="1"> <Payments /></li>,
                    <li key="2" style={{ margin: '0 15px' }}>
                        Credits: <b>{this.props.auth.credits}</b>
                    </li>,
                    <li key="3"> <a href="/api/logout">Logout</a></li>];
        }
    }
    renderNavDropDownList() {
        return [
            <li key="1"><Link to="/" className="animated-button victoria-one"> About </Link> </li>, 
            <li key="2"><Link to="/portfolio" className="animated-button victoria-one"> Work  </Link> </li>, 
            <li key="3"><Link to="/contact" className="animated-button victoria-one"> Contact  </Link> </li>
        ];
    }
    render() {
        //console.log(this.props);
        return (
            <div className="header">
                
                <nav>
                    <div className="nav-wrapper">
                         <ul id="nav-mobile" className="left  nav-menu" >
                            <li className="sub-menu-parent" tab-index="0">
                                <span><i className="material-icons" style={{fontSize:'50px'}}>menu</i></span>
                                <ul className="sub-menu">
                                    {this.renderNavDropDownList()}
                                    
                                </ul>
                            </li>
                        </ul>
                        <Link
                            to={this.props.auth ? '/surveys' : '/'}
                            className="right  brand-logo">
                            <img src={logo} className="App-logo" alt="logo" style={{height:'32px',width:'32px'}} />
                        </Link>
                       
                        <ul>

                        </ul>

                    </div>


                </nav>
            </div>
        );
    }
}
// find value from state
function mapStateToProps({ auth }) {
    //drog piece info from state
    return { auth };
}

export default connect(mapStateToProps)(Header);