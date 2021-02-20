////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import RaiseHolidayImage from '../Writing/holiday.png';
import RaiseHolidaySupporting from './raise-holiday-supporting.png';
////////////////////////////////////////////////////////////////////////////////

class RaiseHoliday extends Component {
    render() {
        const color = 'blue_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_three project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>Raise: Holiday</h1>
                        <img src={RaiseHolidayImage} alt='Raise Holiday Screenshot' className='project_page_image_vertical' />
                        <h2 className='work_h2'>Ringing in the holidays with gift cards.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>One holiday at Raise, we decided to theme our campaign around the idea of unwrapping 
                            savings. As such, we created a series of emails showing that both literally and a little more 
                            abstractly. Combining this idea with holiday puns and saving-based language and we blew past our sales 
                            goals for the season by a mile.
                        </p>

                        <a href='https://drive.google.com/drive/u/0/folders/1EOkY6SAUUsTSChuKHgGY60vxR9Pf0bpy' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button blue_button'>VIEW ALL EMAILS</button>
                        </a>
                    </div>

                    <div className="project_photos">
                        <img src={RaiseHolidaySupporting} alt='Raise Holiday Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default RaiseHoliday;