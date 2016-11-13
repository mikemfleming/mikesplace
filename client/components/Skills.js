import React from 'react';

const Skills = () => {
	return (
	  <div className="skills">
	    <div className="content-text">
	    	<h1>My Skills</h1>
	    	<h4><b>Writing clean and reusable code is my passion.</b></h4>
	    </div>
	    <div className="skills-gallery">
	    	<div className="skill-box">
	    		<i className="fa fa-magic icon" aria-hidden="true"></i>
	    		<h4><b>UX/UI</b></h4>
	    		<p><b>
	    			I work together with my team to transorm ideas into well
	    			thought out designs with an emphasis on user experience.
	    			I'm all about putting in the work early on to ensure a 
	    			solid foundation for the duration of the project.
	    		</b></p>
	    	</div>
	    	<div className="skill-box">
	    		<i className="fa fa-code icon" aria-hidden="true"></i>
	    		<h4><b>Code</b></h4>
	    		<p><b>
	    			I build things with HTML5, CSS3 and a heavy dose of JavaScript. 
	    			I love coding things from scratch, but I'm no stranger to inheriting 
	    			large codebases. 
	    		</b></p>
	    	</div>
	    	<div className="skill-box">
	    		<i className="fa fa-diamond icon" aria-hidden="true"></i>
	    		<h4><b>Teaching</b></h4>
	    		<p><b>
	    			I lead classes on everything from the fundamentals of
	    			HTML and CSS with elementary school kids to more 
	    			advanced concepts of JavaScript programming with students 
	    			at Hack Reactor. 
	    		</b></p>
	    	</div>
	    </div>
	  </div>
	)
}

export default Skills;