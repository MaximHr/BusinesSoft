import React from 'react';
import img from '../images/man.jpg';
import Product from '../components/Product';

const Products = () => {
    return(
        <div className="products">
            <h1 className='title'>Our Business Software</h1>
            <div className="container">
                <div className='left'>
                    <img src={img} alt="Man" />
                    <p>At BusinesSoft we work hard to provide outstanding software solutions. Our software is designed by us, so we are fully in control and able to add new features, applications or even build new code on demand to create truly unique user experiences.</p>
                </div>
                <div className='right'>
                    
                    <Product text='WorkStream' other='.Production'/>
                    <Product text='WorkStream' other='.Construction'/>
                    <Product text='Building'/>
                    <Product text='WorkStream' other='.Cloud'/>
                    <Product text='WorkFlow'/>
                    <Product text='HR Manager'/>
                </div>
            </div>
        </div>
    )
}

export default Products;