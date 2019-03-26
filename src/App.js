import React, { Component} from "react"
import {hot} from "react-hot-loader"

import "./App.css";
import Hello from './Hello'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      person: {
        name: 'Tuomo',
        home: 'Vaasa'
      }
    }
  }
  render(){
    return(
      <div className="App">
        <Hello person={this.state.person} onChange={(name, value) => this.setState({person: {...this.state.person, [name]: value}})}/>
      </div>
    );
  }
}

export default hot(module)(App)