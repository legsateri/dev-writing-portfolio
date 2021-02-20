////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import RebrandImage from '../Writing/rebrand.png';
import RebrandSupporting from './rebrand-supporting.png';
import './Rebrand.css';
////////////////////////////////////////////////////////////////////////////////

class Rebrand extends Component {
    render() {
        const color = 'pink_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_one project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>Raise: Rebrand</h1>
                        <img src={RebrandImage} alt='Raise Rebrand Screenshot' className='rebrand_project_page' />
                        <h2 className='work_h2'>Gift cards have never looked better.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>As all brands do at one point or another, there came a time to graduate the Raise 
                            brand tone and look to something more modern, entertaining, and relatable. As such, I worked with a 
                            designer to while they explored how to make the brand stand out visually in a unique, consistent way 
                            while keeping up with modern styles. 
                        </p>

                        <a href='https://drive.google.com/drive/u/0/folders/1DY24efjPMiVDj1tAbZTLyabKXHAV0rT5' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button pink_button'>VIEW THE PRODUCT</button>
                        </a>
                    </div>

                    <div className="project_photos">
                        <img src={RebrandSupporting} alt='Raise Rebrand Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default Rebrand;