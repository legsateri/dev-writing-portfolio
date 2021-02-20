////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import Contact from '../../components/Contact/Contact';
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import b2b from './b2b.png';
import barrier from './barrier.png';
import email from './email.png';
import holiday from './holiday.png';
import homebound from './homebound.png';
import rebrand from './rebrand.png';
import rsna from './rsna.png';
import travel from './travel.png';
import vida from './vida.png';
import work from '../Coding/work.png';
import './Writing.css';
////////////////////////////////////////////////////////////////////////////////

class Writing extends Component {
    render() {
        return (
            <>
                <main>
                    <Navigation />

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
                            <div className='work_block color_one'>
                                <Link to='/writing/barrier' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Barrier</h2>
                                    <img src={barrier} alt='Barrier Logo' className='brand_image' />
                                    <p className='services'>Copywriting</p>
                                </Link>
                            </div>

                            <div className='work_block color_two'>
                                <Link to='/writing/vidas-angels' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Vida's Angels</h2>
                                    <img src={vida} alt='Vida Angels Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting, UX</p>
                                </Link>
                            </div>

                            <div className='work_block color_three'>
                                <Link to='/writing/sd308' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>SD308</h2>
                                    <img src={homebound} alt='Homebound Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting, Editing</p>
                                </Link>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_four'>
                                <Link to='/writing/rsna' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>RSNA</h2>
                                    <img src={rsna} alt='RSNA Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting, Editing</p>
                                </Link>
                            </div>

                            <div className='work_block color_five'>
                                <h2 className='project_header'>Raise: Travel</h2>
                                <img src={travel} alt='Raise Travel Campaign Screenshot' className='brand_image' />
                                <p className='services'>Copywriting, Project Management</p>
                            </div>

                            <div className='work_block color_one'>
                                <Link to='/writing/raise-rebrand' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Raise: Rebrand</h2>
                                    <img src={rebrand} alt='Rebrand Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting</p>
                                </Link>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_two'>
                                <Link to='/writing/raise-emails' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Raise: Emails</h2>
                                    <img src={email} alt='Outlier Email Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting, Art Direction</p>
                                </Link>
                            </div>

                            <div className='work_block color_three'>
                                <Link to='/writing/raise-holiday' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Raise: Holiday</h2>
                                    <img src={holiday} alt='Holiday Email Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting</p>
                                </Link>
                            </div>

                            <div className='work_block color_four'>
                                <Link to='/writing/raise-b2b' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Raise: B2B Articles</h2>
                                    <img src={b2b} alt='B2B Articles Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting, Editing</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* TABLET CONTENT/STYLING */}

                    <div className='writing_tablet'>
                        <div className='writing_flex'>
                            <div className='work_block color_one'>
                                <Link to='/writing/barrier' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Barrier</h2>
                                    <img src={barrier} alt='Barrier Logo' className='brand_image' />
                                    <p className='services'>Copywriting</p>
                                </Link>
                            </div>

                            <div className='work_block color_two'>
                                <Link to='/writing/vidas-angels' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Vida's Angels</h2>
                                    <img src={vida} alt='Vida Angels Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting</p>
                                </Link>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_three'>
                                <Link to='/writing/sd308' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>SD308</h2>
                                    <img src={homebound} alt='Homebound Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting, Editing</p>
                                </Link>
                            </div>

                            <div className='work_block color_four'>
                                <Link to='/writing/rsna' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>RSNA</h2>
                                    <img src={rsna} alt='RSNA Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting, Editing</p>
                                </Link>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_five'>
                                <h2 className='project_header'>Raise: Travel</h2>
                                <img src={travel} alt='Raise Travel Campaign Screenshot' className='brand_image' />
                                <p className='services'>Copywriting, Project Management</p>
                            </div>

                            <div className='work_block color_one'>
                                <Link to='/writing/raise-rebrand' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Raise: Rebrand</h2>
                                    <img src={rebrand} alt='Rebrand Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting</p>
                                </Link>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_two'>
                                <Link to='/writing/raise-emails' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Raise: Emails</h2>
                                    <img src={email} alt='Outlier Email Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting, Art Direction</p>
                                </Link>
                            </div>

                            <div className='work_block color_three'>
                                <Link to='/writing/raise-holiday' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Raise: Holiday</h2>
                                    <img src={holiday} alt='Holiday Email Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting</p>
                                </Link>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_four'>
                                <Link to='/writing/raise-b2b' style={{ textDecoration: 'none' }}>
                                    <h2 className='project_header'>Raise: B2B Articles</h2>
                                    <img src={b2b} alt='B2B Articles Screenshot' className='brand_image' />
                                    <p className='services'>Copywriting, Editing</p>
                                </Link>
                            </div>

                            <div className='work_block'></div>
                        </div>
                    </div>

                    {/* MOBILE CONTENT/STYLING */}

                    <div className='writing_mobile'>
                        <div className='work_block color_one'>
                            <Link to='/writing/barrier' style={{ textDecoration: 'none' }}>
                                <h2 className='project_header'>Barrier</h2>
                                <img src={barrier} alt='Barrier Logo' className='brand_image' />
                                <p className='services'>Copywriting</p>
                            </Link>
                        </div>

                        <div className='work_block color_two'>
                            <Link to='/writing/vidas-angels' style={{ textDecoration: 'none' }}>
                                <h2 className='project_header'>Vida's Angels</h2>
                                <img src={vida} alt='Vida Angels Screenshot' className='brand_image' />
                                <p className='services'>Copywriting</p>
                            </Link>
                        </div>

                        <div className='work_block color_three'>
                            <Link to='/writing/sd308' style={{ textDecoration: 'none' }}>
                                <h2 className='project_header'>SD308</h2>
                                <img src={homebound} alt='Homebound Screenshot' className='brand_image' />
                                <p className='services'>Copywriting, Editing</p>
                            </Link>
                        </div>

                        <div className='work_block color_four'>
                            <Link to='/writing/rsna' style={{ textDecoration: 'none' }}>
                                <h2 className='project_header'>RSNA</h2>
                                <img src={rsna} alt='RSNA Screenshot' className='brand_image' />
                                <p className='services'>Copywriting, Editing</p>
                            </Link>
                        </div>

                        <div className='work_block color_five'>
                            <h2 className='project_header'>Raise: Travel</h2>
                            <img src={travel} alt='Raise Travel Campaign Screenshot' className='brand_image' />
                            <p className='services'>Copywriting, Project Management</p>
                        </div>

                        <div className='work_block color_one'>
                            <Link to='/writing/raise-rebrand' style={{ textDecoration: 'none' }}>
                                <h2 className='project_header'>Raise: Rebrand</h2>
                                <img src={rebrand} alt='Rebrand Screenshot' className='brand_image' />
                                <p className='services'>Copywriting</p>
                            </Link>
                        </div>

                        <div className='work_block color_two'>
                            <Link to='/writing/raise-emails' style={{ textDecoration: 'none' }}>
                                <h2 className='project_header'>Raise: Emails</h2>
                                <img src={email} alt='Outlier Email Screenshot' className='brand_image' />
                                <p className='services'>Copywriting, Art Direction</p>
                            </Link>
                        </div>

                        <div className='work_block color_three'>
                            <Link to='/writing/raise-holiday' style={{ textDecoration: 'none' }}>
                                <h2 className='project_header'>Raise: Holiday</h2>
                                <img src={holiday} alt='Holiday Email Screenshot' className='brand_image' />
                                <p className='services'>Copywriting</p>
                            </Link>
                        </div>

                        <div className='work_block color_four'>
                            <Link to='/writing/raise-b2b' style={{ textDecoration: 'none' }}>
                                <h2 className='project_header'>Raise: B2B Articles</h2>
                                <img src={b2b} alt='B2B Articles Screenshot' className='brand_image' />
                                <p className='services'>Copywriting, Editing</p>
                            </Link>
                        </div>
                    </div>

                    <Contact />
                </main>
            </>
        )
    }
}

export default Writing;