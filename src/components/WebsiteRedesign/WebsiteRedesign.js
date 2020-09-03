////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import redesignone from './redesign-1.png';
import redesigntwo from './redesign-2.png';
import './WebsiteRedesign.css';
////////////////////////////////////////////////////////////////////////////////

class WebsiteRedesign extends Component {
    render() {
        return (
            <>
                <div className='website_redesign'>
                    <h2>WEBSITE REDESIGN</h2>
                    <p>I worked with the Radiological Society of North America to redesign their website. The goal was to create a brand voice that is friendly and conversational, as well as easy to digest and understand, and then implement that voice across the website. You can find more samples of my work on this project <a href={`https://drive.google.com/drive/u/0/folders/1OwCW_2TOCqA6HR_B04o4Dv6kSk4Ji_yu`} target="_blank" className='writing_link' hover={{ color: '#D6F5F7' }}>here</a>.</p>

                    <div className='campaign_images'>
                        <img src={redesignone} alt='Redesign' className='campgain-screenshots' /><br />
                        <img src={redesigntwo} alt='Redesign' className='campgain-screenshots' /><br />
                    </div>
                </div>
            </>
        )
    }
}

export default WebsiteRedesign;