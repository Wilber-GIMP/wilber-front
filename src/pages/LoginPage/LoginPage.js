import React, {Component, useContext, useState} from 'react';
import './LoginPage.scss';
import axios from "axios";
import {Redirect} from 'react-router-dom';
import LoginContext from '../../states/loginContext';

export const LoginPage = () => {
            const [email, setEmail] = useState('');
            const [username, setUsername]  = useState('');
            const [pass, setPass]  = useState('');
            const [pass2, setPass2] = useState('');
            const [error, setError] = useState(false);
            const [isRegister, setIsregister] = useState('');
            const [toProfile, setToprofile] = useState(false);
            const {isLogged,setIslogged } = useContext(LoginContext);
    
    const validateForm = () => {
        return username.length > 0 && pass.length > 0;
    };

    const saveToken = (response) => {
        if(response.data.key){
            localStorage.setItem('login_token', response.data.key);
            setToprofile(true);
            setIslogged(true);
        }
    }


    const submitLogin = (event) => {
        event.preventDefault();
        axios.post("/rest-auth/login/", {
           'username': username,
           'password': pass
        }).then(response => {
            saveToken(response);
        })
        .catch(erro => {
            console.log(erro);
            setError('User or Password Wrong');
        });
    };

    const submitRegister = (event) =>{
        event.preventDefault();
        axios.post("/rest-auth/registration/", {
           'email': email, 
           'username': username,
           'password1': pass,
           'password2': pass2,
        }).then(response => {
            saveToken(response);
        }).catch(erro => {
            console.log(erro);         
            if(erro.response.data.email){
                setState({
                    error: erro.response.data.email.join("\n")
                }) 
            }else if(erro.response.data.username){
                setState({
                    error: erro.response.data.username.join("\n")
            }) 
            }else if(erro.response.data.password1){                
                setState({
                    error: erro.response.data.password1.join("\n")
                })
            }else if(erro.response.data.password2){
                setState({
                    error: erro.response.data.password2.join("\n")
                })
            }else if(erro.response.data.non_field_errors){
                setState({
                    error: erro.response.data.non_field_errors.join("\n")
                })
            }else{
                setState({
                    error: 'Unable to Register, check your data and try again.'
                })
            }
        });
    }

    const changeLogin = () => {
        setIsregister(!isRegister);
    }

        let form;
        if(toProfile){
            return <Redirect to={'/profile/'+ username}/>
        }
        if(isRegister) {
            form =  
            <form onSubmit={submitRegister}>
                <label>Email</label>
                <input name='email' type='email' value={email} onChange={event => setEmail(event.target.value)}/>
                <label>Username</label>
                <input name='username' type='text' value={username} onChange={event => setUsername(event.target.value)}/>
                <label>Password</label>
                <input name='password1' type='password' value={pass}  onChange={event => setPass(event.target.value)}/>
                <label>Repeat Password</label>
                <input name='password2' type='password' value={pass2}  onChange={event => setPass2(event.target.value)}/>
                <span className={error? 'errormsg' : 'noerror'}>{error}</span>
                <button className="btn-main" 
                    type='submit' value='submit' 
                    onClick={submitRegister}
                    disabled={!validateForm()}>SUBMIT</button>
            </form>
        }else{
            form =  
            <form onSubmit={submitLogin}>
                <label>Username</label>
                <input name='username' type='text' value={username} onChange={event => setUsername(event.target.value)}/>
                <label>Password</label>
                <input name='password1' type='password' value={pass}  onChange={event => setPass(event.target.value)}/>
                <span className={error? 'errormsg' : 'noerror'}>{error}</span>
                <button className="btn-main" 
                    type='submit' value='submit' 
                    onClick={submitLogin}
                    disabled={!validateForm()}>SUBMIT</button>
            </form>
        }
        return(
            <div className="LoginPage">
                <div className="LoginCard">
                    <div id='logintype'>
                        <button className={'log-btn' + (!isRegister ? ' active' : '')} 
                            onClick={changeLogin}
                            disabled={!isRegister}>Login</button>
                        <button className={'log-btn' + (isRegister ? ' active' : '')} 
                            onClick={changeLogin}
                            disabled={isRegister}>Register</button>
                    </div>
                    {form}
                        <a title="Google" className="socialaccount_provider google" href="/accounts/google/login/?process=login">Google Login</a>
                </div>
            </div>
        );
    }

export default LoginPage;