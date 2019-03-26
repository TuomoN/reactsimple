import React from 'react'

export default class Hello extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            date: new Date()
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.onChange(e.target.name, e.target.value)
        this.setState({date: new Date()})
    }
    render () {
        const {
            person
        } = this.props
        const {
            home
        } = person
        return (
            <React.Fragment>
                <h1>Hello, {person.name} from {home}!</h1>
                <p>It is now {this.state.date.toLocaleString()}</p>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input name='name' value={person.name} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor='home'>Home</label>
                    <input name='home' value={person.home} onChange={this.handleChange} />
                </div>
            </React.Fragment>
        )
    }
}