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
            actualPage : 0,
            prevPage : false,
            nextPage : false,
            error: ''
        }
    }
    nextPage = () => {
        this.getAssets(this.state.actualPage + 9);
    }

    prevPage = () => {
        this.getAssets(this.state.actualPage - 9);       
    }

    //Limit = 9, PageStart
    getAssets = (startPage) =>{
        axios.get("/api/asset/?limit=9&offset=" + startPage )
        .then((response) => {
            this.setState({
                assetsList: response.data.results, 
                actualPage: startPage
            });
            console.log(response.data);
            if(response.data.next){
                this.setState({
                    nextPage: true 
                });
            }
            else{
                this.setState({
                    nextPage: false 
                });
            }
            if(response.data.previous){
                this.setState({
                    prevPage: true 
                });
            }
            else{
                this.setState({
                    prevPage: false 
                });
            }
        })
        .catch((error) => {
            this.setState({
                error: "We’re unable to process your request at this time. Please try to reload the page."
            })   
        });
    }
    
    componentDidMount(){
        this.getAssets(0);
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
                        <button className='btn-main' onClick={this.prevPage} disabled={!this.state.prevPage}> <i className='left'></i>Prev  </button>
                        <button className='btn-main' onClick={this.nextPage} disabled={!this.state.nextPage}> Next<i className='right'></i> </button> 
                    </div>
                </section>
            </div>
            );
        }
    }
}

export default ImagesGrid;