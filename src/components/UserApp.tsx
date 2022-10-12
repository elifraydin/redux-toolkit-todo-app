import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/store';
import { fetchUser } from '../features/userSlice';

const UserApp = () => {

    const user=useAppSelector(state=>state.user)
    const dispatch = useAppDispatch();

    const currentUser= user.data && user.data.results[0]



  return (
    <div>
      <button onClick={()=>dispatch(fetchUser())}>Fetch User</button>
   {user.loading && "Loading..."}
   {user.error && user.error}
   {currentUser && 
   <div>
Name : {currentUser.name.title} {currentUser.name.first} {currentUser.name.last}
Avatar: <img src={currentUser.picture.large}/>
Email: {currentUser.email}
    </div>}

    </div>
  )
}

export default UserApp
