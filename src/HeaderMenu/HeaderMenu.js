import React, { Component } from 'react';
import './HeaderMenu.scss';

class HeaderMenu extends Component {
    render() {
        return (
            <div className="head row">
                <div className="types-menu">
                    <button className="type-buttons btn">Type A</button>
                    <button className="type-buttons btn">Type A</button>
                    <button className="type-buttons btn">Type A</button>
                    <button className="type-buttons btn">Type A</button>
                    <button className="type-buttons btn">Type A</button>
                </div>
            </div>
        );
    }
}
export default HeaderMenu;