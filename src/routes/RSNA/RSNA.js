////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import RSNAImage from '../Writing/rsna.png';
import RSNASupporting from './rsna-supporting.png';
import './RSNA.css';
////////////////////////////////////////////////////////////////////////////////

class RSNA extends Component {
    render() {
        const color = 'green_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_four project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>RSNA</h1>
                        <img src={RSNAImage} alt='RSNA Screenshot' className='project_page_image' />
                        <h2 className='work_h2'>An international organization gets a face lift.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>The Radiological Society of North America provides resources and grants to radiologists 
                            across the globe, as well as hosts the largest annual conference of its kind. I was brought in to rebrand 
                            the website, helping them find a new brand voice that was friendly, digestible, and easy to understand. 
                            The site was also reorganized, so it is now more intuitive to navigate and controlled by a single CMS.
                        </p>

                        <a href='https://www.rsna.org/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button green_button'>LAUNCH THE SITE</button>
                        </a>
                    </div>

                    <div className="project_photos">
                        <img src={RSNASupporting} alt='RSNA Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default RSNA;