import React from 'react'
import './EmailDetailsHeader.css'
import { IconButton, Avatar } from '@mui/material'
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { selectedMail } from '../../features/composeMailSlice';

const EmailDetailsHeader = () => {
    const checkMail = useSelector(selectedMail)
    
  return (
    <div className='emaildetails__mainbody'>
        <div className='emaildetails__header'>
            <div className='emaildetails__header__left'>
                <div><h4>{checkMail.subject}</h4></div>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>

            <div className='emaildetails__header__right'>
                <IconButton>
                    <PrintIcon/>
                </IconButton>
                <IconButton>
                    <OpenInNewIcon/>
                </IconButton>
            </div>
        </div>

        <div className='emaildetails__middleheader'>
            <div className='emaildetails__middleheader__left'>
                <IconButton>
                    <Avatar/>
                </IconButton>
                <h4>{checkMail.subject}</h4>
                <p>{checkMail.name}</p>
            </div>

            <div className='emaildetails__middleheader__right'>
                <p>{checkMail.time}</p>
                <IconButton>
                    <StarOutlineIcon/>
                </IconButton>
                <IconButton>
                    <ReplyIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>

        <div className='emaildetails__body'>
            <p>{checkMail.message}</p>
        </div>
    </div>
  )
}

export default EmailDetailsHeader