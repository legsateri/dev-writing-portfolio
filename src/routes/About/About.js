////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Contact from '../../components/Contact/Contact';
////////////////////////////////////////////////////////////////////////////////
import background from './about-background.png';
import computer from './computer.png';
import paper from './paper.png'
import wave from './wave.png'
import './About.css';
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
                        <span className='circle'>
                            <img src={wave} alt='Hand waving' className='icon' />
                        </span>

                        <h2>HELLO.</h2>
                        <p>I'm a web developer and copywriter based out of Chicago. I am most passionate about using my words and programming to help brands tell their stories.</p>
                    </div>

                    <div className='abilities'>
                        <h2>WHAT I DO.</h2>

                        <span className='big_circle circle_one'>
                            <img src={paper} alt='Paper' className='icon' />
                        </span>

                        <h3 className='headline'>Write what you want.</h3>
                        <p>I have experience with everything from marketing campaigns, to web and app rewrites, to brand building, to user manuals.</p>

                        <span className='big_circle circle_two'>
                            <img src={computer} alt='Computer' className='icon' />
                        </span>

                        <h3 className='headline'>Develop what you need.</h3>
                        <p>I know how to create and maintain your website across all platforms and devices, using the latest technologies available.</p>

                    </div>

                    <Contact />
                </main>
            </>
        )
    }
}

export default About;