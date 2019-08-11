import React, { Component } from 'react';
import {Link} from "react-router-dom";

class AssetThumb extends Component{
   render() {
       return (
           <div className="col-4">
               <Link to={{ pathname: '/asset/'+ this.props.data.id + '/'}} >
                   <figure>
                       <img src={this.props.data.image_thumbnail} alt=""/>
                       <figcaption>
                           <div className="asset-thumb-info">
                               <h2>{this.props.data.name}</h2>
                               <button className="btn-main">View</button>
                           </div>
                       </figcaption>
                   </figure>
               </Link>
           </div>
       );
   }
}

export default AssetThumb;
