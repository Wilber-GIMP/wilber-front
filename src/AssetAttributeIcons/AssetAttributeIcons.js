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
            liked: false
        }
    }

    likeit(){
        if(!this.state.liked){
            axios.get(`/api/asset/${this.assetid}/like`)
                .then((response) => {
                   this.setState({ 
                    nlikes: this.state.nlikes +1 ,
                    liked: true
                    });
                });
        }
        else{
            axios.get(`/api/asset/${this.assetid}/unlike`)
                .then((response) => {
                   this.setState({ 
                    nlikes: this.state.nlikes -1 ,
                    liked: false
                    });                    
                });
        }
    }
    render(){
        return(
            <div className="item-atributes">
                <div className='atribute likes'>
                    <button onClick={this.likeit} className={"likebtn " + (this.state.liked? 'liked' : '')}>
                        <div className="icons">
                            <i className="far fa-heart stroke"></i>
                            <i className="fas fa-heart filled"></i>
                        </div>
                    </button>
                    <span>{this.state.nlikes}</span>
                </div>
            </div>
        );
    }
}

export default AssetAttributeIcons;