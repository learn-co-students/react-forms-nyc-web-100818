import React from 'react'

export default class ControlledInput extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return(
            <div>
                <input name='firstName' type="text" placeholder='First Name' id="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
                <input name='lastName' type="text" placeholder='Last Name' id="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
            </div>
        )
    }

}