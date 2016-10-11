import React, { Component } from 'react';
import Message from './Message';

class Contact extends Component {
	constructor(props){
		super()
	}

	render(){
		return (
		  <div className="contact">
		    
		  		<Message handleSubmit={this.props.handleSubmit} />

	      	<div className="social-media">
	      		<a href="https://www.linkedin.com/in/mikemfleming">
			  		<img src="assets/linkedin-icon copy.png" />
	      		</a>
	      		<a href="https://github.com/mikemfleming">
			  		<img src="assets/download copy.png" />
	      		</a>
	      		<a href="https://angel.co/mikemfleming">
		  			<img src="assets/peace_large copy.png"  />
	      		</a>
	      	</div>
		  </div>
		)
	}

}

export default Contact;