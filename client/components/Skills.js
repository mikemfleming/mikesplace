import React from 'react';

const Skills = () => {
	return (
	  <div className="skills">
	    <div className="content-text">
	    	<h1>My Skills</h1>
	    	<h4><b>Making really cool things is my passion.</b></h4>
	    	<h4><b>Writing clean and reusable code is just how I do it.</b></h4>
	    </div>
	    <div className="skills-gallery">
	    	<div className="skill-box">
	    		<i className="fa fa-magic icon" aria-hidden="true"></i>
	    		<h4>UX/UI</h4>
	    		<p>
	    			I work together with my team to transorm ideas into well
	    			thought out designs with an emphasis on user experience.
	    		</p>
	    	</div>
	    	<div className="skill-box">
	    		<i className="fa fa-code icon" aria-hidden="true"></i>
	    		<h4>CODE</h4>
	    		<p>
	    			I build things with HTML5, CSS3 and a heavy dose of JavaScript. 
	    			I love coding things from scratch, but I'm no stranger to inheriting 
	    			large codebases. 
	    		</p>
	    	</div>
	    	<div className="skill-box">
	    		<i className="fa fa-diamond icon" aria-hidden="true"></i>
	    		<h4>TEACHING</h4>
	    		<p>
	    			I lead classes on JavaScript, HTML, and CSS with students in 
	    			elementary school and Hack Reactor. I'm very proud of my students,
	    			young and old.
	    		</p>
	    	</div>
	    </div>
	  </div>
	)
}

export default Skills;