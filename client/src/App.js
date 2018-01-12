import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import anime from 'animejs';
import { connect } from 'react-redux';
import * as actions from './actions';
import Header from './components/Header';
//import Landing from './components/Landing';
import Dashboard from './pages/testPages/Dashboard';
import SuveryNew from './components/surverys/SurveyNew';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import './App.css';

const TransRoutes = (props) => {
    const locationKey = props.location.key;
    return (
        <div>
             <Header />
            <TransitionGroup>
                <CSSTransition
                    key={locationKey}
                    timeout={{ enter: 500, exit: 700 }}
                    classNames="customer"
                ><div>
                     <Header />
                    <Switch>
                        
                     
                        <Route exact path="/portfolio" component={PortfolioPage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/surveys/new" component={SuveryNew} />
                        
                    </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );

}

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
                        
                    </Switch>
                    </div>
                </BrowserRouter>
          
        );
    }
};

export default connect(null, actions)(App);