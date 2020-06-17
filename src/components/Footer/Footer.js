////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './Footer.css'
////////////////////////////////////////////////////////////////////////////////

class Footer extends Component {
    render() {
        return (
            <>
                <ul className="footer">
                    <li><a href='https://www.linkedin.com/in/allegra-pusateri/' target='_blank' rel='noopener noreferrer' className='link_style' style={{ textDecoration: 'none' }}>Linkedin</a></li>
                    <li><a href='https://github.com/legsateri' target='_blank' rel='noopener noreferrer' className='link_style' style={{ textDecoration: 'none' }}>Github</a></li>
                    <li><a href='mailto:allegrapusateri@gmail.com?subject=I want to hire you.' className='link_style' style={{ textDecoration: 'none' }} hover={{ color: '#F15361' }}>Hire Me</a></li>
                </ul>
            </>
        )
    }
}

export default Footer;