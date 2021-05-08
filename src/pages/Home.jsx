import React from 'react';
import landing from '../images/landing.png';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="home">
            <div className="container home">
            <div>
                <img src={landing} alt="Happy Workers"/>
                <div className="description">
                    <h1 className='orange-dark'>BusinesSoft - Leading Software Firm</h1>
                    <p>BusinesSoft is one of the first software companies in Bulgaria. We develop and implement end-to-end software systems for business management of construction, production and trade companies.</p>
                    <Link to='about' className="btn-orange">Read More</Link>
                </div>
            </div>
            <div className="boxes">
                <div className="box">
                    <h1>Our Products</h1>
                    <p>We provide high quality services and reliable software</p>
                    <Link to='products' className="btn-white">More</Link>
                </div>
                <div className="box">
                    <h1>News</h1>
                    <p>Change Log, New Features and Updated Version of out software.</p>
                    <button className="btn-white">More</button>
                </div>
                <div className="box">
                    <h1>Contact Us</h1>
                    <p>Get in Touch! We are looking forward to start a project with you!</p>
                    <Link to='contact' className="btn-white">More</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;