import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import _ from 'lodash';
import svg_paths from '../imgs/icon-small-svg-paths';

const PAGEROUTES = [
    { path: '/', title: 'About' },
    { path: '/portfolio', title: 'Work' },
    { path: '/contact', title: 'Contact' },

];

class ToogleMenuBtn extends Comment {
    constructor(props) {
        super(props);
        this.state = { menu: false };
        this.displayMenu = this.displayMenu.bind(this);
    }
    displayMenu() {
        console.log(this.state.menu);
        this.setState({ menu: !this.state.menu });
    }

    render() {
        return (
            <button onClick={this.displayMenu}> btn </button>

        );
    }
}



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: false };
        this.showMenuList = this.showMenuList.bind(this);
    }
    showMenuList() {
        console.log(this.state.showMenu);
        this.setState({ showMenu: !this.state.showMenu });
    }
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

    renderSvgPaths() {
        const paths = _.map(svg_paths, (path, i) => <path d={path} key={i}></path>);
        return paths;
    }
    renderNavDropDownList() {
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                const loginMenu = _.map(
                    PAGEROUTES, (page) => {
                        return <li key={page.title}><Link onClick={this.showMenuList} to={page.path} className="animated-button victoria-one"> {page.title}</Link> </li>
                    })
                    .concat(<li key="login"><a href="/auth/google" className="animated-button victoria-one">Login With Google</a> </li>);
                return loginMenu;
            default:
                const logoutMenu = _.map(
                    PAGEROUTES, (page) => {
                        return <li key={page.title}><Link onClick={this.showMenuList} to={page.path} className="animated-button victoria-one"> {page.title}</Link> </li>
                    })
                    .concat(<li key="logout"><a href="/api/logout" className="animated-button victoria-one">Logout</a> </li>);
                return logoutMenu;
        }
    }
    render() {
        //console.log(this.props);
        return (
            <div className="container">
                <div className="header ">
                    <nav>
                        <div className="nav-wrapper">
                            <ul id="nav-mobile" className="left  nav-menu" >
                                <li className="sub-menu-parent" tab-index="0">
                                    <span>
                                        <i onClick={this.showMenuList} className="material-icons" style={{ fontSize: '50px' }}>
                                            menu
                                        </i>
                                    </span>
                                    <ul className={this.state.showMenu ? 'sub-menu-div-visible' : 'sub-menu-div-hidden'}>
                                        {this.renderNavDropDownList()}
                                    </ul>
                                </li>
                            </ul>
                            <div>
                                <Link to={this.props.auth ? '/contact' : '/'} className=" right  brand-logo ">
                                    <svg className="App-logo" version="1.0" xmlns="http://www.w3.org/2000/svg" width="91.000000pt" height="91.000000pt" viewBox="0 0 91.000000 91.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,91.000000) scale(0.100000,-0.100000)"
                                            stroke="none">
                                            {this.renderSvgPaths()}
                                        </g></svg>
                                </Link>
                            </div>
                        </div>
                    </nav>
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

export default connect(mapStateToProps)(Header);