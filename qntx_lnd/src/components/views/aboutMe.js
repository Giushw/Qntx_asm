import React from 'react';

export function AboutMe(props) {
	return (
		<div className="aboutMe">
			<h1 className="__intestation">
				About Me
			</h1>
			<div className="__content">
				<p className="__paragraph">
					{props.info.intro}
				</p>
				<p className="__paragraph">
					{props.info.body}
				</p>
				<p className="__paragraph">
					{props.info.outro}
				</p>
			</div>
			
		</div>
	)
}

export default AboutMe;