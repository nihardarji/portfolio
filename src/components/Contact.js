import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const resetForm = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')

      }

    const onSubmit = e => {
        e.preventDefault()
        const templateParams = {
            from_email: email,
            from_name: name,
            to_name: 'Nihar',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'template_BTlv61M1',
             templateParams,
            'user_6JDZrlO4oqsUYK5Puu17I'
        )
        resetForm()
    }
    return (
        <div id='contact' className='container'>
            <div className='center'>
                <h1 className='white-text'>Contact</h1>
            </div>
            <div className='row'>
                <div className='col s6'>
                    <form onSubmit={onSubmit}>
                    <div className="input-field white-text">
                        <input id="first_name" name='name' value={name} onChange={e => { setName(e.target.value)}} type="text" className="validate white-text" required/>
                        <label htmlFor="first_name">Name</label>
                    </div>
                    <div className="input-field">
                        <input id="email" name='email' value={email} onChange={e => { setEmail(e.target.value)}} type="email" className="validate white-text" required/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input id="subject" name='subject' value={subject} onChange={e => { setSubject(e.target.value)}} type="text" className="validate white-text" required/>
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="input-field">
                        <textarea id="message" name='message' value={message} onChange={e => { setMessage(e.target.value)}} className="materialize-textarea white-text" required/>
                        <label htmlFor="message">Message</label>
                    </div>
                    <div>
                        <button className="btn waves-effect waves-light" type='submit'>Submit</button>
                    </div>
                    </form>
                </div>
                <div className="center">
                <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="nihar2317"><a className="LI-simple-link" href='https://www.linkedin.com/in/nihar2317?trk=profile-badge'>Nihar Darji</a></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
