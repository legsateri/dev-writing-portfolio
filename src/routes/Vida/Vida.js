////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import VidaImage from './vida.png';
import './Vida.css';
////////////////////////////////////////////////////////////////////////////////

class Vida extends Component {
    render() {
        const color = 'purple_copy_color';

        return (
            <>
                <main className="purple_main project_flex">
                    <header className="color_two project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>Vida's Angels</h1>
                        <img src={VidaImage} alt='Vida Angels Screenshot' className='project_page_image' />
                        <h2 className='work_h2'>A Chicago jewelry brand on a mission to do good.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>I was hired to get the Vida's Angels website up and running properly on Squarespace.
                            This involved selecting a cleaner template that would stand out amongst competitors,
                            a complete rewrite so the brand voice was more concise and effective at generating
                            a sale, and organizing the email flow that is triggered by a purchase. I also
                            assisted the business owner in selecting their primary analytics and setting them
                            up through the Squarespace platform to track the performance of their products and
                            their website, and taught her how to analyze them to determine what changes might 
                            need to be made in the future.</p>
                    </div>

                    <div className="project_photos">
                        images go here
                    </div>
                </main>
            </>
        )
    }
}

export default Vida;