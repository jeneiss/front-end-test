import React from 'react'
import littledata_logo from '../assets/littledata_logo.svg'
import './WelcomeWrapper.css'

function WelcomeWrapper({ children, title, hasProgress, fill }) {
  const progress = (
    <div className='progress__container'>
      <div className='progress__fill' style={{width: `${fill}%`}}></div>
    </div>
  )

  return (
    <div className='welcome__wrapper'>
      <div className='welcome__container'>
        <div className='welcome__container-inner'>

          <div className='welcome__logo'>
            <img
              src={littledata_logo}
              alt='Littledata logo'
            />
          </div>

          <h1 className='welcome__title'>{title}</h1>

          {hasProgress && progress}

          <div className='welcome__content-container'>
            {children}
          </div>

        </div>
      </div>
    </div>
  )
}

export default WelcomeWrapper
