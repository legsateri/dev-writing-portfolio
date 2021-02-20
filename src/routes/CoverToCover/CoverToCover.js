////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import CoverToCoverImage from '../Coding/cover.png';
import CoverToCoverSupporting from './cover-to-cover-supporting.png';
import './CoverToCover.css';
////////////////////////////////////////////////////////////////////////////////

class CoverToCover extends Component {
    render() {
        const color = 'blue_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_three project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>Cover To Cover</h1>
                        <img src={CoverToCoverImage} alt='Cover To Cover Screenshot' className='project_page_image' />
                        <h2 className='work_h2'>It's time to get the creative juices flowing.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>This app was built so friends all over the globe could join and participate in book 
                            clubs. Built using Node.js and React.js, I created my own server and API for this full-stack 
                            application. You can create an account, search for and join book clubs, post new books to read and 
                            comments about them, and start your own club.
                        </p>

                        <a href='https://cover-to-cover-app.legsateri.now.sh/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button blue_button'>LAUNCH THE SITE</button>
                        </a>
                        <a href='https://github.com/legsateri/cover-to-cover-app' target='_blank' rel='noopener noreferrer' className='inline_link' style={{ color: '#F1536' }}><p>Repo</p></a>
                    </div>

                    <div className="project_photos">
                        <img src={CoverToCoverSupporting} alt='Cover to Cover Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default CoverToCover;