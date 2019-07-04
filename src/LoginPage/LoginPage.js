import React, {Component} from 'react';
import './LoginPage.scss';
import axios from "axios";

export class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            username : "",
            pass : ""
        }
    }

    handleChanges = (event) => {
        if(event.target.type == 'text'){
            this.setState({username: event.target.value })
        }else{
            this.setState({pass: event.target.value})
        }
    };
    
    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.pass);
        axios.post("/rest-auth/login/?format=json", {
           'username': this.state.username,
           'password': this.setState.pass

        }).then(response => {
            console.log(response);
        });
    };

    render(){
        return(
            <div className="LoginPage">
                <div className="LoginCard">
                    <h3>Login</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input type='text' value={this.state.username} onChange={this.handleChanges}/>
                        <label>Password</label>
                        <input type='password' value={this.state.pass}  onChange={this.handleChanges}/>
                        <button className="btn-main" type='submit' value='submit' onClick={this.handleSubmit}>SUBMIT</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default LoginPage;