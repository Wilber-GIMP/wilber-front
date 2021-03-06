/** This is a grid with thumbnails images from the available
 * assets. It's displayed in the  main page /Home
**/
import React, { Component } from 'react';
import AssetThumb from "../AssetThumb/AssetThumb"; 
import "./ImagesGrid.scss";
import axios from "axios";

const PAGES_LIMITE = 9;

class ImagesGrid extends Component{
    constructor(){
        super();
        this.state = {
            assetsList: [],
            actualPage : 0,
            prevPage : false,
            nextPage : false,
            error: '',
            category: '',
            searchQuery: ''
        }
    }
    nextPage = () => {
        this.getAssets(this.state.actualPage + 9);
    }

    prevPage = () => {
        this.getAssets(this.state.actualPage - 9);       
    }

    getAssets = (startPage) =>{
        let category = '';
        let query = '';
        if(this.state.category){
            category = 'category=' + this.state.category.toLowerCase()  + '&';
        }
        if(this.state.searchQuery){
            query = 'search=' + this.state.searchQuery + '&';
        }
        axios.get("/api/asset/?" + query + category + 'limit=' + PAGES_LIMITE + '&offset=' + startPage)
        .then((response) => {
            this.setState({
                assetsList: response.data.results, 
                actualPage: startPage
            });
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

    componentWillReceiveProps(newProps){       
        if(newProps.location.state){
            const {search} = newProps.location.state;            
            this.setState({searchQuery : search}, () => {
                this.getAssets(0);
            });
        }
        const { filter } = newProps.match.params;        
        if(filter && filter!=='All Assets'){
            this.setState({
                category: filter
            }, () => {
                this.getAssets(0);
            });
        }else{
            this.setState({
                category: ''
            }, () => {
                this.getAssets(0);
            });
        }
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