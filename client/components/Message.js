import React, { Component } from 'react';
import validator, { validate } from 'email-validator';

class Message extends Component {
	constructor (props) {
		super()

		this.state = {
			user_name: '',
			user_email: '',
			user_message: '',
			validEntry: true,
			spinner: false
		}
	}

	render(){

		const errorStyle = {
			color: 'red',
			'paddingLeft': '5%'
		}

		const error = <span style={errorStyle}>invalid message... try again!</span>

		const spinnerStyle = {
			height: '25px',
			paddingLeft: '5%'
		}

		const spinner = <img style ={spinnerStyle} src="assets/spinner (1).GIF" />

		return (
		  <div className="message">
		      <div>
		          <label 	htmlFor="name">Name: </label>
		          <input 	type="text" 
		          				id="name" 
		          				name="user_name" 
		          				onChange={event => this.onUsernameChange(event.target.value)} />
		      </div>
		      <div>
		          <label  htmlFor="mail">E-mail:  </label>
		          <input  type="email" 
		          				id="mail" 
		          				name="user_email"
		          				onChange={event => this.onEmailChange(event.target.value)} />
		      </div>
		      <div>
		          <label  htmlFor="msg">Message:  </label>
		          <textarea 
		          				id="msg" 
		          				name="user_message"
		          				onChange={event => this.onMessageChange(event.target.value)}></textarea>
		      </div>
		      
		      <div className="button">
		          <button type="button" 
		          				onClick={() => this.validateAndSubmit(this.state) }>
		          				<i className="fa fa-paper-plane-o" aria-hidden="true"></i>
 								Send Your Message
 					</button>

		          { this.state.validEntry ? null : error }
		          { !this.state.spinner ?   null : spinner }
		      </div>
		  </div>
		)
	}

	onUsernameChange (user_name) {
		this.setState({user_name})
	}

	onEmailChange (user_email) {
		this.setState({user_email})
	}

	onMessageChange (user_message) {
		this.setState({user_message})
	}

	validateAndSubmit ({user_name, user_email, user_message}) {
		if (user_name !== '' && user_message !== '' && validate(user_email)) {
			this.setState({ validEntry: true })
			this.setState({ spinner: true })
			this.props.handleSubmit(this.state)
		} else {
			this.setState({ validEntry: false })
			console.log('invalid entry')
		}
	}
}

export default Message;