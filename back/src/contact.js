import Navbar from './components/navbar.js'
//import Maps from './maps'

import Contactform from './components/contactform'
import './components/contactform.scss';
import { useState } from 'react';
//import Axios from 'axios';

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        document.getElementById('question').innerHTML = 'Sended message: <br>Name: ' + name + '<br>E-mail: ' + email + '<br>Message: ' + message
        alert('Thank you ' + name + '. Is your e-mail: ' + email + '? We will son response on your message: ' + message)

        /*
        Axios.post("http://localhost:3001/create", {
            name: name,
            position: position,
            wage: wage
        }).then(() => {
            console.log("success")
        })
        */
        console.log('Name: ' + name + ' email: ' + email + ' text: ')
        console.log("success")

    }
    return (
        <>
            <Navbar />
            <Contactform />
            <main className="contactpage">
                <header className="contact-header" id='layout-100vh'>
                    <h1>Conctact Page </h1>
                    <p>You can contact me directly on website from form or send email or call on mobile phone</p>
                    <p>061 755 74 77</p>
                    <p id="question">Sended Message</p>
                </header>               
            </main>
        </>
    );
}

export default Contact;