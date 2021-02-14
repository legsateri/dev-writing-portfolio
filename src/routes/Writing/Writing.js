////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Contact from '../../components/Contact/Contact';
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
                            <div className='work_block color_one'>
                                <h2 className='project_header'>Barrier</h2>
                                <p className='services'>Copywriting</p>
                            </div>

                            <div className='work_block color_two'>
                                <h2 className='project_header'>Vida's Angels</h2>
                                <p className='services'>Copywriting</p>
                            </div>

                            <div className='work_block color_three'>
                                <h2 className='project_header'>SD308</h2>
                                <p className='services'>Copywriting, Editing</p>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_four'>
                                <h2 className='project_header'>RSNA</h2>
                                <p className='services'>Copywriting, Editing</p>
                            </div>

                            <div className='work_block color_five'>
                                <h2 className='project_header'>Raise: Travel</h2>
                                <p className='services'>Copywriting, Project Management</p>
                            </div>

                            <div className='work_block color_six'>
                                <h2 className='project_header'>Raise: Rebrand</h2>
                                <p className='services'>Copywriting</p>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_one'>
                                <h2 className='project_header'>Raise: Emails</h2>
                                <p className='services'>Copywriting, Art Direction</p>
                            </div>

                            <div className='work_block color_two'>
                                <h2 className='project_header'>Raise: Holiday</h2>
                                <p className='services'>Copywriting</p>
                            </div>

                            <div className='work_block color_three'>
                                <h2 className='project_header'>Raise: B2B Articles</h2>
                                <p className='services'>Copywriting, Editing</p>
                            </div>
                        </div>
                    </div>

                    {/* TABLET CONTENT/STYLING */}

                    <div className='writing_tablet'>
                        <div className='writing_flex'>
                            <div className='work_block color_one'>
                                <h2 className='project_header'>Barrier</h2>
                                <p className='services'>Copywriting</p>
                            </div>

                            <div className='work_block color_two'>
                                <h2 className='project_header'>Vida's Angels</h2>
                                <p className='services'>Copywriting</p>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_three'>
                                <h2 className='project_header'>SD308</h2>
                                <p className='services'>Copywriting, Editing</p>
                            </div>

                            <div className='work_block color_four'>
                                <h2 className='project_header'>RSNA</h2>
                                <p className='services'>Copywriting, Editing</p>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_five'>
                                <h2 className='project_header'>Raise: Travel</h2>
                                <p className='services'>Copywriting, Project Management</p>
                            </div>

                            <div className='work_block color_six'>
                                <h2 className='project_header'>Raise: Rebrand</h2>
                                <p className='services'>Copywriting</p>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_one'>
                                <h2 className='project_header'>Raise: Emails</h2>
                                <p className='services'>Copywriting, Art Direction</p>
                            </div>

                            <div className='work_block color_two'>
                                <h2 className='project_header'>Raise: Holiday</h2>
                                <p className='services'>Copywriting</p>
                            </div>
                        </div>

                        <div className='writing_flex'>
                            <div className='work_block color_three'>
                                <h2 className='project_header'>Raise: B2B Articles</h2>
                                <p className='services'>Copywriting, Editing</p>
                            </div>

                            <div className='work_block'></div>
                        </div>
                    </div>

                    {/* MOBILE CONTENT/STYLING */}

                    <div className='writing_mobile'>
                        <div className='work_block color_one'>
                            <h2 className='project_header'>Barrier</h2>
                            <p className='services'>Copywriting</p>
                        </div>

                        <div className='work_block color_two'>
                            <h2 className='project_header'>Vida's Angels</h2>
                            <p className='services'>Copywriting</p>
                        </div>

                        <div className='work_block color_three'>
                            <h2 className='project_header'>SD308</h2>
                            <p className='services'>Copywriting, Editing</p>
                        </div>

                        <div className='work_block color_four'>
                            <h2 className='project_header'>RSNA</h2>
                            <p className='services'>Copywriting, Editing</p>
                        </div>

                        <div className='work_block color_five'>
                            <h2 className='project_header'>Raise: Travel</h2>
                            <p className='services'>Copywriting, Project Management</p>
                        </div>

                        <div className='work_block color_six'>
                            <h2 className='project_header'>Raise: Rebrand</h2>
                            <p className='services'>Copywriting</p>
                        </div>

                        <div className='work_block color_one'>
                            <h2 className='project_header'>Raise: Emails</h2>
                            <p className='services'>Copywriting, Art Direction</p>
                        </div>

                        <div className='work_block color_two'>
                            <h2 className='project_header'>Raise: Holiday</h2>
                            <p className='services'>Copywriting</p>
                        </div>

                        <div className='work_block color_three'>
                            <h2 className='project_header'>Raise: B2B Articles</h2>
                            <p className='services'>Copywriting, Editing</p>
                        </div>
                    </div>

                    <Contact />
                </main>
            </>
        )
    }
}

export default Writing;