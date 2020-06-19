////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Contact from '../../components/Contact/Contact';
import HolidayCampaign from '../../components/HolidayCampaign/HolidayCampaign';
import TravelCampaign from '../../components/TravelCampaign/TravelCampaign';
import WebsiteRedesign from '../../components/WebsiteRedesign/WebsiteRedesign';
////////////////////////////////////////////////////////////////////////////////
import work from '../Coding/work.png';
import './Writing.css';
////////////////////////////////////////////////////////////////////////////////

class Writing extends Component {
    render() {
        return (
            <>
                <main>
                    <header className='work_header'>
                        <h1>Writing Work</h1>
                    </header>

                    <div className='introduction'>
                        <span className='coding_circle'>
                            <img src={work} alt='Pencil icon' className='icon' />
                        </span>

                        <h2>WHAT I'M UP TO.</h2>
                        <p>Here's my most recent work. For more, please <a href='mailto:allegrapusateri@gmail.com?subject=I want to hire you.' className='inline_link' hover={{ color: '#F15361' }}>email me</a>.</p>
                    </div>

                    <WebsiteRedesign />

                    <TravelCampaign />

                    <HolidayCampaign />

                    <Contact />
                </main>
            </>
        )
    }
}

export default Writing;