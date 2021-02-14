////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Contact from '../../components/Contact/Contact';
////////////////////////////////////////////////////////////////////////////////
import work from './work.png'
import './Coding.css';
////////////////////////////////////////////////////////////////////////////////

class Coding extends Component {
    render() {
        return (
            <>
                <main>
                    <header className='work_header'>
                        <h1>Coding Work</h1>
                    </header>

                    <div className='introduction'>
                        <span className='coding_circle'>
                            <img src={work} alt='Pencil icon' className='icon' />
                        </span>

                        <h2>WHAT I'M UP TO.</h2>
                        <p>Here's my most recent work. For more, please visit my <a href='https://github.com/legsateri' target='_blank' rel='noopener noreferrer' className='inline_link' style={{ color: '#F1536' }}>Github</a>.</p>
                    </div>

                    {/* DESKTOP CONTENT/STYLING */}

                    <div className='coding_desktop'>
                        <div className='coding_flex'>
                            <div className='work_block color_one'></div>
                            <div className='work_block color_two'></div>
                            <div className='work_block color_three'></div>
                        </div>

                        <div className='coding_flex'>
                            <div className='work_block color_four'></div>
                            <div className='work_block color_five'></div>
                            <div className='work_block color_six'></div>
                        </div>

                        <div className='coding_flex'>
                            <div className='work_block color_one'></div>
                            <div className='work_block color_two'></div>
                            <div className='work_block color_three'></div>
                        </div>
                    </div>

                    {/* TABLET CONTENT/STYLING */}

                    <div className='coding_tablet'>
                        <div className='coding_flex'>
                            <div className='work_block color_one'></div>
                            <div className='work_block color_two'></div>
                        </div>

                        <div className='coding_flex'>
                            <div className='work_block color_three'></div>
                            <div className='work_block color_four'></div>
                        </div>

                        <div className='coding_flex'>
                            <div className='work_block color_five'></div>
                            <div className='work_block color_six'></div>
                        </div>

                        <div className='coding_flex'>
                            <div className='work_block color_one'></div>
                            <div className='work_block color_two'></div>
                        </div>

                        <div className='coding_flex'>
                            <div className='work_block color_three'></div>
                            <div className='work_block'></div>
                        </div>
                    </div>

                    {/* MOBILE CONTENT/STYLING */}

                    <div className='coding_mobile'>
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

export default Coding;