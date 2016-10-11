import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import Title from './components/Title';
import Welcome from './components/Welcome';
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
				<Contact />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));