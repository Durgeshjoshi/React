import { useContext } from 'react'
import './story.scss'
import {AuthContext} from '../../context/authContext';
export default function Stories() {

  const {currentUser} = useContext(AuthContext);

  const stories = [
    {
      id:1,
      userName: 'Abhishek',
      userProfile:'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
   },
   {
    id:2,
    userName: 'Niraj',
    userProfile:'https://images.pexels.com/photos/2918521/pexels-photo-2918521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
 },
 {
  id:3,
  userName: 'Anil',
  userProfile:'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},
{
  id:4,
  userName: 'Manish',
  userProfile:'https://images.pexels.com/photos/2918521/pexels-photo-2918521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},
{
  id:5,
  userName: 'Kush Mishra',
  userProfile:'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}];

  return (
    <div className='stories'>
      <div className="story">
        <img src={currentUser.userProfile} alt="" />
        <span>{currentUser.userName}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story">
        <img src={story.userProfile} alt="" />
        <span>{story.userName}</span>
      </div>
      ))}
    </div>
  )
}
