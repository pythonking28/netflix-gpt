import { useState } from 'react'
import Header from "./Header"

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const toggleLoginStatus = () =>{
        setIsLogin(!isLogin)
    }
    return (
        <div>
            <Header />
            <div className="flex justify-center">
                <form className="flex flex-col w-1/3 min-w-96 items-center justify-center bg-black opacity-85 px-20 py-10 rounded-lg">
                    <p className="text-white self-start font-bold text-3xl p-2 mb-8">{isLogin ? "Sign In" : "Sign Up"}</p>
                    {!isLogin && <input className="p-2 py-4 m-2 w-full rounded-sm bg-gray-900 text-white" type="text" placeholder="Name" />}
                    <input className="p-2 py-4 m-2 w-full rounded-sm bg-gray-900 text-white" type="text" placeholder="Email Address" />
                    <input className="p-2 py-4 m-2 w-full rounded-sm bg-gray-900 text-white" type="password" placeholder="Password" />
                    {!isLogin && <input className="p-2 py-4 m-2 w-full rounded-sm bg-gray-900 text-white" type="password" placeholder="Confirm Password" />}
                    <button type="submit" className="p-2 m-4 text-white bg-red-500 w-full rounded-sm">{isLogin ? "Sign In" : "Sign Up"}</button>
                    <p onClick={toggleLoginStatus} className="text-white font-semibold cursor-pointer">{isLogin ? "New to Netflix? Sign Up Now" : "Already a Netflix User? Sign In"}</p>
                </form>
            </div>

        </div>
    )
}

export default Login