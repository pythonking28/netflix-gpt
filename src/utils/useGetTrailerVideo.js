import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS_GET } from "./constants";
import { addTrailerVideo } from "./movieSlice";


const useGetTrailerVideo = (movieId) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        let url = `https://api.themoviedb.org/3/movie/${movieId}/videos`
        const getMovieData = async () =>{
          const res = await fetch(url, API_OPTIONS_GET)
          const data = await res.json()
          const filteredData = data?.results?.filter(clip => clip.type === "Trailer")
          const trailer = filteredData?.length === 0 ? data?.results[0] : filteredData[0]
          dispatch(addTrailerVideo(trailer))
      }
          getMovieData()
  
      },[movieId, dispatch])
}

export default useGetTrailerVideo