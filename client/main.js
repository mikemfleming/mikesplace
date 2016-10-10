import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import 'whatwg-fetch';

import Title from './components/Title';
import Welcome from './components/Welcome';
import Personal from './components/personal';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
	constructor(){
		super()
	}

	render(){
		return (
			<div>
				<Title />
				<Welcome />
				<Skills />
				<Projects />
				<Contact handleSubmit={this.handleFormSubmit} />
			</div>
		)
	}

	// TODO: add email verification, protection from deadly hackers, hide form after success 
	handleFormSubmit ({ user_name, user_email, user_message }) {
		fetch('/sayHello', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ user_name, user_email, user_message})
		})
	}

}

ReactDOM.render(<App />, document.getElementById('app'));