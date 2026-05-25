import React, { useState } from 'react'
import './Form.css'

const Form = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [submittedMessageToggled, setSubmittedMessageToggled] = useState(false)
  
  function handleSubmit(e) {
    e.preventDefault()

    setUsername('')
    setPassword('')
    setSubmittedMessageToggled(true)
  }

  return (
    <form onSubmit={handleSubmit}> 
        <div className='form-group'>
            <label>Username:</label>
            <input
                type='text'
                placeholder='John'
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
        </div>

        <div className='form-group'>
            <label>Password:</label>
            <input
                type='text'
                placeholder='Doe'
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </div>

        
        {!submittedMessageToggled && <input type='submit' disabled={!username || !password} />}

        {submittedMessageToggled && <p className='submitted-text'>Form Submitted</p>}
    </form>
  )
}

export default Form