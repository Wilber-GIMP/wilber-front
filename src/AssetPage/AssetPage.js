import React, { Component } from 'react';
import axios from "axios";
import AssetAttributeIcons from "../AssetAttributeIcons/AssetAttributeIcons";
import "./AssetPage.scss"

class AssetPage extends Component{
    constructor(props){
        super(props);
        const {id} = this.props.match.params;
        this.id = id;
        this.state = {
            asset: {},
            owner: {},
            nlikes: 0,
            ndownloads: 0,
        }
    }
    componentDidMount() {
        axios.get("/api/asset/"+ this.id )
            .then((response) => {
                this.setState({
                    asset: response.data,
                    owner: response.data.owner,
                    nlikes: response.data.num_likes,
                    ndownloads: response.data.num_ndownloads,
                });
            });
    }
    render(){
        return(
            <div className="row asset-content">
                <div className="col-6">
                    <img className="asset-img"src={this.state.asset.image} alt=""/>
                    <div className="asset-att">
                        <span className="owner-name">{"Made by: " + this.state.owner.first_name + " " + this.state.owner.last_name}</span>
                        <AssetAttributeIcons nlikes={this.state.nlikes} ndownloads={this.state.ndownloads} assetid={this.id}/>
                    </div>
                    <a href={this.state.asset.file}><button className='btn-main'>Download</button></a>
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