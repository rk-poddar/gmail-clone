import React, { useState } from 'react'
import './ComposeMail.css'
import { IconButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import PhotoIcon from '@mui/icons-material/Photo';
import LockClockIcon from '@mui/icons-material/LockClock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { closeComposeMail, sendComposeMail } from '../../features/composeMailSlice';
import db from "../../app/firebase"
import firebase from 'firebase/compat/app';

export const ComposeMail = (props) => {

    const dispatch = useDispatch()

    // target the input value
    const [to, setTo] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const formSubmit = (e) => {
        // prevent from page refresh
        e.preventDefault();
        
        // create collection for database storage
        db.collection("emails").add({
            to: to,
            subject: subject,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        // set input field empty after submit
        setTo("")
        setSubject("")
        setMessage("")

        // close ComposeMail section after message sent
        dispatch(sendComposeMail())

        alert("Email sent successfully...")
    }

  return (
    <div className='compose'>
        <div className='compose__header'>
            <div className='compose__header__left'>
                <span>New Message</span>
            </div>
            <div className='compose__header__right'>
                <IconButton>
                    <RemoveIcon/>
                </IconButton>
                <IconButton>
                    <OpenInFullIcon/>
                </IconButton>
                <IconButton onClick={() => dispatch(closeComposeMail())}>
                    <CloseIcon/>
                </IconButton>
            </div>
        </div>

        <form onSubmit={formSubmit}>
            <div className='compose__body'>
                <div className='compose__body__form'>
                    <input type="email" placeholder='Reciepents' value={to} onChange={(e) => setTo(e.target.value)} required/>
                    <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                    <textarea name="textarea" id="" rows="20" onChange={(e) => setMessage(e.target.value)} required>{props.message}</textarea>
                </div>
            </div>

            <div className='compose__footer'>
                <div className='compose__footer__left'>
                    <button type='submit'> Send <ArrowDropDownIcon/></button> 
                </div>
                <div className='compose__footer__middle'>
                    <IconButton>
                        <FormatColorTextIcon/>
                    </IconButton>
                    <IconButton>
                        <LinkIcon/>
                    </IconButton>
                    <IconButton>
                        <InsertEmoticonIcon/>
                    </IconButton>
                    <IconButton>
                        <AddToDriveIcon/>
                    </IconButton>
                    <IconButton>
                        <PhotoIcon/>
                    </IconButton>
                    <IconButton>
                        <LockClockIcon/>
                    </IconButton>
                    <IconButton>
                        <CreateIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className='compose__footer__right'>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </div>
        </form>
    </div>
  )
}
