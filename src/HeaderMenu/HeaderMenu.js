import React, { Component } from 'react';
import './HeaderMenu.scss';
import logo from './static/images/logo_100.png';
import { Redirect } from 'react-router-dom'



class HeaderMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery : '',
            submit: false
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        //this.props.handleSearch(this.state.searchQuery)
        this.setState({submit: true});
    }
    handleChange = (event) => {
        this.setState({searchQuery : event.target.value });
    }
    render() {
        if(this.state.submit){
            console.log(this.state.submit);    
            this.setState({submit: false})        
            return (<Redirect to={{pathname:'/assets/', state:{search: this.state.searchQuery}}} />);
        }else{
            return (
                <div className="head row">
                <a href='/assets/'><img className='logo-head' src={'/static/images/logo_100.png'}></img></a>
                <form onSubmit={e => this.handleSubmit(e)}>
                        <input type='text' value={this.state.searchQuery} onChange={this.handleChange} placeholder='Search' className='search-in'></input>
                        <button className='btn-input'><i className="fas fa-search"></i>   </button>

                </form>
                </div>
            );
        }
    }
}
export default HeaderMenu;
