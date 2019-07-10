import React, {Component} from 'react';
import './SideMenu.scss';


export class SideMenu extends Component{
    filtersList = ['All Assets','Brushes', 'Patterns', 'Colors' ];
    constructor(props){
        super(props);
        this.state = {
            isOpen : false,
            activeIndex : 0
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

    render(){
        return(
            <div>
            <div className='menu-overlay'></div>
            <nav id="side-menu" className={"side-menu " + (this.state.isOpen? 'bt-open' : '')}>
                <a href="#" className="bt-menu-trigger"  onClick={this.toggleMenu}><span>Menu</span></a>
                <ul>
                    <li>
                        <a  href="/login">
                                <div className="avatar"><i className="fas fa-arrow-up"></i>
                                </div>
                                <span id='getin'>Get In</span>
                        </a>
                    </li>
                    {
                        this.filtersList.map((filter, index) => {
                            const className = this.state.activeIndex === index ? 'active' : '';
                            return(                            
                                 <li className={className} key={index} onClick={() => this.handleClick(index)}><a href="#">{filter}</a></li>
                            )
                        })
                    }

                </ul>
             </nav>
            </div>
        );
    }
}