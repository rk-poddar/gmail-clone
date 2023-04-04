import React from 'react'
import './EmailType.css'
import { IconButton } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';

const EmailType = () => {
  return (
    <div className='emailtype'>
        <div className='emailtype__options emailtype__options__active'>
            <IconButton>
                <InboxIcon/>
            </IconButton>
            <p>Primary</p>
        </div>

        <div className='emailtype__options'>
            <IconButton>
                <LocalOfferIcon/>
            </IconButton>
            <p>Promotions</p>
        </div>

        <div className='emailtype__options'>
            <IconButton>
                <PeopleIcon/>
            </IconButton>
            <p>Social</p>
        </div>

        <div className='emailtype__options'>
            <IconButton>
                <InfoIcon/>
            </IconButton>
            <p>Updates</p>
        </div>

        <div className='emailtype__options'>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <p>Forums</p>
        </div>
    </div>
  )
}

export default EmailType