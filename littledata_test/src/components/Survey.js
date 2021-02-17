import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { DestinationContext } from './DestinationContext'

function Survey() {
  const [ selectedOptionHear, setSelectedOptionHear ] = useState('')
  const [ selectedOptionAgency, setSelectedOptionAgency ] = useState('')

  const { toDestination } = useContext(DestinationContext)
  const history = useHistory()

  const handleChange= (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name === 'howHear') {
      setSelectedOptionHear(value)
    } else {
      setSelectedOptionAgency(value)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(`
      How did you hear about littledata?: ${selectedOptionHear}
      Are you part of an agency or consulting firm?: ${selectedOptionAgency}
    `)

    if (toDestination) {
      history.push('/destination')
    } else {
      history.push('/end-screen')
    }
  }

  return (
    <div className='survey'>
      <form onSubmit={handleSubmit}>

        <div className='survey__hear-group'>
          <h2>How did you hear about littledata?</h2>
          <div className='survey__input'>
            <label>
              How did you hear about littledata?
              <input
                type='radio'
                name='howHear'
                value='shopify'
                checked={selectedOptionHear === 'shopify'}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className='survey__input'>
            <label>
              Recommended by my agency
              <input
                type='radio'
                name='howHear'
                value='agency'
                checked={selectedOptionHear === 'agency'}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className='survey__input'>
            <label>
              Through a friend / colleague
              <input
                type='radio'
                name='howHear'
                value='friend'
                checked={selectedOptionHear === 'friend'}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className='survey__input'>
            <label>
              I saw a littledata ad
              <input
                type='radio'
                name='howHear'
                value='ad'
                checked={selectedOptionHear === 'ad'}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className='survey__input'>
            <label>
              I read a blog post / article / book by littledata
              <input
                type='radio'
                name='howHear'
                value='read'
                checked={selectedOptionHear === 'read'}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className='survey__input'>
            <label>
              Other
              <input
                type='radio'
                name='howHear'
                value='other'
                checked={selectedOptionHear === 'other'}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className='survey__agency-group'>
          <h2>Are you part of an agency or consulting firm?</h2>
          <div className='survey__input'>
            <label>
              Yes
              <input
                type='radio'
                name='agency'
                value='yes'
                checked={selectedOptionAgency === 'yes'}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className='survey__input'>
            <label>
              No
              <input
                type='radio'
                name='agency'
                value='no'
                checked={selectedOptionAgency === 'no'}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className='survey__nav-btn-container'>
          <button
            className='survey__nav-btn'
            onClick={history.goBack}
          >Back</button>
          <input
            className='survey__nav-btn'
            type="submit"
            value="Submit"
          />
        </div>

      </form>
    </div>
  )
}

export default Survey
