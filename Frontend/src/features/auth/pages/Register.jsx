import React from 'react'
import { useNavigate , Link } from 'react-router'

const Register = () => {

  const navigate = useNavigate

    const handleSubmit = (e) =>{
    e.preventDefault()
  }


  return (
    <main>
      <div className="form-container">
        
        <h1>Register</h1>
        
        <form onSubmit={handleSubmit} autoComplete="off">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" autoComplete="off" id="username"placeholder='Enter Username'/>
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter Email address' />
          </div>
        
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder = 'Enter Password' />
          </div>

          <div>
            <button className='button primary-button'>Register</button>
          </div>
        
        </form>

        <p>Already have an account? <Link to="/login">Login</Link> </p>
      
      </div>
    </main>
  )
}

export default Register