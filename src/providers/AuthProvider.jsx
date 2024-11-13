import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
            console.log('current User', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return() =>{
            unsubscribe();
        }
    },[])

    // onAuthStateChanged(auth, (currentUser)=>{
    //     if(currentUser){
    //         console.log('currently logged user', currentUser);
    //         setUser(currentUser);
    //     }
    //     else{
    //         console.log('No user logged in');
    //         setUser(null)
    //     }
    // })


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {/* Main part which will be in router */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/* 1. create context with null as default
   2. create Provider
   3. set a value with something(auth info)
   4. [Attention please!!!]
   5. use the authProvider in the main.jsx
   6. access the children inside the authprovider in the main.jsx
   7. export authContext

*/