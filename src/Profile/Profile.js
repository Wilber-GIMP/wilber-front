import React, { Component } from 'react';
import axios from "axios";
import './Profile.scss';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            owner: {
                assets: [],
                profile: {
                    photo: ''
                }
            }
        }
    }
    
    componentDidMount() {
        axios.get("/api/user/5/")
            .then((response) => {
                this.setState({owner: response.data});                
            });
    }    

    render(){
        console.log(this.state.owner);
        return(
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
                <div>
                    
                </div>
            </div>
        );
    }
}
export default Profile;