////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import B2BArticlesImage from '../Writing/b2b.png';
import B2BArticlesSupporting from './b2b-articles-supporting.png';
////////////////////////////////////////////////////////////////////////////////

class B2BArticles extends Component {
    render() {
        const color = 'green_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_four project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>Raise: B2B Articles</h1>
                        <img src={B2BArticlesImage} alt='B2B Articles Screenshot' className='project_page_image' />
                        <h2 className='work_h2'>Schooling businesses in gift cards.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>In order to be a better resource to the brands they partnered with, I drafted a series 
                            of articles for Raise discussing the benefits of the secondary gift card marketplace. These articles were 
                            distributed as part of a newsletter to all brand partners and attendees of the annual Nexus Conference—
                            the largest gift card retailer conference in America.
                        </p>

                        <a href='https://drive.google.com/drive/u/0/folders/1srXF2KgbjdYv1coliT-s2vvLW5yJthUK' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button green_button'>VIEW ALL ARTICLES</button>
                        </a>
                    </div>

                    <div className="project_photos">
                        <img src={B2BArticlesSupporting} alt='B2B Articles Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default B2BArticles;