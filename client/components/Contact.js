import React from 'react';

const Contact = () => {
	return (
	  <div className="contact">
	    CONTACT
	    <form action="/sayHello" method="post">
	        <div>
	            <label htmlFor="name">Name:</label>
	            <input type="text" id="name" name="user_name" />
	        </div>
	        <div>
	            <label htmlFor="mail">E-mail:</label>
	            <input type="email" id="mail" name="user_email" />
	        </div>
	        <div>
	            <label htmlFor="msg">Message:</label>
	            <textarea id="msg" name="user_message"></textarea>
	        </div>
	        
	        <div className="button">
	            <button type="submit">Send your message</button>
	        </div>
	    </form>
	  </div>
	)
}

export default Contact;