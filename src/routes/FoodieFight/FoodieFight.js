////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import FoodieFightImage from '../Coding/quiz.png';
import FoodieFightSupporting from './foodie-fight-supporting.png';
////////////////////////////////////////////////////////////////////////////////

class FoodieFight extends Component {
    render() {
        const color = 'green_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_four project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>Foodie Fight Quiz</h1>
                        <img src={FoodieFightImage} alt='Foodie Fight Screenshot' className='project_page_image' />
                        <h2 className='work_h2'>How well do you know hipster food?</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>This is a simple quiz app, testing user knowledge on random (and weird) food facts. See 
                            if you can navigate your way through. Foodie Fight was built using jQuery, HTML, and CSS.
                        </p>

                        <a href='https://legsateri.github.io/quiz-app/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button green_button'>LAUNCH THE SITE</button>
                        </a>
                        <a href='https://github.com/legsateri/quiz-app' target='_blank' rel='noopener noreferrer' className='inline_link' style={{ color: '#F1536' }}><p>Repo</p></a>
                    </div>

                    <div className="project_photos">
                        <img src={FoodieFightSupporting} alt='Foodie Fight Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default FoodieFight;