import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import Navbar from './components/Navbar';

class App extends Component {
		constructor(){
			super()
		}

		render(){
			return (
				<div>
					<Navbar />
				</div>
			)
		}
}

ReactDOM.render(<App />, document.getElementById('app'));