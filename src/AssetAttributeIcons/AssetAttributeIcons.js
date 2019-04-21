import React, { Component } from 'react';
import "./AssetAttributeIcons.scss";

class AssetAttributeIcons extends Component{
    render(){
        return(
            <div className="item-atributes">
                <div className='atribute'>
                    <i className="far fa-heart"></i>
                    <span>7</span>
                </div>
                <div className='atribute'>
                    <i className="far fa-arrow-alt-circle-down"></i>
                    <span>7</span>
                </div>
            </div>
        );
    }
}

export default AssetAttributeIcons;