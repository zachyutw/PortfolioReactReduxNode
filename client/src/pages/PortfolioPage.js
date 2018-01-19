import React, { Component } from 'react';
import PortfolioList from '../components/portfolios/portfolioList';
import PortfolioSelectItem from '../components/portfolios/portfolioSelectItem';
import {PAGEROUTES} from '../App';
import FloatNavButton from '../components/buttons/floatNavButton';

const page_number = 1;

class PortfolioPage extends Component {

    

    render() {
        return (
            <div className="PortfolioPage">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1>PortfolioPage</h1>

                    <h2>Coming soon!</h2>
                    <div>
                       <PortfolioSelectItem />
                        <PortfolioList />
                        
                    </div>
                    <a href="http://zachywp2017.yabi.me/wp" className="social_button flickr"><span><i className="fa fa-flickr"></i></span><p>WordPress Old Website</p></a>
                    <a href="https://github.com/zachyutw" className="social_button github"><span><i className="fa fa-github"></i></span><p>Github</p></a>

                </div>
                <FloatNavButton linkLeft={PAGEROUTES[page_number-1]} linkRight={PAGEROUTES[page_number+1]} />
                
            </div>
           

        );
    }
}
export default PortfolioPage;