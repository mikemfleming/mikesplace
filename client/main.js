import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class App extends Component {
		constructor(){
			super()
		}

		render(){
			return (
				<div>main.js is alive and kickin</div>
			)
		}
}

ReactDOM.render(<App />, document.getElementById('app'));