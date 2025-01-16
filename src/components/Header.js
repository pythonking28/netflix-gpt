import { NetflixBackgroundImage } from "../utils/constants"


const Header = () => {
    return (
        <div className="relative">
            <img className="absolute -z-10 lg:w-full lg:h-fit h-screen" src={NetflixBackgroundImage} alt="background-image"/>
            <img className="h-32 md:h-56 ml-16 md:ml-32 -mt-10" src="/netflix-logo.png" alt="logo" />

        </div>
    )
}

export default Header