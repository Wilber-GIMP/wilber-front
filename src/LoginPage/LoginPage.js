import React, {Component} from 'react';
import './LoginPage.scss';

export class LoginPage extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.state ={
            username : "",
            pass : ""
        }
    }

    handleChanges(event){
        if(event.target.type == 'text'){
            this.setState({username: event.target.value })
        }else{
            this.setState({pass: event.target.value})
        }
    };

    handleSubmit(event) {
        console.log(this.state.username);
        console.log(this.state.pass);
        event.preventDefault();
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
                        <button className="btn-main" type='submit' value='submit'>SUBMIT</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default LoginPage;