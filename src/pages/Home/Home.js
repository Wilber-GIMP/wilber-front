import React,{useState, useEffect } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid';
import AssetPage from '../AssetPage/AssetPage';
import LoginPage from '../LoginPage/LoginPage';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import Landing from '../LandingPage/LandingPage';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import User from "../User/User";
import Profile from '../Profile/Profile';
import LoginContext from '../../states/loginContext';

function Home(){
        const [isLogged, setIslogged ] =  useState(false);

        useEffect(() => {
            const token = localStorage.getItem('login_token');
            console.log("Tokeen save", token);
            if(token){
                setIslogged(true);
                axios.interceptors.request.use(function (config) {
                    console.log("Tokeen intercept", token);
                    config.headers['Authorization'] = token;
                
                    return config;
                });
            }

        }, []);
    
        
        return(
            <div className="container">
                <Router>
                    <LoginContext.Provider value={{isLogged, setIslogged}}>
                    <HeaderMenu />
                    <SideMenu/>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/assets/:filter?" component={ImagesGrid}/>
                    <Route path="/asset/:id/" component={AssetPage}/>
                    <Route path="/profile/:id?" component={Profile}/>
                    <Route path="/user/:id?" component={User}/>
                    <Route path="/login" component={LoginPage}/>
                    </LoginContext.Provider>
                </Router>
            </div>
        );
}
export default Home;