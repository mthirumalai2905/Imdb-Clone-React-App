import React from 'react'
import './css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInImage from './images/linkedin.png'; 
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from './firebase';
import { logout } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
function Header() {
  
  const dispatch = useDispatch();

  const logoutOfApp = () => {
      dispatch(logout());
      auth.signOut();
  }

  return (
    <div className='header'>
    
    <div className="header__left">

    <img src={LinkedInImage} alt="LinkedIn Logo" />


        <div className="header__search">
        <SearchIcon></SearchIcon>
            <input type="text" placeholder='Search'/>
        </div>
    </div>
    <div className="header__right">
    <HeaderOption Icon={HomeIcon} title="Home" />
    <HeaderOption Icon ={SupervisorAccountIcon} title="My Network" />
    <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
    <HeaderOption Icon={ChatIcon} title="Messaging" />
    <HeaderOption Icon={NotificationsIcon} title="Notifications" />
    <HeaderOption
                    avatar={true}
                    title="Me"
                    onClick={logoutOfApp}
                />
    </div>
  

    </div>
  )
}

export default Header