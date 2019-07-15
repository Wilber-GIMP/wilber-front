import React from 'react';
import './LandingPage.scss'
import logo from './logo.png';

function Landing(props){
    return(
        <div className='landinng-content'>
            <img src={logo} id='logo-landing' ></img>
            <h1>Wilber Social</h1>
        </div>
    );
}
export default Landing;