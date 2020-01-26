import React, { Component } from "react";

export default class UserEdit extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      owner: {
        id: id,
        assets: [],
        profile: {
          photo: ""
        }
      }
    };
  }
  render() {
    let profilePic = <i className="fas fa-user-astronaut"></i>;
    if (this.state.owner.profile.photo) {
      // profilePic = <img url={this.state.owner.profile.photo}/>;
    }
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <h2>User Profile</h2>
            <div className="user-avatar">{profilePic}</div>
            <div className="user-info">
              <div>
                Name: {this.state.owner.first_name} {this.state.owner.last_name}{" "}
              </div>
              <div>Country: {this.state.owner.profile.last_name}</div>
            </div>
          </div>
          <div className="col-6">
            <h2>Bio and Socials</h2>
            <div></div>
            <div className="socials">
              <i className="disabled fab fa-twitter-square"></i>
              <i className="disabled fab fa-facebook-square"></i>
              <i className="enabled fab fa-instagram"></i>
              <i className="enabled fab fa-behance-square"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
