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

                        <img src={background} alt='Chicago skyline' className='skyline' />
                    </header>

                    <div className='introduction'>
                        <span className='circle'></span>

                        <h2>HELLO.</h2>
                        <p>I'm a web developer and copywriter based out of Chicago. I am most passionate about using my words and programming to help brands tell their stories.</p>
                    </div>

                    <div className='abilities'>
                        <h2>WHAT I DO.</h2>

                        <span className='big_circle circle_one'></span>
                        <h3 className='headline'>Write what you want.</h3>
                        <p>I have experience with everything from marketing campaigns, to web and app rewrites, to brand building, to user manuals.</p>

                        <span className='big_circle circle_two'></span>
                        <h3 className='headline'>Develop what you need.</h3>
                        <p>I know how to create and maintain your website across all platforms and devices, using the latest technologies available.</p>

                    </div>

                    <div className='contact'>
                        <h2>GET IN TOUCH.</h2>

                        <h3 className='headline'>I'm currently available for work.</h3>
                        <p>If you have a project you want to get started, please get in touch.</p>

                        <button type='submit' className='email_button'>EMAIL ME</button>
                    </div>
                </main>
            </>
        )
    }
}

export default About;