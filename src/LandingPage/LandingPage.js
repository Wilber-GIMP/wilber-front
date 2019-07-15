import React from 'react';
import './LandingPage.scss'
import logo from './logo.png';

function Landing(props){
    return(
        <div className='landing-content'>
            <img src={logo} id='logo-landing' ></img>
            <h1>Wilber Social</h1>
            <h3>Share and Download Grafic Assets</h3>
            <h5>You can can find GIMP Bruches, Color Palletsand many more. </h5>
            <div className='landing-options'>
                <div className='download-section'>
                    Download the Plugin for GIMP to upload or download the Assets
                    <button className='btn-main'>DOWNLOAD PLUGIN</button>
                </div>
                <div className='social-section'>
                    Access our site to download the Availables Assets
                    <button className='btn-main'>ACCESS SITE</button>
                </div>
            </div>
        </div>
    );
}
export default Landing;