import React, { Component } from 'react';
import './HeaderMenu.scss';

class HeaderMenu extends Component {
    render() {
        return (
            <div className="head row">
                <div className="types-menu">
                    <button className="type-buttons btn-main btn">ALL</button>
                    <button className="type-buttons btn-main btn">COLORS</button>
                    <button className="type-buttons btn-main btn">BRUSHES</button>
                    <button className="type-buttons btn-main btn">IMAGES</button>
                    <button className="type-buttons btn-main btn">FONTS</button>
                </div>
            </div>
        );
    }
}
export default HeaderMenu;