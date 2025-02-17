const NetflixBackgroundImage = "https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
const userProfile = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const movieListBaseURL = 'https://api.themoviedb.org/3/movie/';
export const NowPlaying = "now_playing";
export const TopRated = "top_rated";
export const Popular = "popular";
export const Upcoming = "upcoming";

const randomProfileImage = "https://picsum.photos/200"

const IMG_CDN = "https://image.tmdb.org/t/p/w500/"

const API_OPTIONS_GET = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_READ_ACESS_TOKEN}`
    }
  };


export {NetflixBackgroundImage, userProfile, randomProfileImage, API_OPTIONS_GET, IMG_CDN}