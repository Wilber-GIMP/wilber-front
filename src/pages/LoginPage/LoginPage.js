import React, {Component} from 'react';
import './LoginPage.scss';
import axios from "axios";
import {Redirect} from 'react-router-dom';

export class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            username : '',
            pass : '',
            pass2: '',
            error: '',
            isRegister: 0,
            toHome: false
        }
    }
    //Same handle for Login and Registration
    handleChanges = (event) => {
        this.setState({
            error: false
        });
        if(event.target.name == 'username'){
            this.setState({username: event.target.value });
        }else if(event.target.name  == 'email'){
            this.setState({email: event.target.value});
        }else if(event.target.name == 'password1'){
            this.setState({pass: event.target.value});
        }else if(event.target.name == 'password2'){
            this.setState({pass2: event.target.value});
        }
    };
    
    validateForm = () => {
        return this.state.username.length > 0 && this.state.pass.length > 0;
    };

    saveToken = (response) =>{
        if(response.data.key){
            localStorage.setItem('login_token', response.data.key);
        }
        this.setState({
            toHome: true
        })
    };

    submitLogin = (event) => {
        event.preventDefault();
        axios.post("/rest-auth/login/", {
           'username': this.state.username,
           'password': this.state.pass
        }).then(response => {
            window.alert("Success Login");
            this.saveToken(response);
        })
        .catch(erro => {
            console.log(erro);
            this.setState({
                error: 'User or Password Wrong'
            })
        });
    };

    submitRegister = (event) =>{
        event.preventDefault();
        axios.post("/rest-auth/registration/", {
           'email': this.state.email, 
           'username': this.state.username,
           'password1': this.state.pass,
           'password2': this.state.pass2,
        }).then(response => {
            console.log(response);            
            this.saveToken(response);
        }).catch(erro => {
            console.log(erro);         
            if(erro.response.data.email){
                this.setState({
                    error: erro.response.data.email.join("\n")
                }) 
            }else if(erro.response.data.username){
                this.setState({
                    error: erro.response.data.username.join("\n")
            }) 
            }else if(erro.response.data.password1){                
                this.setState({
                    error: erro.response.data.password1.join("\n")
                })
            }else if(erro.response.data.password2){
                this.setState({
                    error: erro.response.data.password2.join("\n")
                })
            }else if(erro.response.data.non_field_errors){
                this.setState({
                    error: erro.response.data.non_field_errors.join("\n")
                })
            }else{
                this.setState({
                    error: 'Unable to Register, check your data and try again.'
                })
            }
        });
    }

    changeLogin = () => {
        this.setState({
            isRegister: !this.state.isRegister
        })
    }

    render(){
        let form;
        if(this.state.toHome){
            return <Redirect to='/assets/'/>
        }
        if(this.state.isRegister) {
            form =  
            <form onSubmit={this.submitRegister}>
                <label>Email</label>
                <input name='email' type='email' value={this.state.email} onChange={this.handleChanges}/>
                <label>Username</label>
                <input name='username' type='text' value={this.state.username} onChange={this.handleChanges}/>
                <label>Password</label>
                <input name='password1' type='password' value={this.state.pass}  onChange={this.handleChanges}/>
                <label>Repeat Password</label>
                <input name='password2' type='password' value={this.state.pass2}  onChange={this.handleChanges}/>
                <span className={this.state.error? 'errormsg' : 'noerror'}>{this.state.error}</span>
                <button className="btn-main" 
                    type='submit' value='submit' 
                    onClick={this.submitRegister}
                    disabled={!this.validateForm()}>SUBMIT</button>
            </form>
        }else{
            form =  
            <form onSubmit={this.submitLogin}>
                <label>Username</label>
                <input name='username' type='text' value={this.state.username} onChange={this.handleChanges}/>
                <label>Password</label>
                <input name='password1' type='password' value={this.state.pass}  onChange={this.handleChanges}/>
                <span className={this.state.error? 'errormsg' : 'noerror'}>{this.state.error}</span>
                <button className="btn-main" 
                    type='submit' value='submit' 
                    onClick={this.submitLogin}
                    disabled={!this.validateForm()}>SUBMIT</button>
            </form>
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
                    {form}
                        <a title="Google" className="socialaccount_provider google" href="/accounts/google/login/?process=login">Google Login</a>
                </div>
            </div>
        );
    }

}

export default LoginPage;