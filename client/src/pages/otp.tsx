import axios from 'axios'
import React, { useState } from 'react'

export const Otp = () => {
    const [otp, setOtp ] = useState('')

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        
        await axios.post('/verify', {
            otp
        })
    }

    return (
        <>
<div>
  <h1 className="brand"><span>Welcome User </span> Sign-up</h1>
  <div className="wrapper animated bounceInLeft">
    <div className="company-info">
      <h3>Panda Enterprises</h3>
      <ul>
        <li><i className="fa fa-road" /> NIT KKR</li>
        <li><i className="fa fa-phone" /> (+91) 9358668593</li>
        <li><i className="fa fa-envelope" /> test@panda.com</li>
      </ul>
    </div>
    <div className="contact">
     message will be here
      <form onSubmit={handleSubmit}>
        <p>
          <label>Enter otp</label>
          <input type="text" name="otp" value={otp} onChange={e => setOtp(e.target.value)} required />
        </p>
        <p className="full">
          <button type="submit">Submit</button>
        </p>
      </form>
      <br />
      <form method="POST" action="resend">
        <p className="full">
          <button type="submit">resend otp</button>
        </p>
      </form></div>
  </div>
</div>

        </>
    )
}