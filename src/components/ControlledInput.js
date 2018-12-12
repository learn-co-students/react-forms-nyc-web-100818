// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "mydude",
      lastName: "coolguy"
    }
  }
//cool!
  handleNameChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, console.log(this.state))
  }


  render() {
    return (
      <div>
        <input type="text" name="firstName" id="firstName" onChange={event => this.handleNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" id="lastName" onChange={event => this.handleNameChange(event)} value={this.state.lastName} />
      </div>
    )
  }

}
