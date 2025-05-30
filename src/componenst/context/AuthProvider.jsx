import React, { useEffect, useState } from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from 'firebase/auth';
import { auth } from '../friebase/friebase.init';

const AuthProvider = ({children}) => {
        const provider = new GoogleAuthProvider()
  const [user,setUser] = useState(null)
  const [loading,setLoading] =useState(true)
    const handleingup = (email,pasword)=>{
 setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pasword)
    }

    if(loading){

      <span className="loading loading-dots loading-xl"></span>
    }
    const handlSing = (email,pasword)=>{

         setLoading(true)
        return  signInWithEmailAndPassword(auth,email,pasword)
    }

    const goolgeLogin = ()=>{

       setLoading(true)
      return signInWithPopup(auth,provider)
    }
console.log(user);

const singOUt =  ()=>{
setLoading(true)
  return signOut(auth)
}

const update = (upds)=>{
  setLoading(true)
  return updateProfile(auth.currentUser,upds)
}
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setLoading(false)
    setUser(user);
  });

  return () => unsubscribe();
}, []);



    const userInfo = {
       handleingup,
       handlSing,
       goolgeLogin,
       user,
       loading,
       singOUt,
       update,
       setUser
    }
    return (
      <AuthContex value={userInfo}>

        {children}
      </AuthContex>
    );
};

export default AuthProvider;