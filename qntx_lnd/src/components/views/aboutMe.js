import React from 'react';

export function AboutMe(props) {
	const folder = props;
	return (
		<div className="aboutMe">
			<h1 className="__intestation">
				About Me
			</h1>
			<div className="__content">
				<p>
					{props.info.intro}
				</p>
				<p>
					{props.info.body}
				</p>
				<p>
					{props.info.outro}
				</p>
			</div>
			
		</div>
	)
}

export default AboutMe;