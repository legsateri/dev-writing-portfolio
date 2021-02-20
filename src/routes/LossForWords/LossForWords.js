////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../../components/Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import LossForWordsImage from '../Coding/words.png';
import LossForWordsSupporting from './loss-for-words-supporting.png';
////////////////////////////////////////////////////////////////////////////////

class LossForWords extends Component {
    render() {
        const color = 'purple_copy_color';

        return (
            <>
                <main className="project_flex">
                    <header className="color_two project_page_header">
                        <Navigation color={color} />

                        <h1 className='work_h1'>Loss For Words</h1>
                        <img src={LossForWordsImage} alt='Loss For Words Screenshot' className='project_page_image' />
                        <h2 className='work_h2'>It's time to get the creative juices flowing.</h2>
                    </header>

                    <div className="project_explanation">
                        <h3>THE PROJECT</h3>
                        <p className='work_p'>This app was built as a solution to help writers get past their own writers block. 
                            Built using Node.js and React.js, I created my own server and API for this full-stack application. You can 
                            search for prompts, respond to prompts, and create your own prompts. This app has already been adopted and 
                            used by a handful of creative writing groups and clubs. 
                        </p>

                        <a href='https://loss-for-words-app.legsateri.now.sh/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                            <button className='launch_button purple_button'>LAUNCH THE SITE</button>
                        </a>
                        <a href='https://github.com/legsateri/loss-for-words-app' target='_blank' rel='noopener noreferrer' className='inline_link' style={{ color: '#F1536' }}><p>Repo</p></a>
                    </div>

                    <div className="project_photos">
                        <img src={LossForWordsSupporting} alt='Loss for Words Screenshot' className='supporting_image' />
                    </div>
                </main>
            </>
        )
    }
}

export default LossForWords;