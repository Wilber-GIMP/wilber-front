import React from 'react';
import './LandingPage.scss'

function Landing(props){
    return(
        <div className='landing-content'>
            <img src='/static/images/logo-wilber.svg' id='logo-landing' ></img>
            <h1>Wilber Social</h1>
            <h3>Share and Download Graphic Assets<br></br>
            You can find GIMP Bruches, Color Pallets and many more. </h3>
            <div className='landing-options'>
                <div className='download-section'>
                    <p>
                        Download the Plugin for GIMP to upload or download the Assets
                    </p>
                    <button className='btn-main'>DOWNLOAD PLUGIN</button>
                </div>
                <div className='social-section'>
                    <p>Access our site to download the availables Assets</p>
                    <a href='/assets/'>
                    <button className='btn-main'>ACCESS SITE</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Landing;
