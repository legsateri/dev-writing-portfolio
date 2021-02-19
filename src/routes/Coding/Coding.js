////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Contact from '../../components/Contact/Contact';
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import chicken from './chicken.png';
import cover from './cover.png';
import quiz from './quiz.png';
import words from './words.png';
import work from './work.png';
import './Coding.css';
////////////////////////////////////////////////////////////////////////////////

class Coding extends Component {
    render() {
        return (
            <>
                <main>
                    <Navigation />

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
                            <div className='work_block color_one'>
                                <h2 className='project_header'>Chicken Tinder</h2>
                                <img src={chicken} alt='Chicken Tinder Screenshot' className='brand_image' />
                                <p className='services'>UX, Backend, Frontend</p>
                            </div>

                            <div className='work_block color_two'>
                                <h2 className='project_header'>Loss For Words</h2>
                                <img src={words} alt='Loss For Words Screenshot' className='brand_image' />
                                <p className='services'>UX, Backend, Frontend</p>
                            </div>

                            <div className='work_block color_three'>
                                <h2 className='project_header'>Cover to Cover</h2>
                                <img src={cover} alt='Cover to Cover Screenshot' className='brand_image' />
                                <p className='services'>UX, Backend, Frontend</p>
                            </div>
                        </div>

                        <div className='coding_flex'>
                            <div className='work_block color_four'>
                                <h2 className='project_header'>Foodie Fight Quiz</h2>
                                <img src={quiz} alt='Foodie Quiz Screenshot' className='brand_image' />
                                <p className='services'>UX, Frontend</p>
                            </div>

                            <div className='work_block'></div>
                            <div className='work_block'></div>
                        </div>
                    </div>

                    {/* TABLET CONTENT/STYLING */}

                    <div className='coding_tablet'>
                        <div className='coding_flex'>
                            <div className='work_block color_one'>
                                <h2 className='project_header'>Chicken Tinder</h2>
                                <img src={chicken} alt='Chicken Tinder Screenshot' className='brand_image' />
                                <p className='services'>UX, Backend, Frontend</p>
                            </div>

                            <div className='work_block color_two'>
                                <h2 className='project_header'>Loss For Words</h2>
                                <img src={words} alt='Loss For Words Screenshot' className='brand_image' />
                                <p className='services'>UX, Backend, Frontend</p>
                            </div>
                        </div>

                        <div className='coding_flex'>
                            <div className='work_block color_three'>
                                <h2 className='project_header'>Cover to Cover</h2>
                                <img src={cover} alt='Cover to Cover Screenshot' className='brand_image' />
                                <p className='services'>UX, Backend, Frontend</p>
                            </div>

                            <div className='work_block color_four'>
                                <h2 className='project_header'>Foodie Fight Quiz</h2>
                                <img src={quiz} alt='Foodie Quiz Screenshot' className='brand_image' />
                                <p className='services'>UX, Frontend</p>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE CONTENT/STYLING */}

                    <div className='coding_mobile'>
                        <div className='work_block color_one'>
                            <h2 className='project_header'>Chicken Tinder</h2>
                            <img src={chicken} alt='Chicken Tinder Screenshot' className='brand_image' />
                            <p className='services'>UX, Backend, Frontend</p>
                        </div>

                        <div className='work_block color_two'>
                            <h2 className='project_header'>Loss For Words</h2>
                            <img src={words} alt='Loss For Words Screenshot' className='brand_image' />
                            <p className='services'>UX, Backend, Frontend</p>
                        </div>

                        <div className='work_block color_three'>
                            <h2 className='project_header'>Cover to Cover</h2>
                            <img src={cover} alt='Cover to Cover Screenshot' className='brand_image' />
                            <p className='services'>UX, Backend, Frontend</p>
                        </div>

                        <div className='work_block color_four'>
                            <h2 className='project_header'>Foodie Fight Quiz</h2>
                            <img src={quiz} alt='Foodie Quiz Screenshot' className='brand_image' />
                            <p className='services'>UX, Frontend</p>
                        </div>
                    </div>

                    <Contact />
                </main>
            </>
        )
    }
}

export default Coding;