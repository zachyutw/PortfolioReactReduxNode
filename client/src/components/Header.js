import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import logo from '../imgs/icon-small.svg';
import _ from 'lodash';

const PAGEROUTES = [
    { path: '/', title: 'About' },
    { path: '/portfolio', title: 'Work' },
    { path: '/contact', title: 'Contact' },

];


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
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                const loginMenu = _.map(
                    PAGEROUTES, (page) => {
                        return <li key={page.title}><Link to={page.path} className="animated-button victoria-one"> {page.title}</Link> </li>
                    })
                    .concat(<li key="login"><a href="/auth/google" className="animated-button victoria-one">Login With Google</a> </li>);
                return loginMenu;
            default:
                const logoutMenu = _.map(
                    PAGEROUTES, (page) => {
                        return <li key={page.title}><Link to={page.path} className="animated-button victoria-one"> {page.title}</Link> </li>
                    })
                    .concat(<li key="logout"><a href="/api/logout" className="animated-button victoria-one">Logout</a> </li>);
                return logoutMenu;
        }
    }
    render() {
        //console.log(this.props);
        return (
            <div className="header">

                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="left  nav-menu" >
                            <li className="sub-menu-parent" tab-index="0">
                                <span><i className="material-icons" style={{ fontSize: '50px' }}>menu</i></span>
                                <ul className="sub-menu">
                                    {this.renderNavDropDownList()}

                                </ul>
                            </li>
                        </ul>
                        <div>
                            <Link
                                to={this.props.auth ? '/contact' : '/'}
                                className=" right  brand-logo ">
                                <img src={logo} className="App-logo" alt="logo" />
                            </Link>
                        </div>
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