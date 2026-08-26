import React, { useState } from 'react'
import './Form.css'

const Form = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [submittedMessageToggled, setSubmittedMessageToggled] = useState(false)
  
  async function handleSubmit(e) {
    e.preventDefault()
        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username, password})
            }) 
            const data = await response.json()
            console.log(data.message)
        
            if (response.ok) {
                setUsername('')     
                setPassword('')
                setSubmittedMessageToggled(true)
            } else {
                console.log(data.message)
            } 
        } catch (error) {
            console.log("Request Failed:", error)
        }
        
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
                type='password'
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