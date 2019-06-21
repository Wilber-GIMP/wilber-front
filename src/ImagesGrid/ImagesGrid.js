/** This is a grid with thumbnails images from the available
 * assets. It's displayed in the  main page /Home
**/
import React, { Component } from 'react';
import AssetThumb from "../AssetThumb/AssetThumb"; 
import ApiService from "../providers/ApiService";
import "./ImagesGrid.scss";
import axios from "axios";


class ImagesGrid extends Component{
    constructor(){
        super();
        this.state = {
            assetsList: []
        }
    }

    componentDidMount(){
        axios.get("/api/asset/")
            .then((response) => {
                this.setState({
                    assetsList: response.data
                });
            });
    }

    render() {
        return(
            <div>
                <section className="grid">
                    <div className="row">
                        { this.state.assetsList.map((asset)=> {
                            return (
                                <AssetThumb data={asset} key={asset.id}/>
                            );
                        })
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default ImagesGrid;