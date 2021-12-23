// import { useState } from 'react'
// import { signUp } from '../../services/users'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate()

  const [form, setForm] = useSate({
    username: '',
    email: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  // const handleChange = (event)

  const { username, email, password, passwordConfirmation } = form
  return (
    <div className='form-container'>
      <h3>Sign Up</h3>
      <form>
        <label>Username</label>
        <input
          required
          type='text'
          name='username'
          value={username}
          placeholder='Enter username'
          onChange={handleChange}
        />
        <label>Email address</label>
        <input
          required
          type='email'
          name='email'
          value={email}
          placeholder='Enter email'
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <label>Password Confirmation</label>
        <input
          required
          name='passwordConfirmation'
          value={passwordConfirmation}
          type='password'
          placeholder='Confirm Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  )
}
