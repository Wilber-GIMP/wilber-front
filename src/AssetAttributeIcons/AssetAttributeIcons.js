import React, { Component } from 'react';
import "./AssetAttributeIcons.scss";

class AssetAttributeIcons extends Component{
    render(){
        return(
            <div className="item-atributes">
                <i className="far fa-heart"></i>
                <span>7</span>
                <i className="far fa-arrow-alt-circle-down"></i>
                <span>7</span>
                <i className="fas fa-share-alt"></i>
                <span>7</span>
            </div>
        );
    }
}

export default AssetAttributeIcons;