import React from 'react';
import avatar from '../assets/images/avatar.JPG';

const Landing = function () {

    return(
        <div className="landing-container">
            <div className="profile-img-wrapper">
                <img src={avatar} alt="Jade Shenker" className="profile-img"/>
                <div className="links-wrapper">
                    <a href="https://github.com/jadeshenker" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jadeshenker/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://codepen.io/jadeshenker" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    <a href="https://dribble.com/jadeshenker" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
                </div>
            </div>
            <div className="profile-intro">
                <h1>Jade Shenker</h1>
                <h2>FRONTEND DEVELOPER</h2>
                <p>Hi, I'm Jade! I'm a Frontend Developer with a passion for design currently based in Brooklyn, NY. I love seeeing my ideas truly come to life through development, and it is my mission to use my skills to make the internet a more fair and user-friendly space.</p>
            </div>
        </div>
    );
}

export default Landing;