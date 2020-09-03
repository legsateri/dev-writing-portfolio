////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import weeklyemail from './weekly-email.png';
import './WeeklyEmails.css';
////////////////////////////////////////////////////////////////////////////////

class WeeklyEmails extends Component {
    render() {
        return (
            <>
                <div className='weekly_emails'>
                    <h2>WEEKLY EMAILS</h2>
                    <p>For every marketing email we sent at Raise, we’d create an outlier test. Outlier tests allowed the designers and myself to throw away the restraints of brand guidelines and create any email we wanted (within the week's theme) to see if we could come up with something that generated more revenue than our tried and true templates. You can find more samples of my work on these emails <a href={`https://drive.google.com/drive/u/0/folders/1Zzhfb1_AZyBSdGYt40hGKJ4cuH9i3aGL`} target="_blank" className='writing_link' hover={{ color: '#D6F5F7' }}>here</a>.</p>

                    <div className='campaign_images'>
                        <img src={weeklyemail} alt='Weekly Email' className='campgain-screenshots' /><br />
                    </div>
                </div>
            </>
        )
    }
}

export default WeeklyEmails;