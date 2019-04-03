import React, { Component } from 'react';
import axios from "axios";
import AssetAttributeIcons from "../AssetAttributeIcons/AssetAttributeIcons";
import "./AssetPage.scss"


class AssetPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            asset: {}
        }
    }
    componentDidMount() {
        const {assetid} = this.props.location.id;
        console.log(assetid);
        axios.get("/api/asset/"+ assetid)
            .then((response) => {
                console.log(response);
                this.setState({
                    asset: response.data
                });
            });
    }
    render(){
        return(
            <div className="row asset-content">
                <div className="col-6">
                    <img className="asset-img"src={this.state.asset.image} alt=""/>
                    <AssetAttributeIcons/>
                </div>
                <div className="col-6">
                    <button className="type-buttons">DOWNLOAD</button>
                    <h2 className="asset-name">{this.state.asset.name}</h2>
                    <p className="asset-description">{this.state.asset.description}</p>
                </div>
            </div>
        );
    }
}
export default AssetPage;