import React, {Component} from 'react';
import './LoginPage.scss';
import axios from "axios";
import Cookies from 'universal-cookie';

export class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            username : "",
            pass : "",
            error: false
        }
    }

    handleChanges = (event) => {
        this.setState({
            error: false
        });
        if(event.target.type == 'text'){
            this.setState({username: event.target.value })
        }else{
            this.setState({pass: event.target.value})
        }
    };
    
    validateForm = () => {
        return this.state.username.length > 0 && this.state.pass.length > 0;
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/rest-auth/login/", {
           'username': this.state.username,
           'password': this.state.pass
        }).then(response => {
            if(response.data.key){
                const cookies = new Cookies();
                cookies.set('login_token', response.data.key );
            }
        })
        .catch(erro => {
            this.setState({
                error: true
            })
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
                        <span className={this.state.error? 'errormsg' : 'noerror'}>User or Password wrong</span>
                        <button className="btn-main" 
                            type='submit' value='submit' 
                            onClick={this.handleSubmit}
                            disabled={!this.validateForm()}>SUBMIT</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default LoginPage;