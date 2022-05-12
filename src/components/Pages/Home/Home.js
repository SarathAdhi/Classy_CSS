import React from 'react';
import './home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <h1 className='home-text-intro'>Fastly build your Web Application without worrying about writing CSS.</h1>
            <p>The fastest styling framework packed with classes that can be used to build any design, directly in your HTML.</p>
            <a href='/docs' className='get-started-btn'>GET STARTED</a>
        </div>
    )
}
