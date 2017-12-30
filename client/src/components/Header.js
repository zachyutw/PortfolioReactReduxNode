import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments'
class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return [ 
                    <li key="1"> <Payments /></li>,
                    <li key="2" style={{margin:'0 15px'}}>
                        Credits: <b>{this.props.auth.credit}</b> 
                     </li>,
                    <li key="3"> <a href="/api/logout">Logout</a></li>];
        }
    }
    render() {
        //console.log(this.props);
        return (
            <div>
                <nav>
                    <div className="nav-wrapper light-blue darken-3">
                        <Link 
                            to={this.props.auth ? '/surveys' : '/'}
                            className="left brand-logo">
                            Emaily
                        </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderContent()}
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