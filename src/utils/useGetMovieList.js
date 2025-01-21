import { useState, useEffect } from 'react'
import { API_OPTIONS_GET } from './constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from './movieSlice'


const useGetMovieList = () => {
    const [movieList, setMovieList] = useState([])
    const dispatch = useDispatch()
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    const fetchMovie = async () => {
        const res = await fetch(url, API_OPTIONS_GET)
        const data = await res.json()
        setMovieList(data)
        dispatch(addNowPlayingMovies(data.results))
    }
    useEffect(()=>{
        fetchMovie()
    },[])
    return movieList
}

export default useGetMovieList;