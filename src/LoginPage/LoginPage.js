import React, {Component} from 'react';
import './LoginPage.scss';
import axios from "axios";
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom';

export class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            username : "",
            pass : "",
            error: false,
            isRegister: 0,
            toHome: false
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
            console.log(response);
            if(response.data.key){
                const cookies = new Cookies();
                cookies.set('login_token', response.data.key );
            }
            this.setState({
                toHome: true
            })
        })
        .catch(erro => {
            console.log(erro);
            this.setState({
                error: true
            })
        });
    };
    changeLogin = () => {
        this.setState({
            isRegister: !this.state.isRegister
        })
    }
    render(){
        if(this.state.toHome){
            return <Redirect to='/'/>
        }
        return(
            <div className="LoginPage">
                <div className="LoginCard">
                    <div id='logintype'>
                        <button className={'log-btn' + (!this.state.isRegister ? ' active' : '')} 
                            onClick={this.changeLogin}
                            disabled={!this.state.isRegister}>Login</button>
                        <button className={'log-btn' + (this.state.isRegister ? ' active' : '')} 
                            onClick={this.changeLogin}
                            disabled={this.state.isRegister}>Register</button>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email</label>
                        <input type='text' value={this.state.username} onChange={this.handleChanges}/>
                        <label>Password</label>
                        <input type='password' value={this.state.pass}  onChange={this.handleChanges}/>
                        <span className={this.state.error? 'errormsg' : 'noerror'}>User or Password Wrong</span>
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