import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import {PAGEROUTES} from '../App';

class MenuPage extends Component  {

    renderMenu(){
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                const loginMenu = _.map(
                    PAGEROUTES, (page) => {
                        return <li key={page.title}><Link  to={page.path} className="animated-button victoria-one"> {page.title}</Link> </li>
                    })
                    .concat(<li key="login"><a href="/auth/google" className="animated-button victoria-one">Login With Google</a> </li>);
                return loginMenu;
            default:
                const logoutMenu = _.map(
                    PAGEROUTES, (page) => {
                        return <li key={page.title}><Link  to={page.path} className="animated-button victoria-one"> {page.title}</Link> </li>
                    })
                    .concat(<li key="logout"><a href="/api/logout" className="animated-button victoria-one">Logout</a> </li>);
                return logoutMenu;
        }
    }

    render(){
        return (
            <div>
                <ul>
                 {this.renderMenu()}
                 </ul>
            </div>
        );
    };
}

function mapStateToProps({ auth }) {
    //drog piece info from state
    return { auth };
}

export default  connect(mapStateToProps)( MenuPage );