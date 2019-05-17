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

  render() {
    return (
      <div className="App">
          < Nav />
        <Container hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
