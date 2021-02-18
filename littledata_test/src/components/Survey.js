import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { DestinationContext } from './DestinationContext'

import './Survey.css'

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
            <label className='survey__label'>
              <input
                type='radio'
                name='howHear'
                value='shopify'
                checked={selectedOptionHear === 'shopify'}
                onChange={handleChange}
                required
              />
              <div className='survey__label-text'>Through Shopify app store</div>
            </label>
          </div>
          <div className='survey__input'>
            <label className='survey__label'>
              <input
                type='radio'
                name='howHear'
                value='agency'
                checked={selectedOptionHear === 'agency'}
                onChange={handleChange}
              />
              <div className='survey__label-text'>Recommended by my agency</div>
            </label>
          </div>
          <div className='survey__input'>
            <label className='survey__label'>
              <input
                type='radio'
                name='howHear'
                value='friend'
                checked={selectedOptionHear === 'friend'}
                onChange={handleChange}
              />
              <div className='survey__label-text'>Through a friend / colleague</div>
            </label>
          </div>
          <div className='survey__input'>
            <label className='survey__label'>
              <input
                type='radio'
                name='howHear'
                value='ad'
                checked={selectedOptionHear === 'ad'}
                onChange={handleChange}
              />
              <div className='survey__label-text'>I saw a littledata ad</div>
            </label>
          </div>
          <div className='survey__input'>
            <label className='survey__label'>
              <input
                type='radio'
                name='howHear'
                value='read'
                checked={selectedOptionHear === 'read'}
                onChange={handleChange}
              />
              <div className='survey__label-text'></div>I read a blog post / article / book by littledata
            </label>
          </div>
          <div className='survey__input'>
            <label className='survey__label'>
              <input
                type='radio'
                name='howHear'
                value='other'
                checked={selectedOptionHear === 'other'}
                onChange={handleChange}
              />
              <div className='survey__label-text'>Other</div>
            </label>
          </div>
        </div>

        <div className='survey__agency-group'>
          <h2>Are you part of an agency or consulting firm?</h2>
          <div className='survey__agency-group-inputs'>
            <div className='survey__input'>
              <label className='survey__label'>
                <input
                  type='radio'
                  name='agency'
                  value='yes'
                  checked={selectedOptionAgency === 'yes'}
                  onChange={handleChange}
                  required
                />
                <div className='survey__label-text'>Yes</div>
              </label>
            </div>
            <div className='survey__input'>
              <label className='survey__label'>
                <input
                  type='radio'
                  name='agency'
                  value='no'
                  checked={selectedOptionAgency === 'no'}
                  onChange={handleChange}
                />
                <div className='survey__label-text'>No</div>
              </label>
            </div>
          </div>
        </div>

        <div className='survey__nav-btn-container'>
          <button
            className='survey__nav-btn icon-arrow-left2'
            onClick={history.goBack}
          >Back</button>
          <button
            className='survey__nav-btn icon-arrow-right2'
            type="submit"
            value="Next"
          >Next</button>
        </div>

      </form>
    </div>
  )
}

export default Survey
