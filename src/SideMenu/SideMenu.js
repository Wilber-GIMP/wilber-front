import React, {Component} from 'react';
import './SideMenu.scss';
import {Link} from 'react-router-dom';


export class SideMenu extends Component{
    filtersList = ['All Assets','Brushes', 'Patterns', 'Palettes'];
    constructor(props){
        super(props);
        this.state = {
            isOpen : false,
            activeIndex : 0,
            isLogged: false
        }
    }

    toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    handleClick = (index) =>{
        this.setState({
            activeIndex: index
        })
    }

    componentDidMount() {
        const token = localStorage.getItem('login_token');
        if(token){
            this.setState({ isLogged : true});
            console.log(token);
        }
    }


    render(){
        let loginButton = "";
        if(this.state.isLogged){
            loginButton = 
                    <li>
                        <a  href="/">
                                <div className="avatar"><i className="fas fa-user-astronaut"></i>
                                </div>
                                <span id='getin'>Get Out</span>
                        </a>
                    </li>
        }else{
            loginButton = 
                    <li>
                        <a  href="/login/">
                                <div className="avatar"><i className="fas fa-arrow-up"></i>
                                </div>
                                <span id='getin'>Get In</span>
                        </a>
                    </li>
        }
        return(
            <div>
            <div className={'menu-overlay ' + (this.state.isOpen? 'overlay-open' : '')}  onClick={this.toggleMenu}></div>
            <nav id="side-menu" className={"side-menu " + (this.state.isOpen? 'bt-open' : '')}>
                <a href="#" className="bt-menu-trigger"  onClick={this.toggleMenu}><span>Menu</span></a>
                <ul>
                    {loginButton}
                    {
                        this.filtersList.map((filter, index) => {
                            const className = this.state.activeIndex === index ? 'active' : '';
                            return(                            
                                 <li className={className} key={index} onClick={() => this.handleClick(index)}>
                                 <Link to={{pathname : ("/assets/" + filter),  
                                        key : filter
                                    }}>{filter}</Link></li>
                            )
                        })
                    }

                </ul>
             </nav>
            </div>
        );
    }
}