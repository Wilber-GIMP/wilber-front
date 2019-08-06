import React, { Component } from 'react';
import './HeaderMenu.scss';
import logo from './static/images/logo.png';

class HeaderMenu extends Component {
    render() {
        return (
            <div className="head row">
               <a href='/assets/'><img className='logo-head' src={'/static/images/logo.png'}></img></a>
               <form>
                    <input type='text' placeholder='Search' className='search-in'></input>
               </form>
            </div>
        );
    }
}
export default HeaderMenu;
