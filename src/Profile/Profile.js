import React, { Component } from 'react';
import axios from "axios";
import './Profile.scss';
import AssetThumb from "../AssetThumb/AssetThumb"; 

class Profile extends Component{
    constructor(props){
        super(props);
        const {id} = this.props.match.params;
        this.state = {
            owner: {
                id: id,
                assets:[],
                profile: {
                    photo: ''
                }
            },
            assetList: {
                    image: '',
                link: ''
            }
        }
    }
    
    componentDidMount() {
        axios.get("/api/user/"+ this.state.owner.id + "/")
            .then((response) => {
                console.log(response);
                
                this.setState({owner: response.data});
            }).catch( e => {
                console.log(e);                
            });
    }    

    render(){
        return(
            <div>
            <div className="row">
                <div className="col-6">
                    <h2>User Profile</h2>
                        <div className="user-avatar">
                        <img url={this.state.owner.profile.photo}/>
                        </div>
                        <div className="user-info">
                            <div>Name: {this.state.owner.first_name} {this.state.owner.last_name} </div>
                            <div>Country: {this.state.owner.profile.last_name}</div>
                        </div>
                </div>
                <div className="col-6">                    
                </div>
            </div>
            <div className="row">
                        <h2>User Assets</h2>
                        <div className="row">
                            {this.state.owner.assets.map(item => {
                                return (
                                    <AssetThumb data={item} key={item.id} className="asset-img col-4"/>
                                )
                            })}
                        </div>
            </div>
        </div>
        );
    }
}
export default Profile;