import React, { Component } from 'react';
import './HeaderMenu.scss';
import logo from './logo.png';

class HeaderMenu extends Component {
    render() {
        return (
            <div className="head row">
               <a href='/assets/'><img className='logo-head' src={logo}></img></a>
               <form>
                    <input type='text' placeholder='Search' className='search-in'></input>
               </form>
            </div>
        );
    }
}
export default HeaderMenu;