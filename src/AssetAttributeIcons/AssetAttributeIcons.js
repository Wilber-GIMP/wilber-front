import React, { Component } from 'react';
import "./AssetAttributeIcons.scss";
import axios from "axios";


class AssetAttributeIcons extends Component{
    constructor(props){
        super(props);
        this.assetid = props.assetid;
        this.likeit = this.likeit.bind(this);
        this.state = {
            nlikes: props.nlikes,
            ndownloads: props.ndownloads,
        }
    }

    likeit(){
        axios.get(`/api/asset/${this.assetid}/like`)
            .then((response) => {
               this.setState(
                  { nlikes: this.state.nlikes +1 }
               ) 
               console.log(response);
            });
    }
    render(){
        return(
            <div className="item-atributes">
                <div className='atribute'>
                    <button onClick={this.likeit} className="likebtn"><i className="far fa-heart"></i></button>
                    <span>{this.state.nlikes}</span>
                </div>
                <div className='atribute'>
                    <i className="far fa-arrow-alt-circle-down"></i>
                    <span>{this.state.nlikes}</span>
                </div>
            </div>
        );
    }
}

export default AssetAttributeIcons;