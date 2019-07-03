import React, {Component} from 'react';
import './LoginPage.scss';

export class LoginPage extends Component{
    render(){
        return(
            <div className="LoginPage">
                <div className="LoginCard">
                    <h3>Login</h3>
                    <form>
                        <label>Email</label>
                        <input type='email'/>
                        <label>Password</label>
                        <input type='password'/>
                        <button className="btn-main">SUBMIT</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default LoginPage;