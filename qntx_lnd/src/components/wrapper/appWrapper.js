import React from 'react';
import apiCall from '../../libs/axiosConfig';
import '../../style/main.scss';
import Canvas from '../main/canvas';
import Main from '../main/main';
import Navigation from '../navigation/navigation';

export default class AppWrapper extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: {},
      menus: [
        "Home",
        "About Me",
        "Skills",
        "Portfolio",
        "Esperenzie"
      ],
      showNow: "home"
    }
    this.changeShow = this.changeShow.bind(this)
  }

  changeShow = (value) => {
    this.setState({
      showNow: value
    });
  }

  componentDidMount() {
    apiCall.mock
      .get(`mock/data.json`)
      .then(response => {
        const persons = response.data;
        this.setState({ persons });
      })
      .catch((e) => {
        // eslint-disable-next-line
        console.log(e.message);
      });
  }

  render() {
    return (
      <div className="app-wrapper">
        <Canvas />
        <Navigation list={this.state.menus} changeShowNow={this.changeShow}/>
        <Main showNow={this.state.showNow} persons={this.state.persons}/>       
    </div>
    )
  }
}
