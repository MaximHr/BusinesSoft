import React from 'react';

const About = () => {
    return(
        <div className="about">
            <div className="container">
                <div>
                    <h2 className="orange-dark">WELCOME TO</h2>
                    <h1>BusinesSoft Company</h1>
                    <div className="line "></div>
                    <h3>We are the leader with 30 years of experience in the construction market!</h3>
                </div>
                <div>
                    <h2 className='orange-dark'>ABOUT US</h2>
                    <p>BusinesSoft is one of the first software companies in Bulgaria. Our business exists since 1991. Our main focus is development, implementation and support of business management software. We do business through two companies: BusinesSoft LTD sells and supports WorkFlow and HRManager, BusinessSoft Systems JSCo sells and supports WorkStream, BusinesSoft Building и BusinesSoft Building.Cloud. Our HQ is in Sofia. We have representatives in all major cities in Bulgaria. The list of representatives is in Contacts section. We have more than 4000 clients. They are from small companies to big corporates and state institutions.</p>
                    <button className="btn-orange">Our Partners</button>
                </div>
            </div>
        </div>
    )
}

export default About;