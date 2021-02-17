import React from 'react'
import { Link }  from 'react-router-dom'
import ga_logo from '../assets/ga_logo.svg'
import segment_logo from '../assets/segment_logo.svg'

function Destination() {
  return (
    <div className='destination__container'>
      <div className='destination__instruction'>
        Please select the destination that you'd like to connet your store with
      </div>
      <div className='destination__btn-container'>
        <Link to='/end-screen'>
          <div className='destination__btn'>
            <img className='destination__btn-image' src={ga_logo} alt='Google Analytics logo'/>
            <div className='destination__btn-text'>Google Analytics</div>
          </div>
        </Link>
        <Link to='/end-screen'>
          <div className='destination__btn-image'>
            <img src={segment_logo} alt='Segment logo' />
            <div className='destination__btn-text'>Segment</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Destination
