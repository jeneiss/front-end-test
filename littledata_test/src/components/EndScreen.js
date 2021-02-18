import React from 'react'
import { Link } from 'react-router-dom'

import './EndScreen.css'

function EndScreen() {
  return (
    <div className='end-screen__link-container'>
      <Link to='/'>
        <div className='end-screen__link'>Go back to start</div>
      </Link>
    </div>
  )
}

export default EndScreen
