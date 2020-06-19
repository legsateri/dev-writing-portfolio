////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import holidayone from './holiday-email-1.png';
import holidaytwo from './holiday-email-2.png';
import holidaythree from './holiday-email-3.png';
import './HolidayCampaign.css';
////////////////////////////////////////////////////////////////////////////////

class TravelCampaign extends Component {
    render() {
        return (
            <>
                <div className='holiday_campaign'>
                    <h2>TRAVEL CAMPAIGN</h2>
                    <p>I worked with a designer to create a holiday campaign.</p>

                    <div className='campaign_images'>
                        <img src={holidayone} alt='Holiday Email' className='campgain-screenshots' /><br />
                        <img src={holidaytwo} alt='Holiday Email' className='campgain-screenshots' /><br />
                        <img src={holidaythree} alt='Holiday Email' className='campgain-screenshots' /><br />
                    </div>
                </div>
            </>
        )
    }
}

export default TravelCampaign;