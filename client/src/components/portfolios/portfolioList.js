import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPortfolio, fetchPortfolios } from '../../actions';
import { bindActionCreators } from 'redux';
import PortfolioCard from './portfolioCard';
import './portfolioCard.css';
import _ from 'lodash';

class PortfolioList extends Component {
    componentDidMount() {
        this.props.fetchPortfolios();
    }
    renderList() {
        return this.props.portfolios.map((portfolio) => {
            return (
                <div className="col l4 m6 s12 card"
                    onClick={() => this.props.selectPortfolio(portfolio)}
                    key={portfolio.title}
                >
                    <PortfolioCard content={portfolio} />
                </div>
            );
        });
    }
    
    render() {
        //console.log(this.props.portfolios);
        return (
            <div>
              
                <div className="row">
                {this.renderList()}
                </div>
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    //console.log(state);
    return {
        portfolios: state.portfolios,
    };
}

//anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed 
    //to all of our reducers
    return bindActionCreators({ selectPortfolio: selectPortfolio, fetchPortfolios: fetchPortfolios }, dispatch);
}


//Promote BookList from a component to a container it needs to know about this new dispatch method, selectBook, Make it avaiable as prop
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioList);