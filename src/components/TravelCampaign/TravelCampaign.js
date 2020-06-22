////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import travelone from './travel-email-1.png';
import traveltwo from './travel-email-2.png';
import travelthree from './travel-email-3.png';
import './TravelCampaign.css';
////////////////////////////////////////////////////////////////////////////////

class TravelCampaign extends Component {
    render() {
        return (
            <>
                <div className='travel_campaign'>
                    <h2>TRAVEL CAMPAIGN</h2>
                    <p>At Raise, I worked with a designer to create a summer travel campaign. This campaign took a more content-focused approach than previous marketing campaigns. The goal was to create an experience, in order to inspire people to take a life-changing trip and use Raise to save money on hotels, airlines, gas and more..</p>

                    <div className='campaign_images'>
                        <img src={travelone} alt='Travel Email' className='campgain-screenshots' /><br />
                        <img src={traveltwo} alt='Travel Email' className='campgain-screenshots' /><br />
                        <img src={travelthree} alt='Travel Email' className='campgain-screenshots' /><br />
                    </div>
                </div>
            </>
        )
    }
}

export default TravelCampaign;