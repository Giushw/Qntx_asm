import React from 'react';

export function Home(props) {
	return (
		<div className="home">
			<div className="__portrait"></div>
			<h1 className="__hello">
				Hey Ciao! <br/>
				Sono <span className="__name">{props.nome} </span><br/>
				{props.role}
			</h1>
		</div>
	)
}

export default Home;