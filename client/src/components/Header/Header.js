import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IconSmallSvgReact from '../../imgs/icon-small-svg-react';



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
                                        <Link onClick={this.showMenuList} to={this.state.showMenu ? '/' : '/menu'}  >
                                            <i className="material-icons" style={{ fontSize: '50px' }}>
                                                menu
                                            </i>
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                            <div>
                                <Link to={this.props.auth ? '/contact' : '/'} className=" right  brand-logo ">
                                    <IconSmallSvgReact className="App-logo" />
                                </Link>

                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}


export default Header;