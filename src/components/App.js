import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Container from "./Container"
const hogsList = hogs

class App extends Component {
  state = {
    hogs:hogsList
  }

  handleNameSort = (event) => {
    const newList = this.state.hogs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.setState({newList})

  }
  handleWeightSort = (event) => {
    const newList = this.state.hogs.sort((a,b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : ((b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? -1 : 0));
    this.setState({newList})
  }
  handleGreaseFilter = (event) => {

    this.setState({hogs: this.state.hogs.filter(hog => hog.greased)})
  }

  resetList = () => {
    this.setState({hogs:hogsList})
  }

  filterOnClick= (id) => {
    this.setState({hogs: this.state.hogs.filter(hog => hog.id !== id)})
  }

  render() {
    return (
      <div className="App">
          < Nav resetList={this.resetList} nameSort={this.handleNameSort} weightSort={this.handleWeightSort} greaseSort={this.handleGreaseFilter}/>
        <Container hogs={this.state.hogs} hideHog={this.filterOnClick}/>
      </div>
    )
  }
}

export default App;
