import React, {Component} from 'react';
import './LoginPage.scss';

export class LoginPage extends Component{
    render(){
        return(
            <div className="LoginPage">
                <div className="LoginCard">
                    <form>
                        <label>Email</label>
                        <input type='email'/>
                        <label>Password</label>
                        <input type='password'/>
                    </form>
                </div>
            </div>
        );
    }

}

export default LoginPage;