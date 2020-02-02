import React, {useState, useEffect, useContext} from 'react';
import './SideMenu.scss';
import {Link} from 'react-router-dom';
import LoginContext from '../../states/loginContext';

export function SideMenu(props){
    const {isLogged,setIslogged } = useContext(LoginContext);
    const filtersList = ['All Assets','Brushes', 'Patterns', 'Palettes'];
    const [isOpen, setIsOPen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleMenu = () => {
        setIsOPen(!isOpen);
    }

    const handleClick = (index) =>{
        setActiveIndex(index);
    }


    const logout = () => {
        localStorage.removeItem('login_token');
        setLogout;
    }

        let logButton = "";
        if(isLogged){
            logButton = 
                    <li onClick={logout}>
                        <a  href="/assets">
                                <div className="avatar"><i className="fas fa-user-astronaut"></i>
                                </div>
                                <span id='getin'>Get Out</span>
                        </a>
                    </li>
        }else{
            logButton = 
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
            <div className={'menu-overlay ' + (isOpen? 'overlay-open' : '')}  onClick={toggleMenu}></div>
            <nav id="side-menu" className={"side-menu " + (isOpen? 'bt-open' : '')}>
                <a href="#" className="bt-menu-trigger"  onClick={toggleMenu}><span>Menu</span></a>
                <ul>
                    {logButton}
                    {
                        filtersList.map((filter, index) => {
                            const className = activeIndex === index ? 'active' : '';
                            return(                            
                                 <li className={className} key={index} onClick={() => handleClick(index)}>
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