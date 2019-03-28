import React, { Component } from 'react';
import AssetAttributeIcons from "../AssetAttributeIcons/AssetAttributeIcons";


class AssetPage extends Component{
    render(){
        const {data} = this.props.location.state;
        return(
            <div>
                <figure>
                    <img src={data.image} alt=""/>
                    <figcaption>
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                    </figcaption>
                </figure>
                <AssetAttributeIcons/>
            </div>
        );
    }
}
export default AssetPage;