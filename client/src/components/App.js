import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SuveryNew = () => <h2>SuveryNew</h2>


class App extends Component {
    componentDidMount(){
        //put initial ajax
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys/new" component={SuveryNew} />

                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)( App);