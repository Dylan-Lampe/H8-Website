import React from 'react'
import './Form.css'

const form = () => {
  return<form> 
    <div className='form-group'>
        <label>Username:</label>
        <input
            type='text'
            placeholder='John'
            required
        />
    </div>

    <div className='form-group'>
        <label>Password:</label>
        <input
            type='text'
            placeholder='Doe'
            required
        />
    </div>

    <input type='submit'/>

    <p className='submitted-text'>Form Submitted</p>
  </form>
}

export default form