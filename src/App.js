import React, { Component } from "react"
import { Provider } from 'react-redux'
import {hot} from "react-hot-loader"

import { store } from './reducer'
import "./App.css";
import Hello from './Hello'

class App extends Component{
  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div className="App">
        <Provider store={store}>
          <Hello />
        </Provider>
      </div>
    );
  }
}

export default hot(module)(App)