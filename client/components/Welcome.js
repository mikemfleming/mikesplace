import React from 'react';

const Welcome = () => {
	return (
	  <div className="welcome">

		  <div className="content-text">
		  	<h1>Hey, there!</h1>
		  	<p>
		  		I am a Software Engineer based out of Austin, Texas. 
		  		I have experience with mobile optimized web apps and 
		  		large scale high performance systems.
		  	</p>
		  	<p>
			  	I currently work at <a href="http://www.hackreactor.com/">
			  	Hack Reactor</a> as a Teaching Fellow and Software Engineer as 
			  	well as with <a href="http://www.helloworldstudio.org/"> Hello 
			  	World Studio</a>, where I teach elementary school students 
			  	the fundamentals of web design in HTML, CSS, and JavaScript.
		  	</p>
		  	<p>
			  	I've worked on the front and back end using 
			  	technologies like Node, Express, React, Angular, Backbone, 
			  	Mithril, jQuery, and PostgreSQL.  I made <a href="https://github.com/mikemfleming/mikesplace">
			  	this</a> particular website from scratch with React, Express, and Browserify!
			</p>
			<p>
				I am passionate about learning new technologies and always looking 
				for opportunities to expand and hone my skills. 
			</p>
		  </div>
		  <img src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/1474525_10200906544696397_1862895543_n.jpg?oh=c2490d950bb8976e7e43091d378e2da6&oe=58AD3628" />
	  </div>
	)
}

export default Welcome;