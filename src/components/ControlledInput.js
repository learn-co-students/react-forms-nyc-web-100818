// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {

  state ={
    input1: "",
    input2: ""
  }

  handleChange = (e) => {
    if (isNaN(e.target.value)){
      this.setState({
        [e.target.name]: e.target.value 
      })
    } else { alert("No numbers please") }
  }

  render() {
    return (
      <div>
        <input type="text" name="input1" onChange={event => this.handleChange(event)} value={this.state.input1}/>
        <input type="text" name="input2" onChange={event => this.handleChange(event)} value={this.state.input2}/>
        <h3>{this.state.input1}</h3>
        <h3>{this.state.input2}</h3>
      </div>
    )
  }
}
