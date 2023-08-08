import React, { useEffect, useState } from 'react'
import SignUp from '../../components/profile/signUp'
import Login from '../../components/profile/logIn'
import Logout from '../../components/profile/logOut'
import MyProfile from '../../components/profile/myProfile'
import { fetchUserInfo } from '../../utils/services'
import { auth } from '../../firebaseConfig'
export default function Profile() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const uid = await fetchUserInfo(); // No argument needed
      if (uid) {
        console.log(uid)
        setUserInfo(uid);
      }
    };

    getUserInfo();
  }, []);
console.log(userInfo)
  return (
    <div>
 {userInfo ? (
        <>
          <MyProfile />
        </>
      ) : (
        <>      
        <SignUp />
        <Login/>
        </>

      )}
   
    </div>
  )
}
