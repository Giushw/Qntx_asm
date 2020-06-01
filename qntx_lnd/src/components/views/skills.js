import React from 'react';

export function Skills(props) {
	return (
		<div className="skills">
			<h1 className="__intestation">
				Skills
			</h1>
			<div className="__content">
				<div className="__row">
					<div className ="__column">
						<div className ="__cell">
							<div className="skills-graph-wrapper">
								{/* {
									props.skills.template.map(skill => {
										let radial = 140
										return (
											<svg id={skill.toLowerCase()} class="skills-graph" width="300" height="300">
												<circle cx="150" cy="150" r="140" stroke-width="20"/>
											</svg>
										)
									})
								} */}
								<svg className="skills-graph --primary --outer1" width="300" height="300">
									<circle cx="150" cy="150" r="140" stroke-width="20"/>
								</svg>
								<svg className="skills-graph --secondary --center1" width="300" height="300">
									<circle cx="150" cy="150" r="110" stroke-width="20"/>
								</svg>
								<svg className="skills-graph --accent --inner1" width="300" height="300">
									<circle cx="150" cy="150" r="80" stroke-width="20"/>
								</svg>
							</div>
						</div>
						<div className ="__cell">
							<ul className="skill-list">
								{
									props.skills.template.map(menuVoice => {
										return (
											<li key={menuVoice} className="__item">
												<p className="__text">
													{menuVoice}
												</p>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
					<div className ="__column">
						<div className ="__cell">
							<div className="skills-graph-wrapper">
								<svg className="skills-graph --primary --outer2" width="300" height="300">
									<circle cx="150" cy="150" r="140" stroke-width="20"/>
								</svg>
								<svg className="skills-graph --secondary --center2" width="300" height="300">
									<circle cx="150" cy="150" r="110" stroke-width="20"/>
								</svg>
								<svg className="skills-graph --accent --inner2" width="300" height="300">
									<circle cx="150" cy="150" r="80" stroke-width="20"/>
								</svg>
							</div>
						</div>
						<div className ="__cell">
							<ul className="skill-list">
								{
									props.skills.style.map(menuVoice => {
										return (
											<li key={menuVoice} className="__item">
												<p className="__text">
													{menuVoice}
												</p>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
				</div>
				<div className="__row --reverse">
					<div className ="__column">
						<div className ="__cell">
							<div className="skills-graph-wrapper">
								<svg className="skills-graph --primary --outer3" width="300" height="300">
									<circle cx="150" cy="150" r="140" stroke-width="20"/>
								</svg>
								<svg className="skills-graph --secondary --center3" width="300" height="300">
									<circle cx="150" cy="150" r="110" stroke-width="20"/>
								</svg>
								<svg className="skills-graph --accent --inner3" width="300" height="300">
									<circle cx="150" cy="150" r="80" stroke-width="20"/>
								</svg>
							</div>
						</div>
						<div className ="__cell">
							<ul className="skill-list">
								{
									props.skills.code.map(menuVoice => {
										return (
											<li key={menuVoice} className="__item">
												<p className="__text">
													{menuVoice}
												</p>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
					<div className ="__column">
						<div className ="__cell">
							<div className="skills-graph-wrapper">
								<svg className="skills-graph --primary --outer4" width="300" height="300">
									<circle cx="150" cy="150" r="140" stroke-width="20"/>
								</svg>
								<svg className="skills-graph --secondary --center4" width="300" height="300">
									<circle cx="150" cy="150" r="110" stroke-width="20"/>
								</svg>
								<svg className="skills-graph --accent --inner4" width="300" height="300">
									<circle cx="150" cy="150" r="80" stroke-width="20"/>
								</svg>
							</div>
						</div>
						<div className ="__cell">
							<ul className="skill-list">
								{
									props.skills.design.map(menuVoice => {
										return (
											<li key={menuVoice} className="__item">
												<p className="__text">
													{menuVoice}
												</p>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
	)
}

export default Skills;