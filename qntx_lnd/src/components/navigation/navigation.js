import React from 'react';

export default class Navigation extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			highligthed: false
		};
	}

	selectedVoice = (comparator, value) => {
		if (value === comparator) {
			return true;
		}
		return false;
	}

	openMenu = () => {
		this.setState({
			active: !this.state.active
		});
	}

	render() {
		return (
			<nav className={`navigation ${this.state.active ? 'is-active' : ''}`}>
				<ul className="__list">
					{
						this.props.list.map(menuVoice => {
							let lower = menuVoice;
							return (
								<li key={menuVoice} className="__row">
									<span className={`__item ${this.selectedVoice(this.props.showNow, lower.toLowerCase()) ? 'is-selected' : ''}`}
										data-link={lower.toLowerCase()}
										onClick={() => {
											this.props.changeShowNow(lower.toLowerCase());
											this.openMenu();
										}}
									>
										{menuVoice}
									</span>
								</li>
							)
						})
					}
				</ul>
				<div className="__button-wrap">
					<button 
						className={`__button ${this.state.active ? 'is-active' : ''}`}
						onClick={this.openMenu}
					>
						<svg viewBox="0 0 64 48" className="__icon">
							<path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
							<path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
							<path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
						</svg>
					</button>
				</div>
			</nav>
		);
	}
}