////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './About.css';
import background from './about-background.png'
////////////////////////////////////////////////////////////////////////////////

class About extends Component {
    render() {
        return (
            <>
                <main>
                    <header className='line_height'>
                        <h1>I'm Allegra,</h1>
                        <p>a web developer and copywriter.</p>
                        <img src={background} alt="Chicago skyline"/>
                    </header>
                    <div>
                        <p>TBD</p>
                    </div>
                </main>
            </>
        )
    }
}

export default About;