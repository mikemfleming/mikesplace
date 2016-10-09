import React from 'react';

const Projects = () => {
		return (
	  <div className="projects">

	  	<div className="overlord">
	  		<div className="content-text">
	  			<h1>Overlord</h1>
	  			<h4>Optimize your company’s efficiency with this game themed management tool</h4>
	  			<p>Organized daily standup sessions, increased team integration and ownership Organized daily standup sessions, increased team integration and ownership</p>
	  			<p>Developed database using Postgres/Knex along with Express/Node.js for serverDeveloped database using Postgres/Knex along with Express/Node.js for server</p>
	  			<p>Styled site, transitions, and animations with CSS and React CSS Transition GroupStyled site, transitions, and animations with CSS and React CSS Transition Group</p>
	  		</div>
	  		<a href="https://github.com/repowranglers/overlord">
	  			<img src="assets/Screen Shot 2016-10-09 at 12.52.10 AM.png" alt="overlord" />
	  		</a>
	  	</div>

	  	<div className="austin-art">
	  		<div className="content-text">
	  			<h1>Austin Public Art</h1>
	  			<h4>Find public art in Austin and add them to your favorites</h4>
	  			<p>Organized daily standup sessions, increased team integration and ownership Organized daily standup sessions, increased team integration and ownership</p>
	  			<p>Refactored inherited codebase to efficiently expand React components across siteRefactored inherited codebase to efficiently expand React components across site</p>
	  			<p>Refactored inherited codebase to efficiently expand React components across siteRefactored inherited codebase to efficiently expand React components across site</p>
	  		</div>
	  		<a href="http://austinart.herokuapp.com/">
	  			<img src="assets/Screen Shot 2016-10-09 at 12.38.59 AM.png" alt="austin-art" />
	  		</a>
	  	</div>

	    <div className="gps">
	    	<div className="content-text">
		    	<h1>Granite, Parchment & Shears</h1>
		    	<h4>Make a nickname, share an access code, and play with your friends</h4>
		    	<p>Developed game logic with Socket.io to align player events across multiple clients Drove a 5 person team and developed a systematic Git workflow using ZenHub</p>
		    	<p>Styled all pages for mobile and desktop use with the Skeleton CSS framework Developed game logic with Socket.io to align player events across multiple clients</p>
		    	<p>Drove a 5 person team and developed a systematic Git workflow using ZenHub Styled all pages for mobile and desktop use with the Skeleton CSS framework</p>
	    	</div>
	    	<a href="http://granite-parchment-shears.herokuapp.com/">
	    		<img src="assets/Screen Shot 2016-10-08 at 5.58.47 PM.png" alt="gps" />
	    	</a>
	    </div>

	    <div className="click-party">
	    	<div className="content-text">
		    	<h1>Click Party</h1>
		    	<h4>Randomly generate hex colors and their opposites</h4>
		    	<p>Architected server file in Node.js and Express to handle GET requests for sourcesArchitected server file in Node.js and Express to handle GET requests for sources</p>
		    	<p>Deployed to Heroku using Grunt to minify existing JavaScript and CSS filesDeployed to Heroku using Grunt to minify existing JavaScript and CSS files</p>
	    	</div>
	    	<a href="http://click-party.herokuapp.com/">
	    		<img src="assets/Screen Shot 2016-10-09 at 10.45.30 AM.png" alt="click-party" />
	    	</a>
	    </div>

	  </div>
	)
}

export default Projects;