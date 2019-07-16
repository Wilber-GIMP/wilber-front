/** This is a grid with thumbnails images from the available
 * assets. It's displayed in the  main page /Home
**/
import React, { Component } from 'react';
import AssetThumb from "../AssetThumb/AssetThumb"; 
import ApiService from "../providers/ApiService";
import "./ImagesGrid.scss";
import axios from "axios";
import HeaderMenu from '../HeaderMenu/HeaderMenu';

class ImagesGrid extends Component{
    constructor(){
        super();
        this.state = {
            assetsList: [],
            error: ''
        }
    }

    componentDidMount(){
        axios.get("/api/asset/")
            .then((response) => {
                this.setState({
                    assetsList: response.data.results                  
                });
            })
            .catch((error) => {
                this.setState({
                    error: "We’re unable to process your request at this time. Please try to reload the page."
                })   
            });

    }

    render() {
        if(this.state.error){
            return(
                <h2>{this.state.error}</h2>
            );
        }
        else{
            return(
                <div>
                <HeaderMenu/>
                <section className="grid">
                    <div className="row">
                        { this.state.assetsList.map((asset)=> {
                            return (
                                <AssetThumb data={asset} key={asset.id}/>
                            );
                        })
                        }
                    </div>
                    <div className="row pagination">
                        <button className='btn-main'> <i className='left'></i>Prev  </button>
                        <button className='btn-main'> Next<i className='right'></i> </button> 
                    </div>
                </section>
            </div>
            );
        }
    }
}

export default ImagesGrid;