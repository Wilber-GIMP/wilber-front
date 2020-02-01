import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid';
import AssetPage from '../AssetPage/AssetPage';
import LoginPage from '../LoginPage/LoginPage';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import Landing from '../LandingPage/LandingPage';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Profile from '../Profile/Profile';
import UserEdit from '../UserEdit/UserEdit';
import LoginContext from '../../context/loginContext';

function Home(){
        const [iSlogged, setIslogged ] =  React.useState(false);

        return(
            <div className="container">
                <Router>
                    <LoginContext.Provider value={iSlogged,setIslogged}>
                    <HeaderMenu />
                    <SideMenu/>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/assets/:filter?" component={ImagesGrid}/>
                    <Route path="/asset/:id/" component={AssetPage}/>
                    <Route path="/profile/:id?" component={Profile}/>
                    <Route path="/useredit/:id?" component={UserEdit}/>
                    <Route path="/login" component={LoginPage}/>
                    </LoginContext.Provider>
                </Router>
            </div>
        );
}
export default Home;