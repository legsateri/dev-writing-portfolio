////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './Contact.css';
////////////////////////////////////////////////////////////////////////////////

class Contact extends Component {
    render() {
        return (
            <>
                <div className='contact'>
                    <h2>GET IN TOUCH.</h2>

                    <h3 className='headline'>I'm currently available for work.</h3>
                    <p>If you have a project you want to get started, please get in touch.</p>

                    <a href='mailto:allegrapusateri@gmail.com?subject=I want to hire you.'><button type='submit' className='button'>EMAIL ME</button></a>
                </div>
            </>
        )
    }
}

export default Contact;