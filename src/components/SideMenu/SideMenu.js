import React, {useState, useEffect} from 'react';
import './SideMenu.scss';
import {Link} from 'react-router-dom';


export function SideMenu(props){
    const filtersList = ['All Assets','Brushes', 'Patterns', 'Palettes'];
    const [isOpen, setIsOPen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLogged,setIsLogged] = useState(false);

    const toggleMenu = () => {
        setIsOPen(!isOpen);
    }

    const handleClick = (index) =>{
        setActiveIndex(index);
    }

    useEffect(() => {
        const token = localStorage.getItem('login_token');
        if(token){
            setIsLogged(true);
        }
    }, []);


    const logout = () => {
        localStorage.removeItem('login_token');
        setIsLogged(false);
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