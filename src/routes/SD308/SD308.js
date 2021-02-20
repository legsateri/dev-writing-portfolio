////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import SD308Image from '../Writing/homebound.png';
import SD308Supporting from './sd308-supporting.png';
import PDF from './HomeboundManual.pdf';
////////////////////////////////////////////////////////////////////////////////

class SD308 extends Component {
    render() {
        const color = 'blue_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_three project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>SD308</h1>
                        <img src={SD308Image} alt='Homebound Screenshot' className='project_page_image_vertical' />
                        <h2 className='work_h2'>A manual made for teachers and parents.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>Homebound Tutoring services are provided to students who, with a doctors note, are 
                            declared unable to attend school due to illness. I worked with the school district to create a manual 
                            that laid out for the administration, teachers, and parents exactly how Homebound Tutoring was going to 
                            work in their schools.
                        </p>

                        <a href={PDF} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button blue_button'>VIEW THE MANUAL</button>
                        </a>
                    </div>

                    <div className="project_photos">
                        <img src={SD308Supporting} alt='SD308 Homebound Manual Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default SD308;