import "../Styles/contact.css";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Conctact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        try {
            emailjs.sendForm('service_y3k5u1y', 'template_4mmibma', form.current, 'LJMd1ZdvCEfVJO3de')
                .then((result) => {
                    console.log(result.text);
                    form.current.reset();
                }, (error) => {
                    console.log(error.text);
                });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='container'>
            <div className="ellipse4"></div>
            <div className='contact'>
                <h2 class="animate__animated animate__fadeIn" id="contact">Contact me</h2>
                <div className='contact-me-flex-container'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='form-name-and-company'>
                            <input autoComplete="off" type="text" name="user_name" placeholder="name" />
                            <input autoComplete="off" type="text" name="user_company" placeholder="company" />
                        </div>
                        <input autoComplete="off" type="email" name="user_email" placeholder="email" />
                        <input autoComplete="off" type="message" name="message" placeholder="message" />
                        <input className='last' type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Conctact;