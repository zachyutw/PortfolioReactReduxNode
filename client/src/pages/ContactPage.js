import React from 'react';
import { Link } from 'react-router-dom';
import '../css/contactPage.css';
const ContactPage = () => {

    return (
        <div className="ContactPage">
            <div className="container" style={{ textAlign: 'center' }}>
                <h1>Elegant Contact Form Demo</h1>
                <h2> Still Working On</h2>
                <div className="inner contact">
             
                <div className="contact-form">
                
                    <form id="contact-us" method="post" action="#">
                        
                        <div className="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
                         
                            <input type="text" name="name" id="name" required="required" className="form" placeholder="Name" />
                          
                            <input type="email" name="mail" id="mail" required="required" className="form" placeholder="Email" />
                            
                            <input type="text" name="subject" id="subject" required="required" className="form" placeholder="Subject" />
                        </div>
                        <div className="col-xs-6 wow animated slideInRight" data-wow-delay=".5s">
                            <textarea name="message" id="message" className="form textarea"  placeholder="Message"></textarea>
                        </div>
                        <div className="relative fullwidth col-xs-12">
                            <button type="submit" id="submit" name="submit" className="form-btn semibold">Send Message</button> 
                        </div>
                        <div className="clear"></div>
                    </form>

                    
                    <div className="mail-message-area">
                        
                        <div className="alert gray-bg mail-message not-visible-message">
                            <strong>Thank You !</strong> Your email has been delivered.
                        </div>
                    </div>

                </div>
            </div>

            </div>
            <div className="floating-button ">
                <span className="left toggle-text hide-on-small-only">
                    <Link to="/portfolio"><i className="material-icons"> keyboard_arrow_left </i></Link><span>Work</span>
                </span>
            </div>
        </div>
    );
}
export default ContactPage;