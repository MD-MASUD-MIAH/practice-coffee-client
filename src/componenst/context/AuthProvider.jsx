import React from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../friebase/friebase.init';

const AuthProvider = ({children}) => {

  
    const handleingup = (email,pasword)=>{

        return createUserWithEmailAndPassword(auth,email,pasword)
    }
    const handlSing = (email,pasword)=>{


        return  signInWithEmailAndPassword(auth,email,pasword)
    }

    const userInfo = {
       handleingup,
       handlSing
    }
    return (
      <AuthContex value={userInfo}>

        {children}
      </AuthContex>
    );
};

export default AuthProvider;