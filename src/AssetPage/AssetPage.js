import React, { Component } from 'react';
import AssetAttributeIcons from "../AssetAttributeIcons/AssetAttributeIcons";
import "./AssetPage.scss"


class AssetPage extends Component{
    render(){
        const {data} = this.props.location.state;
        return(
            <div className="row asset-content">
                <div className="col-6-sm">
                    <img className="asset-img"src={data.image} alt=""/>
                    <AssetAttributeIcons/>
                </div>
                <div className="col-6-sm">
                    <h2 className="asset-name">{data.name}</h2>
                    <p className="asset-description">{data.description}</p>
                </div>
            </div>
        );
    }
}
export default AssetPage;