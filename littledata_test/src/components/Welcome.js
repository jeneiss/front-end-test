import React from 'react'
import { Link } from 'react-router-dom'

import './Welcome.css'

function Welcome() {
  return (
    <div className='welcome'>
      <div className='welcome__title-container'>
        <h1>Littledata Welcome Flow Test</h1>
      </div>

      <div className='welcome__content-container'>
        <div className='welcome__content-container-inner'>

          <div className='welcome__profile'>
            <div className='welcome__profile-title'>John</div>
            <div className='welcome__profile-text'>
              John is a new customer for littledata. We want him to go through the full survey so that we can properly set up his account.
            </div>
            <Link to='/store-info'>
              <div className='welcome__link'>Enter John</div>
            </Link>
          </div>

          <div className='welcome__profile'>
            <div className='welcome__profile-title'>Claire</div>
            <div className='welcome__profile-text'>
              Claire was invited by John to her account. We only want her to answer a few quick questions and that's it.
            </div>
            <Link to='/survey'>
              <div className='welcome__link'>Enter Claire</div>
            </Link>
          </div>

          <div className='welcome__profile'>
            <div className='welcome__profile-title'>Paul</div>
            <div className='welcome__profile-text'>
              Paul is a returning customer. Since he has already answered all the questions before, we can take him directly to the app.
            </div>
            <Link to='/end-screen'>
            <div className='welcome__link'>Enter Paul</div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Welcome

//3 Links with paths to:
//  John: <StoreInfo /> => <Survey /> => (maybe) <Destination /> => <EndScreen />
//  Claire: <Survey /> => <EndScreen />

//  Paul: <EndScreen />
