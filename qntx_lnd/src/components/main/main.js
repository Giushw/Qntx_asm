import React from 'react';
import Home from '../views/home';
import AboutMe from '../views/aboutMe';
import Skills from '../views/skills';

export default class Main extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			test: false
		};
	}
	
	whatToShow = () => {
		if (this.props.showNow === "home") {
			return <Home nome={`${this.props.persons.firstname} ${this.props.persons.lastname}`} role={this.props.persons.role} /> 
		}
		if (this.props.showNow === "about me") {
			return <AboutMe info={this.props.persons.info} /> 
		}
		if (this.props.showNow === "skills") {
			return <Skills skills={this.props.persons.skills} /> 
			// 
		}
		// if (this.state.showNow === "portfolio") {
		// 	return <Main nome="stocazzo"/> 
		// }
		// if (this.state.showNow === "esperenzie") {
		// 	return <Main nome="cippa"/> 
		// }
		return null;
		}

	render() {
		return (
			<div className="main-wrapper">
				{
					this.whatToShow()
				} 
			</div>
		);
	}
}