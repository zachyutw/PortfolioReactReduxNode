import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./portfolioCard.css";
// img, title, tags, desc, complete, github_url, project_date
class PortfolioItem extends Component{

	renderTags(tags)
	{
		return tags.map( (tag)=>{
			return <span> {tag}</span>
		})
	}
	renderContent({img, title, tags, desc, complete, github_url, project_date}){
		return (
		<div className="s-card row hide-on-small-only"> 

			    <div className=" s-card-header col l4 m4 s4 push-l1">
					<h3>{title} </h3>
					<img alt="test" src= {img} />
				</div>
				<div  className="col l7 m7 s12">
					<div> {this.renderTags(tags)} </div>
					<h3>Desc:</h3><p>{desc}</p>
					<a href={github_url}>Github link</a>
					<p>{project_date}</p>
			    </div>
			</div>
		);
	}
	render(){

		if (!this.props.portfolio) {
			return <div className="hide-on-small-only">Select a Portfolio to get Detail.</div>
		}
		return (
			<div className="selected-portfolio">
			{this.renderContent(this.props.portfolio)}
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