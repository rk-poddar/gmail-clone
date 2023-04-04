import React from 'react'
import './Sidebar.css'
import { Button } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import CategoryIcon from '@mui/icons-material/Category';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { openComposeMail } from '../../features/composeMailSlice';

const Sidebar = () => {

  const dispatch = useDispatch()

  return (
    <div className='sidebar'>
        <Button startIcon={<EditOutlinedIcon/>} className='compose__btn' onClick={() => dispatch(openComposeMail())}>Compose</Button>
        
        <div className='siderbar__div1'>
            <SidebarOptions Icon={InboxIcon} title="Index" number="224" isActive={true}/>
            <SidebarOptions Icon={StarRateIcon} title="Starred" number="20"/>
            <SidebarOptions Icon={WatchLaterIcon} title="Snoozed" number="50"/>
            <SidebarOptions Icon={LabelImportantIcon} title="Important" number="78"/>
            <SidebarOptions Icon={SendIcon} title="Sent" number="20"/>
            <SidebarOptions Icon={DraftsIcon} title="Draft" number="100"/>
            <SidebarOptions Icon={CategoryIcon} title="Category" number="10"/>
            <SidebarOptions Icon={DeleteIcon} title="Trash" number="100"/>
            <SidebarOptions Icon={FindInPageIcon} title="Documents" number="10"/>
            <SidebarOptions Icon={ExpandMoreIcon} title="More" number="5"/>
        </div>
        <hr />

        <div className='siderbar__div2'>
            <h3 className='sidebaroptns__heading'>Meet</h3>
            <SidebarOptions Icon={VideocamIcon} title="New meeting"/>
            <SidebarOptions Icon={KeyboardIcon} title="Join a meeting"/>
        </div>
        <hr />

        <div className='siderbar__div3'>
            <h3 className='sidebaroptns__heading'>Hangouts</h3>
            {/* <SidebarOptions Icon={VideocamIcon} title="New meeting"/>
            <SidebarOptions Icon={KeyboardIcon} title="Join a meeting"/> */}
        </div>

    </div>
  )
}

export default Sidebar