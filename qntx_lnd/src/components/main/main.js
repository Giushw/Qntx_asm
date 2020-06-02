import React from 'react';
import Home from '../views/home';
import AboutMe from '../views/aboutMe';
import Skills from '../views/skills';
import Portfolio from '../views/portfolio';
import Experiences from '../views/experiences';

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
		}
		if (this.props.showNow === "portfolio") {
			return <Portfolio  works={this.props.persons.works} social={this.props.persons.social}/> 
		}
		if (this.props.showNow === "esperenzie") {
			return <Experiences works={this.props.persons.experiences} /> 
		}
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