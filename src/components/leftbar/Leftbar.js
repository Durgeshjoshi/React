import './leftbar.scss';
import Frineds from '../../assets/1.png'
import Groups from '../../assets/2.png'
import Markerplace from '../../assets/3.png'
import Watch from '../../assets/4.png'
import Memories from '../../assets/5.png'
import Events from '../../assets/6.png'
import Gaming from '../../assets/7.png'
import Gallery from '../../assets/8.png'
import Videos from '../../assets/9.png'
import Messages from '../../assets/10.png'
import Tutorials from '../../assets/11.png'
import Courses from '../../assets/12.png'
import Fundraiser from '../../assets/13.png'

import {AuthContext} from '../../context/authContext'
import {  useContext } from 'react';

const Leftbar = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <>
    <div className="leftbar">
      <section className='menu-one'>
      <div className="user">
          <img src={currentUser.userProfile} alt="user-image" className="user-image" width={20} height={20} />
          <span>{currentUser.userName}</span>
        </div>
        <div className='items'>
          <img src={Frineds} alt="Friends" />
          <span>Friends</span>
        </div>
        <div className='items'>
        <img src={Groups} alt="Groups" />
          <span>Groups</span>
        </div>
        <div className='items'>
        <img src={Markerplace} alt="Markerplace" />
          <span>Markerplace</span>
        </div>
        <div className='items'>
        <img src={Watch} alt="Watch" />
          <span>Watch</span>
        </div>
        <div className='items'>
        <img src={Memories} alt="Memories" />
          <span>Memories</span>
        </div>
      </section>
      <hr></hr>
      <section className='menu-two'>
      <span>Your shortcuts</span>
      <div className='items'>
      <img src={Events} alt="Events" />
          <span>Events</span>
        </div>
        <div className='items'>
        <img src={Gaming} alt="Gaming" />
          <span>Gaming</span>
        </div>
        <div className='items'>
        <img src={Gallery} alt="Gallery" />
          <span>Gallery</span>
        </div>
        <div className='items'>
        <img src={Videos} alt="Videos" />
          <span>Videos</span>
        </div>
        <div className='items'>
        <img src={Messages} alt="Messages" />
          <span>Messages</span>
        </div>
      </section>
      <hr></hr>
      <section className='menu-three'>
        <span>Others</span>
        <div className='items'>
          <img src={Fundraiser} alt="Fundraiser" />
          <span>Fundraiser</span>
        </div>
        <div className='items'>
          <img src={Tutorials} alt="Tutorials" />
          <span>Tutorials</span>
        </div>
        <div className='items'>
          <img src={Courses} alt="Courses" />
          <span>Courses</span>
        </div>
      </section>
      <section className='menu-three'>
        <span>Others</span>
        <div className='items'>
          <img src="" alt="" />
          <span>Fundraiser</span>
        </div>
        <div>
          <img src="" alt="" />
          <span>Tutorials</span>
        </div>
        <div>
          <img src="" alt="" />
          <span>Courses</span>
        </div>
      </section>
    </div>
    </>
  )
}

export default Leftbar;