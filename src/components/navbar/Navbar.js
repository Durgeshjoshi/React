import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {AuthContext} from '../../context/authContext'
import {  useContext } from 'react';

const Navbar = () => {

  const {currentUser} = useContext(AuthContext);
  
  return (
    <div className='navbar'>
      <div className="left">
      <span>Swiggy World</span>
      <HomeOutlinedIcon />
      {false ?  <WbSunnyOutlinedIcon /> :<DarkModeOutlinedIcon />}
      <GridOnOutlinedIcon />
      <div className="search">
      <SearchOutlinedIcon />
        <input type="text" placeholder='Search...' />
      </div>

      </div>
      <div className="right">
         <PersonOutlinedIcon></PersonOutlinedIcon>
        <EmailOutlinedIcon></EmailOutlinedIcon>
        <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
        <div className="user">
          <img src={currentUser.userProfile} alt="user-image" className="user-image" width={20} height={20} />
          <span>{currentUser.userName}</span>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
