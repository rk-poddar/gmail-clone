import React from 'react'
import './EmailList.css'
import { IconButton } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMessage } from '../../features/composeMailSlice';

const EmailList = ({name, email, subject, message, time}) => {
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const checkMail = () => {
        dispatch(openMessage({
            name,
            email,
            subject,
            message,
            time
        }))
        navigate('/mail')
    }

    return (
        <div className='emaillist' onClick={checkMail}>
            <div className='emaillist__left'>
                <IconButton>
                    <CheckBoxOutlineBlankIcon />
                </IconButton>

                <IconButton>
                    <StarBorderIcon />
                </IconButton>

                <IconButton>
                    <LabelOutlinedIcon />
                </IconButton>

                <h4>{name}</h4>
            </div>

            <div className='emaillist__middle'>
                <div className='emaillist__middle__msg'>
                    <p><b>{subject}</b> <span>-</span> <span>{message}</span></p>
                </div>
            </div>

            <div className='emaillist__right'>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default EmailList