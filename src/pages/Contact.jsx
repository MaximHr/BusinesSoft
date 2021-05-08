import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkedAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import Alert from '../components/Alert';

const Contact = () => {
    const name = useRef('');
    const email = useRef('');
    const message = useRef('');
    const [showAlert, seShowAlert] = useState(0); //false

    const sendMessageHandler = () => {
        if(name.current.value.replaceAll(' ', '') === '' || email.current.value.replaceAll(' ', '') === '' || message.current.value.replaceAll(' ', '') === '') {
            seShowAlert(1)
        } else { 
            seShowAlert(2)
        }
    }
    return(
        <div className="contact">
            {showAlert === 1 ? 
                <Alert 
                    text='Please, fill out the forms' 
                    isRed={true}
                    className='alertAnim'
                /> :
                showAlert === 2 ? 
                <Alert 
                    text='Message submited' 
                    isRed={false} 
                /> 
                : ''
            }
            <h1 className='title'>Get In Touch !</h1>
            <h3>We are looking forward to start a project with you!</h3>
            <div className="container">
                <div>
                <div>
                    <a><FontAwesomeIcon icon={faMapMarkedAlt}/></a>
                    <h4>Bulgaria, Sofia 1407 76А James Bourcher Blvd.
                        HILL TOWER Business Center, floor 2
                    </h4>
                </div>
                <div>
                    <a><FontAwesomeIcon icon={faPhone} className='rotate'/></a>
                    <h4>+359 2 862 52 52
                    </h4>
                </div>
                <div>
                    <a><FontAwesomeIcon icon={faClock}/></a>
                    <h4>Mon – Fri …… 10 am – 8 pm
                        Sat, Sun …… Closed
                    </h4>
                </div>
                </div>
                <div className="right">
                    <input 
                        type="text" 
                        placeholder="Enter Your Name"
                        ref={name}
                    />
                    <input 
                        type="text" 
                        placeholder="Enter Email Adress"
                        ref={email}
                    />
                    <textarea placeholder="Enter Your Message" ref={message}></textarea>
                    <button className="btn-orange" onClick={sendMessageHandler}>Submit</button>
                </div>
            </div>
            <div className="gmap_canvas">
                <iframe 
                    title='Google Maps'
                    width="612" 
                    height="500" 
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=Bulgaria,%20Sofia,%20James%20Baucher%2076&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0" >
                </iframe>
            </div>
        </div>
    )
}

export default Contact;