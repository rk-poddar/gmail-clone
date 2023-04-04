import React from 'react'
import './EmailDetails'
import { EmailDetailsSetting } from '../../components/EmailDetails/EmailDetailsSetting'
import EmailDetailsHeader from '../../components/EmailDetails/EmailDetailsHeader'

const EmailDetails = () => {
  return (
    <div className='emaildetails'>
        <EmailDetailsSetting/>
        <EmailDetailsHeader/>
    </div>
  )
}

export default EmailDetails