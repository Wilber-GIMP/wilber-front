import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import ImagesGrid from '../ImagesGrid/ImagesGrid';
import AssetPage from '../AssetPage/AssetPage';
import LoginPage from '../LoginPage/LoginPage';
import { SideMenu } from '../SideMenu/SideMenu';

class Home extends Component{
    render() {
        return(
            <div className="container">
                <SideMenu/>
                <Router>
                    <Route exact path="/" component={ImagesGrid}/>
                    <Route path="/asset/:id" component={AssetPage}/>
                    <Route path="/login" component={LoginPage}/>
                </Router>
            </div>
        );
    }
}
export default Home;