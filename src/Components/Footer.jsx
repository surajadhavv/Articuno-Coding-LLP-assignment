import React from 'react'
import './Footer.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="back-menu">
            <AiOutlineArrowLeft/>
            Back
        </div>
        <div className="proceed">
            <button className='btn-1'>Continue shopping</button>
            <button className='btn-2'>Proceed to payment</button>
        </div>
    </div>
  )
}

export default Footer