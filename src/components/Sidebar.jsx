import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = ({sidebar, setSidebar}) => {
    const removeHandler = () => {
        setSidebar(!sidebar);
    }
    return (
        <div className={sidebar ? "sidebar translateX0" : "sidebar translateX100"}>
            <div className="remove" onClick={removeHandler}>
                <div></div>
                <div></div>
            </div>
            <div className='ul'>
                <Link className='li' to='/'>Home</Link>
                <Link className='li' to='/about'>About</Link>
                <Link className='li' to='/products'>Products</Link>
                <Link className='li' to='/contact'>Contacts</Link>
                <Link className='li' to='/'>News</Link>
                <Link className='li' to='/'>Careers</Link>
                <Link className='li' to='/'>Downloads</Link>
                <Link className='li' to='/'>Support</Link>
                <Link className='li' to='/'>Partenrs</Link>
            </div>
        </div>
    )
}

export default Sidebar;