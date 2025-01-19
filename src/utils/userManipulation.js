import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { randomProfileImage } from "./constants";
import { auth } from "./firebase";

export const createAndSignUser = async (
  isLogin,
  setErrMessage,
  name,
  email,
  password
) => {
  if (!isLogin) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        return updateProfile(userCredentials.user, {
          displayName: name,
          photoURL: randomProfileImage,
        }).then(() => {
          return userCredentials.user;
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        errorCode === "auth/invalid-credential"
          ? setErrMessage("Invalid Credentials")
          : setErrMessage(errorCode + "-" + errorMessage);
      });
  } else {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        return userCredentials.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        errorCode === "auth/invalid-credential"
          ? setErrMessage("Invalid Credentials")
          : setErrMessage(errorCode + "-" + errorMessage);
      });
  }
};
