import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth'
import { userProfile } from "../utils/constants"
import { auth } from '../utils/firebase'
import { removeUser } from '../utils/userSlice';


const Header = ({ isLogin }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [hideLogOut, setHideLogOut] = useState(true)
    const handleSignOut = () => {
        signOut(auth).then(()=>{
            dispatch(removeUser())
            navigate('/')
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="relative flex items-center justify-between w-full mt-5 md:mt-0 z-10">
            <img className="h-32 md:h-56 ml-16 md:ml-32 -mt-10" src="/netflix-logo.png" alt="logo" />
           { isLogin && (<div className='relative'>
                <img onClick={()=>setHideLogOut(!hideLogOut)} className="h-8 md:h-10 mr-16 md:mr-32 -mt-10 rounded-lg cursor-pointer" src={userProfile} alt="profile" />
                {!hideLogOut && <div className="h-3 w-3 md:h-4 md:w-4 cursor-pointer bg-red-400 absolute top-0 left-3 rotate-45"></div>}
                {!hideLogOut && <div className="cursor-pointer bg-red-400 rounded-md py-1 px-2 md:py-2 md:px-4 absolute top-1 md:top-2">
                        <div className='flex gap-3 justify-start'>
                            <img className='h-8 w-8 rounded-full' src={auth?.currentUser?.photoURL} alt="profile "/> 
                        <p>{auth?.currentUser?.displayName}</p>    
                        </div>
                        <button className='mx-auto w-full mt-2'  onClick={handleSignOut}>SignOut</button>
                    </div>}
            </div>)}

        </div>
    )
}

export default Header