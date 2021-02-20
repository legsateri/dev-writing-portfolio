////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import RaiseTravelImage from '../Writing/travel.png';
import RaiseTravelSupporting from './raise-travel-supporting.png';
import './RaiseTravel.css';
////////////////////////////////////////////////////////////////////////////////

class RaiseTravel extends Component {
    render() {
        const color = 'orange_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_five project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>Raise: Travel</h1>
                        <img src={RaiseTravelImage} alt='Raise Travel Screenshot' className='project_page_image_vertical' />
                        <h2 className='work_h2'>Ringing in the holidays with gift cards.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>The VIP Travel campaign was created as an alternative to the typical Raise email 
                            campaign. It had a more sophisticated and exclusive feel and tone, meant to make users feel as though they 
                            were part of a special club. The campaign included a sweepstakes, various sales, and brand spotlights. 
                            Primarily it took place over email, with corresponding landing pages for each send.
                        </p>

                        <a href='https://drive.google.com/drive/u/0/folders/1gLCEa7nZvGEx7SkVxpPPQTdrA_gKANPS' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button orange_button'>VIEW ALL EMAILS</button>
                        </a>
                    </div>

                    <div className="project_photos">
                        <img src={RaiseTravelSupporting} alt='Raise Travel Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default RaiseTravel;