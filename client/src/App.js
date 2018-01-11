import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './actions';
import Header from './components/Header';
//import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import SuveryNew from './components/surverys/SurveyNew';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';



class App extends Component {
    componentDidMount(){
        //put initial ajax
        this.props.fetchUser();
    }

    render() {
        return (
            <div >
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/portfolio" component={PortfolioPage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/surveys/new" component={SuveryNew} />

                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)( App);