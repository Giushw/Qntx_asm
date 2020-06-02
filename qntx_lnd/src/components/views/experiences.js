import React from 'react';

export default class Experiences extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			active: false
		};
	}

	render() {
		
		return (
			<div className="experiences">
				<h1 className="__intestation">
				Experiences
				</h1>
				<div className="__content">
					<div className="__work-wrap">
						<ul className="__list">
							{
								this.props.works.map(experience => {
									return (
										<li className="__item">
											<div className="__heading">
											<span className="__where">
												{`${experience.when}, ${experience.where}`}
											</span>
											<h4 className="__role">
												{experience.role}
											</h4>
											<h5 className="__agency">
												{`Presso ${experience.agency}`}
											</h5>
											</div>
											<div className="__body">
											<p className="__description">
													{experience.description}
											</p>
											</div>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}