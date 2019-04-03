import React, { Component } from 'react';
import {Link} from "react-router-dom";
import AssetAtributeIcons from '../AssetAttributeIcons/AssetAttributeIcons';

class AssetThumb extends Component{
   render() {
       return (
           <div className="col-4">
               <Link to={{ pathname: '/asset/2', id: { assetid: this.props.data.id }}} >
                   <figure>
                       <img src={this.props.data.image} alt=""/>
                       <figcaption>
                           <h2>{this.props.data.name}</h2>
                           <p>{this.props.data.description}</p>
                           <button>View</button>
                       </figcaption>
                   </figure>
               </Link>
               <AssetAtributeIcons/>
           </div>
       );
   }
}

export default AssetThumb;