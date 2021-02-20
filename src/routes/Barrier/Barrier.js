////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import BarrierImage from '../Writing/barrier.png';
import BarrierSupporting from './barrier-supporting.png';
import PDF from './barrer-branding.pdf';
import './Barrier.css';
////////////////////////////////////////////////////////////////////////////////

class Barrier extends Component {
    render() {
        const color = 'pink_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_one project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>Barrier</h1>
                        <img src={BarrierImage} alt='Barrier Screenshot' className='barrier_project_page' />
                        <h2 className='work_h2'>A new diaper rash cream is in town.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>I was brought in to create taglines and logos for this new product line. Working with 
                            a designer, we did two rounds of exploration—the first being broad and the second narrowing down 
                            concepts for the brand owners. The purpose of this exploration was to determine not just how the brand 
                            wanted to visually represent themselves going forward, but also to explore how they will talk about their 
                            product, which will determine what niche of this market they will be competing within.
                        </p>

                        <a href={PDF} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button pink_button'>VIEW THE PRODUCT</button>
                        </a>
                    </div>

                    <div className="project_photos">
                        <img src={BarrierSupporting} alt='Barrier Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default Barrier;