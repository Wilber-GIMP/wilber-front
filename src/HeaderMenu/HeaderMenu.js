import React, { Component } from 'react';
import './HeaderMenu.scss';
import logo from './static/images/logo_100.png';

class HeaderMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery : ''
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.handleSearch(this.state.searchQuery)
    }
    handleChange = (event) => {
        this.setState({searchQuery : event.target.value });
    }
    render() {
        return (
            <div className="head row">
               <a href='/assets/'><img className='logo-head' src={'/static/images/logo_100.png'}></img></a>
               <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.searchQuery} onChange={this.handleChange} placeholder='Search' className='search-in'></input>
                    <button className='btn-input'><i className="fas fa-search"></i>   </button>

               </form>
            </div>
        );
    }
}
export default HeaderMenu;
