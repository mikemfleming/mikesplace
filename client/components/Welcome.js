import React from 'react';

const Welcome = () => {
	return (
	  <div className="welcome">

		  <div className="content-text">
		  	<h1>Hey, there!</h1>
		  	<p>
		  		My name is Mike and I am a software engineer and teacher based out of Austin, Texas. 
		  	</p>
		  	<p>
			  	I currently work at <a href="http://www.hackreactor.com/">
			  	Hack Reactor</a> as a Teaching Fellow and Software Engineer as 
			  	well as with <a href="http://www.helloworldstudio.org/">Hello 
			  	World Studio</a>, where I teach elementary school students 
			  	the fundamentals of web design in HTML, CSS, and JavaScript.
		  	</p>
		  	<p>
			  	I have worked on the front and back end using 
			  	technologies like Node, Express, React, Angular, 
			  	Mithril, jQuery, and PostgreSQL (just to name a few). I love
			  	working with large existing codebases and implementing new features,
			  	but there's something special about starting from scratch, too.
			  	I made <a href="https://github.com/mikemfleming/mikesplace">
			  	this</a> particular website with React, Express, and Browserify.
			</p>
			<p>
				<em>I believe that well written code fortifies great ideas and when you mix
				in a little bit of UI/UX magic you can really make an impact. If you 
				feel the same let's get together! You can view samples of my work below 
				and send me an email, too.</em>
			</p>
		  </div>
		  <img src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/1474525_10200906544696397_1862895543_n.jpg?oh=c2490d950bb8976e7e43091d378e2da6&oe=58AD3628" />
	  </div>
	)
}

export default Welcome;