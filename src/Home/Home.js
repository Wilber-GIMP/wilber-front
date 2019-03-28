import React, { Component } from 'react';
import ImagesGrid from '../ImagesGrid/ImagesGrid';
import AssetPage from '../AssetPage/AssetPage';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import {BrowserRouter as Router, Route } from "react-router-dom";

class Home extends Component{
    render() {
        return(
            <div className="container">
                <HeaderMenu/>
                <Router>
                    <Route exact path="/" component={ImagesGrid}/>
                    <Route exact path="/asset/:id" component={AssetPage}/>
                </Router>
            </div>
        );
    }
}
export default Home;