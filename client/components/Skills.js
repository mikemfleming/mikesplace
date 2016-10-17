import React from 'react';

const Skills = () => {
	return (
	  <div className="skills">
	    <div className="content-text">
	    	<h1>My Skills</h1>
	    	<h4>I bring a lot to the table in any situation</h4>
	    </div>
	    <div className="skills-gallery">
	    	<div className="skill-box">
	    		<i className="fa fa-magic icon" aria-hidden="true"></i>
	    		<h4>UX/UI</h4>
	    		<p>
	    			I work together with my team to transorm ideas into well
	    			thought out designs with an emphasis on user experience.
	    			I'm all about putting in the work early on to ensure a 
	    			solid foundation for the duration of the project.
	    		</p>
	    	</div>
	    	<div className="skill-box">
	    		<i className="fa fa-code icon" aria-hidden="true"></i>
	    		<h4>Code</h4>
	    		<p>
	    			I build things with HTML5, CSS3 and a heavy dose of JavaScript. 
	    			I love coding things from scratch, but I'm no stranger to inheriting 
	    			large codebases. 
	    		</p>
	    	</div>
	    	<div className="skill-box">
	    		<i className="fa fa-diamond icon" aria-hidden="true"></i>
	    		<h4>Pedagogy</h4>
	    		<p>
	    			I lead classes on everything from the fundamentals of
	    			HTML and CSS with elementary school kids to more 
	    			advanced concepts of JavaScript programming with students 
	    			at MakerSquare. 
	    		</p>
	    	</div>
	    </div>
	  </div>
	)
}

export default Skills;