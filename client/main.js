import ReactDOM from 'react-dom';
import React, { Component } from 'react';

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
					<Welcome />
					<Skills />
					<Projects />
					<Personal />
					<Contact />
				</div>
			)
		}
}

ReactDOM.render(<App />, document.getElementById('app'));