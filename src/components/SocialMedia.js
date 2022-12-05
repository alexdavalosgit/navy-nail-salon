import React from 'react'
import {BsInstagram, BsFacebook} from 'react-icons/bs'

function SocialMedia() {
  return (
    <div className='social-media text-center'>
        Social media coming soon:
        <div className='p-2'>
            <BsInstagram size={25} className='me-2'/>
            <BsFacebook size={25}/>
        </div>
    </div>
  )
}

export default SocialMedia