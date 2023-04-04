import React from 'react'
import './Header.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';

export const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
          <IconButton>
            <ReorderIcon/>
          </IconButton>
          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_light_1x_r5.png" alt="logo" />
        </div>

        <div className='header__middle'>
          <div className='search_mail'>
            <IconButton>
              <SearchIcon/>
            </IconButton>
            <input type="text" name="" id="" placeholder='search mail' />
            <IconButton>
              <ExpandMoreIcon/>
            </IconButton>
          </div>
        </div>
        
        <div className='header__right'>
          <IconButton>
            <HelpOutlineOutlinedIcon/>
          </IconButton>

          <IconButton>
            <SettingsOutlinedIcon/>
          </IconButton>

          <IconButton>
            <AppsIcon/>
          </IconButton>

          <IconButton>
            <Avatar src='https://lh3.googleusercontent.com/ogw/AAEL6sio0KgYV1WLv-WW9qphsnPjc1BooFr0F_o-59OR-A=s32-c-mo'/>
          </IconButton>
        </div>
    </div>
  )
}
