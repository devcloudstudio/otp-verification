import axios from 'axios'
import React, { useState } from 'react'

interface Credentials{
    firstname?:string
    lastname?:string
    email?:string
    phone?:string
}

export const Contact = () => {
     const [credentials, setCredentials] = useState<Credentials>({firstname: '', lastname: '', email: '', phone: '' })

     const onChange = (e: any) => setCredentials({...credentials, [e.target.name]: e.target.value})

     const handleSubmit = async( e: React.SyntheticEvent ) => {
         e.preventDefault()
         await axios.post('/send', {
             firstname: credentials.firstname,
             lastname: credentials.lastname,
             email: credentials.email,
             phone: credentials.phone
         })
     }
    return(
        <> <h1 className="brand"><span>Welcome User </span> Sign-up</h1>
        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h3>Panda Enterprises</h3>
            <ul>
              <li><i className="fa fa-road" />Your address</li>
              <li><i className="fa fa-phone" /> (+91) **********</li>
              <li><i className="fa fa-envelope" />Your website</li>
            </ul>
          </div>
          <div className="contact">
            <h3>Email Us</h3>
            <form onSubmit={handleSubmit}>
              <p>
                <label>Firstname</label>
                <input type="text" value={credentials.firstname} onChange={onChange} name="firstname" required />
              </p>
              <p>
                <label>Lastname</label>
                <input type="text" value={credentials.lastname} onChange={onChange} name="lastname" required />
              </p>
              <p>
                <label>Email Address</label>
                <input type="email" value={credentials.email} onChange={onChange} name="email" required />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="number" value={credentials.phone} onChange={onChange}  name="phone" required />
              </p>
              <p className="full">
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </div>

        </>
    )
}