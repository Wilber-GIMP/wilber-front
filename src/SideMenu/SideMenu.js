import React, {Component} from 'react';
import './SideMenu.scss'

export class SideMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen : false
        }
    }

    toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        return(
            <div>
            <nav id="side-menu" className="side-menu">
                <a href="#" className={"bt-menu-trigger " + (this.state.isOpen? 'bt-open' : '')}  onClick={this.toggleMenu}><span>Menu</span></a>
                <ul>
                    <li><a href="#">Zoom</a></li>
                    <li><a href="#">Refresh</a></li>
                    <li><a href="#">Lock</a></li>
                </ul>
             </nav>
            </div>
        );
    }
}