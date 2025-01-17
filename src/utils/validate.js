
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
export const validateLoginForm = (email, password) => {
    const isEmailValid = emailRegex.test(email)
    const isPaswordValid = passwordRegex.test(password)
    if(!isEmailValid) return "Email is not Valid"
    if(!isPaswordValid) return "Password is not Valid"
    return null
}
export const validateSignUpForm = (name, email, password, confirmPassword) => {
    const isEmailValid = emailRegex.test(email)
    const isPaswordValid = passwordRegex.test(password)
    const isNameValid = nameRegex.test(name)
    if(!isNameValid) return "Name is not Valid"
    if(!isEmailValid) return "Email is not Valid"
    if(!isPaswordValid) return "Password is not Valid"
    if(password !== confirmPassword) return "Password Mismatch"
    return null
}