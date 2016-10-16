import React from 'react';

const Projects = () => {
		return (
	  <div className="projects">

	  	<div className="overlord">
	  		<div className="content-text">
	  			<h1>Overlord</h1>
	  			<h4>Optimize your company’s efficiency with this game themed management tool</h4>
	  		</div>
	  		<a href="https://github.com/repowranglers/overlord">
	  			<img src="assets/Screen Shot 2016-10-09 at 12.52.10 AM.png" alt="overlord" />
	  		</a>
	  	</div>

	  	<div className="austin-art">
	  		<div className="content-text">
	  			<h1>Austin Public Art</h1>
	  			<h4>Find public art in Austin and add them to your favorites</h4>
	  		</div>
	  		<a href="http://austinart.herokuapp.com/">
	  			<img src="assets/Screen Shot 2016-10-09 at 12.38.59 AM.png" alt="austin-art" />
	  		</a>
	  	</div>

	    <div className="gps">
	    	<div className="content-text">
		    	<h1>Granite, Parchment & Shears</h1>
		    	<h4>Make a nickname, share an access code, and play with your friends</h4>
	    	</div>
	    	<a href="http://granite-parchment-shears.herokuapp.com/">
	    		<img src="assets/Screen Shot 2016-10-08 at 5.58.47 PM.png" alt="gps" />
	    	</a>
	    </div>

	    <div className="click-party">
	    	<div className="content-text">
		    	<h1>Click Party</h1>
		    	<h4>Randomly generate hex colors and their opposites</h4>
	    	</div>
	    	<a href="http://click-party.herokuapp.com/">
	    		<img src="assets/Screen Shot 2016-10-09 at 10.45.30 AM.png" alt="click-party" />
	    	</a>
	    </div>

	  </div>
	)
}

export default Projects;