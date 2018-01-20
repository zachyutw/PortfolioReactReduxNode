import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// eslint-disable-next-line
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// eslint-disable-next-line
import anime from 'animejs';
import { connect } from 'react-redux';
import * as actions from './actions';
import Header from './components/Header/Header';
//import Landing from './components/Landing';
import Dashboard from './pages/Dashboard';
import SuveryNew from './components/surverys/SurveyNew';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import MenuPage from './pages/MenuPage';
import './App.css';

export const PAGEROUTES = [
    { path: '/', title: 'About' },
    { path: '/portfolio', title: 'Work' },
    { path: '/contact', title: 'Contact' },

];


class App extends Component {
    componentDidMount() {
        //put initial ajax
        this.props.fetchUser();
    }

    render() {
        return (
           
                <BrowserRouter>
                 <div>
                 <Header />
                    <Switch>
                        <Route exact path="/portfolio" component={PortfolioPage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/surveys/new" component={SuveryNew} />
                        <Route exact path="/menu" component={MenuPage} />
                        
                    </Switch>
                    </div>
                </BrowserRouter>
          
        );
    }
};

export default connect(null, actions)(App);