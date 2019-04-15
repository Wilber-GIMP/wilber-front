import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ButtonMain from "../ButtonMain/ButtonMain";

class AssetThumb extends Component{
   render() {
       return (
           <div className="col-4">
               <Link to={{ pathname: '/asset/'+ this.props.data.id }} >
                   <figure>
                       <img src={this.props.data.image} alt=""/>
                       <figcaption>
                           <h2>{this.props.data.name}</h2>
                           <ButtonMain title="View"/>
                       </figcaption>
                   </figure>
               </Link>
           </div>
       );
   }
}

export default AssetThumb;