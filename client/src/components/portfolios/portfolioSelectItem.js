import React, {Component} from 'react';
import {connect} from 'react-redux';

class PortfolioItem extends Component{

	render(){

		if (!this.props.portfolio) {
			return <div>Select a book to get started.</div>
		}
		return (
			<div> 
			<h3>Detials:</h3>
			<div>Title:{this.props.portfolio.title}</div>
			</div>

			);
	}
}

function mapStateToProps(state)
{
	return {
		portfolio:state.select_portfolio
	};
}

export default connect(mapStateToProps)(PortfolioItem);