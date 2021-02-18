import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { DestinationContext } from './DestinationContext'
import './StoreInfo.css'

function StoreInfo() {
  const [ storeName, setStoreName ] = useState('')
  const [ storeURL, setStoreURL ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ notifications, setNotifications ] = useState(false)

  const history = useHistory()
  const { setToDestination } = useContext(DestinationContext)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    switch(name) {
      case 'storeNameInput':
        setStoreName(value)
        break
      case 'storeURLInput':
        setStoreURL(value)
        break
      case 'emailInput':
        setEmail(value)
        break
      case 'notifications':
        setNotifications(prevState => !prevState)
        break
      //no default
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`
      store name: ${storeName}
      store URL: ${storeURL}
      email: ${email}
      notifications: ${notifications}
    `)

    if (/myshopify.com/.test(storeURL)) {
      setToDestination(true)
    }

    history.push('/survey')
  }

  return (
    <div className='store__container'>
      <form onSubmit={handleSubmit}>
        <div className='store__input-container store'>
          <label className='store__label'>
            Store name
            <input
              className='store__input'
              type='text'
              name='storeNameInput'
              placeholder='Your Store Name'
              value={storeName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className='store__input-container url'>
          <label className='store__label'>
            Store URL
            <input
              className='store__input'
              type='url'
              name='storeURLInput'
              placeholder='yourstore.myshopify.com'
              value={storeURL}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className='store__input-container email'>
          <label className='store__label'>
            Email notifications
            <input
              className='store__input-email'
              type='email'
              name='emailInput'
              placeholder='jane@yourstore.com'
              value={email}
              onChange={handleChange}
              required
            />
            <div className='store__input-checkbox-container'>
              <input
                className='store__input-checkbox'
                type='checkbox'
                name='notifications'
                checked={notifications}
                onChange={handleChange}
              />
              <div className='store__input-checkbox-text'>Send me all the important app notifications on this email</div>
            </div>
          </label>
        </div>

        <div className='store__nav-btn-container'>
          <button className='store__nav-btn-next icon-arrow-right2' type='submit'>Next</button>
        </div>
      </form>
    </div>
  )
}

export default StoreInfo
