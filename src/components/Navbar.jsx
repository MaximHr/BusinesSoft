import React from 'react';
import {Link} from 'react-router-dom';
//TODO: change the logo !!!

const Navbar = ({sidebar, setSidebar}) => {
    const toggleHandler = () => {
        setSidebar(!sidebar);
    }
    return (
        <div className="navbar">
            <div className="container">
                <Link className="logo" to='/'>
                    Busines<span className='orange-dark'>Soft</span>
                </Link>  
                <div className={sidebar ? 'hamburger-clicked' : 'hamburger'} 
                    onClick={toggleHandler}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;