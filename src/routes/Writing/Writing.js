////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Contact from '../../components/Contact/Contact';
import B2BArticles from '../../components/B2BArticles/B2BArticles';
import TravelCampaign from '../../components/TravelCampaign/TravelCampaign';
import WebsiteRedesign from '../../components/WebsiteRedesign/WebsiteRedesign';
import WeeklyEmails from '../../components/WeeklyEmails/WeeklyEmails';
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
                        <p>Here's some of my most recent work. You can find more <a href={`https://drive.google.com/drive/u/0/folders/1TcxP5L97bfUa2KT4CYvp4xJrIjZi57wS`} className='inline_link' hover={{ color: '#F15361' }}>here</a>.</p>
                    </div>

                    {/* DESKTOP CONTENT/STYLING */}

                    <div className='writing_desktop'>
                        <div className='writing_flex'>
                            <div className='work_block color_one'></div>
                            <div className='work_block color_two'></div>
                            <div className='work_block color_three'></div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_four'></div>
                            <div className='work_block color_five'></div>
                            <div className='work_block color_six'></div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_one'></div>
                            <div className='work_block color_two'></div>
                            <div className='work_block color_three'></div>
                        </div>
                    </div>

                    {/* TABLET CONTENT/STYLING */}

                    <div className='writing_tablet'>
                        <div className='writing_flex'>
                            <div className='work_block color_one'></div>
                            <div className='work_block color_two'></div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_three'></div>
                            <div className='work_block color_four'></div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_five'></div>
                            <div className='work_block color_six'></div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_one'></div>
                            <div className='work_block color_two'></div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_three'></div>
                            <div className='work_block'></div>
                        </div>
                    </div>

                    {/* MOBILE CONTENT/STYLING */}

                    <div className='writing_mobile'>
                        <div className='work_block color_one'></div>
                        <div className='work_block color_two'></div>
                        <div className='work_block color_three'></div>
                        <div className='work_block color_four'></div>
                        <div className='work_block color_five'></div>
                        <div className='work_block color_six'></div>
                        <div className='work_block color_one'></div>
                        <div className='work_block color_two'></div>
                        <div className='work_block color_three'></div>
                    </div>

                <Contact />
            </main>
            </>
        )
    }
}

export default Writing;