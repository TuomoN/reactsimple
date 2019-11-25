import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setName } from './reducer'

class Hello extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      name,
      date,
      setName
    } = this.props
    return (
      <>
        <h1>Hello, {name}</h1>
        <p>It is now {date.toLocaleString()}</p>
        <div>
          <label htmlFor='name'>Name</label>
          <input name='name' value={name} onChange={e => setName(e.target.value)} />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    date: state.date
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch(setName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)