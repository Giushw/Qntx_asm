import React, {useState} from 'react';

export function Porfolio(props) {

	const [openFirst, setOpenFirst] = useState(false);
	const [openSecond, setOpenSecond] = useState(false);
	
	return (
		<div className="portfolio">
			<h1 className="__intestation">
				Portfolio
			</h1>
			<div className="__content">
				<div class="gallery-wrap">
					<div className={`__case ${openFirst ? 'is-open' : ''}`} 
						onClick={() => {
							setOpenFirst(!openFirst);
							setOpenSecond(false);
						}}
					>
						<div className="__item --gark">
							<div className="__heading">
								<h2 className="__title">
									{props.works[0].name}
								</h2>
							</div>
							<div className="__body">
								<h4 className="__subtitle">
									{props.works[0].agency}
								</h4>
								<p className="__description">
									{props.works[0].descr}
								</p>
								<a className="__cta" href={props.works[0].link}>Dai un Occhiata</a>
							</div>
						</div>
					</div>
					<div className={`__case ${openSecond ? 'is-open' : ''}`} 
						onClick={() => {
							setOpenFirst(false);
							setOpenSecond(!openSecond);
						}}
					>
						<div className="__item --viva">
							<div className="__heading">
								<h2 className="__title">
									{props.works[1].name}
								</h2>
							</div>
							<div className="__body">
								<h4 className="__subtitle">
									{props.works[1].agency}
								</h4>
								<p className="__description">
									{props.works[1].descr}
								</p>
								<a className="__cta" href={props.works[1].link}>Dai un Occhiata</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Porfolio;