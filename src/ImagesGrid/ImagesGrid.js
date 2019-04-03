import React, { Component } from 'react';
import axios from "axios";
import AssetThumb from "../AssetThumb/AssetThumb"

class ImagesGrid extends Component{
    constructor(){
        super();
        this.state = {
            assetsList: []
        }
    }
    //Get list of assets from the server when component mount
    componentDidMount(){
        axios.get("/api/asset/")
            .then((response) => {
                console.log(response);
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
                                <AssetThumb data={asset}/>
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