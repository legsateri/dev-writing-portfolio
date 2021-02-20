////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import RaiseEmailImage from '../Writing/email.png';
import RaiseEmailSupporting from './raise-email-supporting.png';
import './RaiseEmails.css';
////////////////////////////////////////////////////////////////////////////////

class RaiseEmails extends Component {
    render() {
        const color = 'purple_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_two project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>Raise: Emails</h1>
                        <img src={RaiseEmailImage} alt='Raise Emails Screenshot' className='project_page_image_vertical' />
                        <h2 className='work_h2'>Taking email testing to the next level.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>The Creative Team at Raise was always testing testing testing. One of the easiest places 
                            for us to do that was our emails. We created three emails for every send: the control/the usual template, 
                            the variant/the one with a tiny change, and the challenger/the fun creative one. I would research, write 
                            and art direct every challenger we sent (and we sent a lot). We used challengers to test everything 
                            including tone, email length, colors, animation, photography versus illustration versus geometric designs, 
                            and it was always the first place we'd test any potential new branding directions.
                        </p>

                        <a href='https://drive.google.com/drive/u/0/folders/1Zzhfb1_AZyBSdGYt40hGKJ4cuH9i3aGL' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button purple_button'>VIEW ALL EMAILS</button>
                        </a>
                    </div>

                    <div className="project_photos">
                        <img src={RaiseEmailSupporting} alt='Raise Emails Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default RaiseEmails;