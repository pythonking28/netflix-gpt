import { auth } from "./firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
export const createAndSignUser = (isLogin,setErrMessage, email, password) => {
    console.log(auth)
    if(!isLogin){
        createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            const user = userCredentials.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            errorCode === "auth/invalid-credential" ? setErrMessage("Invalid Credentials") : setErrMessage(errorCode+"-"+errorMessage)
          });
        
    }else{
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            const user = userCredentials.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            errorCode === "auth/invalid-credential" ? setErrMessage("Invalid Credentials") : setErrMessage(errorCode+"-"+errorMessage)
          });
        
    }
}