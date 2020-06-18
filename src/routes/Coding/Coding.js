////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Contact from '../../components/Contact/Contact';
////////////////////////////////////////////////////////////////////////////////
import cover from './cover-to-cover.png';
import foodie from './foodie-fight.png';
import prompt from './loss-for-words.png';
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

                    <div className='food_quiz'>
                        <a href='https://legsateri.github.io/quiz-app/' target='_blank' rel='noopener noreferrer'><img src={foodie} alt='Foodie Fight Quiz' className='app_screenshots' /></a>

                        <h2>FOODIE FIGHT QUIZ</h2>
                        <p className='technologies'>JQuery/HTML/CSS</p>

                        <br />
                        <p>I created a single page quiz app so people can put their random knowledge to the test.</p>
                        <a href='https://github.com/legsateri/quiz-app' target='_blank' rel='noopener noreferrer'><button type='submit' className='button'>VIEW ON GITHUB</button></a>
                    </div>

                    <div className='loss_for_words'>
                        <a href='https://loss-for-words-app.legsateri.now.sh/' target='_blank' rel='noopener noreferrer'><img src={prompt} alt='Loss For Words' className='app_screenshots' /></a>

                        <h2>LOSS FOR WORDS</h2>
                        <p className='technologies'>React/Node/Postgres/SQL</p>

                        <br />
                        <p>I created a website to help solve writer's block by providing writing prompts for users to respond to, and allow users to create their own.</p>
                        <a href='https://github.com/legsateri/loss-for-words-app' target='_blank' rel='noopener noreferrer'><button type='submit' className='button'>VIEW ON GITHUB</button></a>
                    </div>

                    <div className='cover_to_cover'>
                        <a href='https://cover-to-cover-app.legsateri.now.sh/' target='_blank' rel='noopener noreferrer'><img src={cover} alt='Cover to Cover' className='app_screenshots' /></a>

                        <h2>COVER TO COVER</h2>
                        <p className='technologies'>React/Node/Postgres/SQL</p>

                        <br />
                        <p>I created a website that allows friends to create virtual book clubs so users can assign, read and comment on books no matter how far apart they may be.</p>
                        <a href='https://github.com/legsateri/cover-to-cover-app' target='_blank' rel='noopener noreferrer'><button type='submit' className='button'>VIEW ON GITHUB</button></a>
                    </div>

                    <Contact />
                </main>
            </>
        )
    }
}

export default Coding;