import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from './movieSlice'
import { API_OPTIONS_GET, NowPlaying, TopRated,Popular , Upcoming, movieListBaseURL } from './constants'



const useGetMovieList = (typeOfMoveList) => {
    const dispatch = useDispatch()
    const url = movieListBaseURL+ typeOfMoveList +'?page=1';
    const fetchMovie = async () => {
        const res = await fetch(url, API_OPTIONS_GET)
        const data = await res.json()

        switch(typeOfMoveList){
            case NowPlaying:
                dispatch(addNowPlayingMovies(data.results))
                break;
            case Popular:
                dispatch(addPopularMovies(data.results))
                break;
            case TopRated:
                dispatch(addTopRatedMovies(data.results))
                break;
            case Upcoming:
                dispatch(addUpcomingMovies(data.results))
                break;
        }
        
    }
    useEffect(()=>{
        fetchMovie()
    },[typeOfMoveList])
}

export default useGetMovieList;