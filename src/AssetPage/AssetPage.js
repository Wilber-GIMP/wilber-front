import React, { Component } from 'react';
import axios from "axios";
import AssetAttributeIcons from "../AssetAttributeIcons/AssetAttributeIcons";
import "./AssetPage.scss"
import ButtonMain from "../ButtonMain/ButtonMain";

class AssetPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            asset: {},
            owner: {}
        }
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        axios.get("/api/asset/"+ id )
            .then((response) => {
                this.setState({
                    asset: response.data,
                    owner: response.data.owner
                });
            });
    }
    render(){
        return(
            <div className="row asset-content">
                <div className="col-6">
                    <img className="asset-img"src={this.state.asset.image} alt=""/>
                    <div className="asset-att">
                        <span>{"Made by: " + this.state.owner.first_name + " " + this.state.owner.last_name}</span>
                        <AssetAttributeIcons/>
                    </div>
                    <a href={this.state.asset.file}><ButtonMain title="Download"></ButtonMain></a>
                </div>
                <div className="col-6">
                    <h2 className="asset-name">{this.state.asset.name}</h2>
                    <p className="asset-description">{this.state.asset.description}</p>
                </div>
            </div>
        );
    }
}
export default AssetPage;