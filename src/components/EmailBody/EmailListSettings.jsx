import React from 'react'
import './EmailListSettings.css'
import { IconButton } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const EmailListSettings = () => {
  return (
    <div className='emaillist__settings'>
        <div className='emaillist__settings__left'>
            <IconButton>
                <CheckBoxOutlineBlankIcon/>
            </IconButton>

            <IconButton>
                <ArrowDropDownIcon/>
            </IconButton>

            <IconButton>
                <RefreshIcon/>
            </IconButton>

            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>

        <div className='emaillist__settings__right'>
            <p>1-50 of 10,224</p>
            <IconButton>
                <ChevronLeftIcon/>
            </IconButton>

            <IconButton>
                <ChevronRightIcon/>
            </IconButton>
        </div>

    </div>
  )
}

export default EmailListSettings