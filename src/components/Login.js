import { useState, useRef } from 'react'
import Header from "./Header"
import { validateLoginForm, validateSignUpForm } from '../utils/validate'
import { createAndSignUser } from '../utils/userManipulation';


const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [errMessage, setErrMessage] = useState(null);
    const name = useRef("");
    const email = useRef("");
    const password = useRef("");
    const confirmPassword = useRef("");

    const handleButtonClick = (e) => {
        e.preventDefault()
        let isErr = "";
        // validate the form data
        isErr = isLogin ? validateLoginForm(email.current.value, password.current.value) : validateSignUpForm(name.current.value,email.current.value, password.current.value, confirmPassword.current.value)

        setErrMessage(isErr);

        if(isErr) return 
        //Sign In and Sign up logic
        console.log("here")
        createAndSignUser(isLogin,setErrMessage, email.current.value, password.current.value)




        
    }


    const toggleLoginStatus = () =>{
        setIsLogin(!isLogin)
    }
    return (
        <div>
            <Header />
            <div className="flex justify-center">
                <form onSubmit={handleButtonClick} className="flex flex-col w-[28%] min-w-96 items-center justify-center bg-black opacity-75 px-20 py-10 rounded-lg">
                    <p className="text-white self-start font-bold text-3xl p-2 mb-8">{isLogin ? "Sign In" : "Sign Up"}</p>
                    {!isLogin && <input className="p-2 py-4 m-2 w-full rounded-sm bg-gray-900 text-white" type="text" ref={name} placeholder="Name" />}
                    <input className="p-2 py-4 m-2 w-full rounded-sm bg-gray-900 text-white" type="text" ref={email} placeholder="Email Address" />
                    <input className="p-2 py-4 m-2 w-full rounded-sm bg-gray-900 text-white" type="password" ref={password} placeholder="Password" />
                    {!isLogin && <input className="p-2 py-4 m-2 w-full rounded-sm bg-gray-900 text-white" type="password" ref={confirmPassword} placeholder="Confirm Password" />}
                    <button className="p-2 m-4 text-white bg-red-500 w-full rounded-sm">{isLogin ? "Sign In" : "Sign Up"}</button>
                    <p className='text-red-500 font-bold text-lg py-2 '>{errMessage}</p>
                    <p onClick={toggleLoginStatus} className="text-white font-semibold cursor-pointer">{isLogin ? "New to Netflix? Sign Up Now" : "Already a Netflix User? Sign In"}</p>
                </form>
            </div>

        </div>
    )
}

export default Login