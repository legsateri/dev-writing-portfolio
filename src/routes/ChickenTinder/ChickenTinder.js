////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import ChickenTinderImage from '../Coding/chicken.png';
import ChickenTinderSupporting from './chicken-tinder-supporting.png';
////////////////////////////////////////////////////////////////////////////////

class ChickenTinder extends Component {
    render() {
        const color = 'pink_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_one project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>Chicken Tinder</h1>
                        <img src={ChickenTinderImage} alt='Chicken Tinder Screenshot' className='project_page_image' />
                        <h2 className='work_h2'>It's time to get the creative juices flowing.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>This app is a work in progress. The goal is to use the Google Places API and my own API 
                            built using Node.js, to create an app where users can pair up and swipe left or right on restaurants in 
                            their area until they find a match by swiping right on the same place. Currently, I'm working on making 
                            the matching functionality work. 
                        </p>

                        <a href='https://chicken-tinder-app.now.sh/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button pink_button'>LAUNCH THE SITE</button>
                        </a>
                        <a href='https://github.com/legsateri/chicken-tinder-app' target='_blank' rel='noopener noreferrer' className='inline_link' style={{ color: '#F1536' }}><p>Repo</p></a>
                    </div>

                    <div className="project_photos">
                        <img src={ChickenTinderSupporting} alt='Chicken Tinder Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default ChickenTinder;