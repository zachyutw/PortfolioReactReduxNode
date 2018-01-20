import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import "./portfolioCard.css";
// img, title, tags, desc, complete, github_url, project_date
class PortfolioItem extends Component {

	renderTags(tags) {
		return tags.map((tag) => {
			return <span key={tag}> {tag}</span>
		})
	}

	renderContent({ img, title, tags, desc, complete, github_url, project_date, link ,url_link}) {
		return (
			<div className="s-card row hoverable">

				<div className=" s-card-header col l4 m12 s12 push-l1">
					<h3>{title} </h3>
					<img alt={title} src={img} />
				</div>
				<div className="col l7 m12 s12 s-card-content">
					<div className="s-card-tags hide-on-med-and-down"> {this.renderTags(tags)} </div>
					<div className="s-card-desc hide-on-med-and-down"><span><h3 style={{ display: 'inline' }}>Desc: </h3> {desc} </span> </div>
					<div className="bottom">
					<div className="s-card-footer">
						<div className="col l4 m4 s4 center"> 
						{
						link ? (<Link className="btn waves-effect waves-light" to={link}>link<i className="material-icons right">link</i></Link>):''
						}
						{
						url_link ?
							(
								<a className="btn waves-effect waves-light" href={url_link} target="_blank">link <i className="material-icons right">link</i></a>
							) : ""
						}
					    </div>
						<div className="col l4 m4 s4 "> 
						{ (github_url ? 
							<button className="btn waves-effect waves-light">
							<a href={github_url}>Github</a>
							<i className="material-icons right">code</i>
						</button>:'')
						}
						</div>
						<div className="col l4 m4 s4 right">	{project_date}  </div>
					</div>
						
					
					</div>
				</div>
			</div>
		);
	}
	render() {

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

function mapStateToProps(state) {
	return {
		portfolio: state.select_portfolio
	};
}

export default connect(mapStateToProps)(PortfolioItem);