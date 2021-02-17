import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { DestinationContext } from './DestinationContext'

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
    <div className='form__container'>
      <form onSubmit={handleSubmit}>
        <div className='form__input-container'>
          <label>
            Store name
            <input
              type='text'
              name='storeNameInput'
              placeholder='Your Store Name'
              value={storeName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className='form__input-container'>
          <label>
            Store URL
            <input
              type='url'
              name='storeURLInput'
              placeholder='yourstore.myshopify.com'
              value={storeURL}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className='form__input-container'>
          <label>
            Email notifications
            <input
              type='email'
              name='emailInput'
              placeholder='jane@yourstore.com'
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type='checkbox'
              name='notifications'
              checked={notifications}
              onChange={handleChange}
            />
            <span>Send me all the important app notifications on this email</span>
          </label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default StoreInfo
