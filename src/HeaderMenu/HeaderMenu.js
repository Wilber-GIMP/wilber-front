import React, { Component } from 'react';
import './HeaderMenu.scss';
import logo from './static/images/logo_100.png';
import {Link} from 'react-router-dom';


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
        this.setState({submit: true});
    }
    handleChange = (event) => {
        this.setState({searchQuery : event.target.value });
    }
    render() {
            if(window.location.pathname === '/'){
                return '';
            }else{
                return (
                    <div className="head row">
                    <a href='/assets/'><img className='logo-head' src={'/static/images/logo_100.png'}></img></a>
                    <form onSubmit={e => this.handleSubmit(e)}>
                            <input type='text' value={this.state.searchQuery} onChange={this.handleChange} placeholder='Search' className='search-in'></input>
                            <Link to={{pathname:'/assets/', state:{search: this.state.searchQuery}}} >
                                <button className='btn-input'  onSubmit={e => this.handleSubmit(e)}><i className="fas fa-search"></i>   </button>
                            </Link>
                    </form>
                    </div>
                );
            }
    }
}
export default HeaderMenu;
