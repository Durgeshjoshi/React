import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
      <span>Swiggy World</span>
      <HomeOutlinedIcon />
      <DarkModeOutlinedIcon />
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
          <img src="https://images.pexels.com/photos/5477509/pexels-photo-5477509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-image" className="user-image" width={20} height={20} />
          <span>Durgesh</span>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
