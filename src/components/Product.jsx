import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const Product = ({text, other}) => {
    const [toggle, setToggle] = useState(false);

    const toggleTextHandler = () => {
        setToggle(!toggle);
    }
    return(       
        <div className='product' onClick={toggleTextHandler}>
            <div>
                <h2>{text} <span>{other}</span></h2>
                <Link to='/'>
                <FontAwesomeIcon 
                    size='2x' 
                    icon={faLongArrowAltRight}
                    className='icon' >
                </FontAwesomeIcon>
                </Link>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default Product;