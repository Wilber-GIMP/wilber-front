import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import ImagesGrid from '../ImagesGrid/ImagesGrid';
import AssetPage from '../AssetPage/AssetPage';
import LoginPage from '../LoginPage/LoginPage';
import { SideMenu } from '../SideMenu/SideMenu';
import Landing from '../LandingPage/LandingPage';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Profile from '../Profile/Profile';


class Home extends Component{
    render() {
        return(
            <div className="container">
                <Router>
                    <HeaderMenu />
                    <SideMenu/>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/assets/:filter?" component={ImagesGrid}/>
                    <Route path="/asset/:id/" component={AssetPage}/>
                    <Route path="/profile/:id?" component={Profile}/>
                    <Route path="/login" component={LoginPage}/>
                </Router>
            </div>
        );
    }
}
export default Home;