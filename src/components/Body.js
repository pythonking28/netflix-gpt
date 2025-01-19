import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import Browse from "./Browse";
import Login from "./Login";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                const {uid, email, displayName, photoURL } = user;
                dispatch(addUser({uid, email, displayName , photoURL}))
                
            }else{
                dispatch(removeUser())
            }

        })
        return () => unsubscribe()
    },[dispatch])
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])
     return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
     )
}

export default Body;