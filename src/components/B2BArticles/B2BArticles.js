////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import b2barticle from './b2b-article-1.png';
import './B2BArticles.css';
////////////////////////////////////////////////////////////////////////////////

class B2BArticles extends Component {
    render() {
        return (
            <>
                <div className='b2b_articles'>
                    <h2>B2B ARTICLES</h2>
                    <p>In a desire to expand their brand partnerships, Raise released a series of articles I wrote explaining why partnering with a secondary gift card marketplace was beneficial. These were released as part of a short-term newsletter to all brands who previously-attended a secondary marketplace conference called Nexus. You can find all four articles in this series <a href={`https://drive.google.com/drive/u/0/folders/1srXF2KgbjdYv1coliT-s2vvLW5yJthUK`} target="_blank" className='writing_link' hover={{ color: '#D6F5F7' }}>here</a>.</p>

                    <div className='campaign_images'>
                    <img src={b2barticle} alt='Weekly Email' className='campgain-screenshots' /><br />
                    </div>
                </div>
            </>
        )
    }
}

export default B2BArticles;