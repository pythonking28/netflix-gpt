import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return null
    const {id,  original_title, overview} = movies[Math.floor(Math.random()*movies.length)]
  return (
    <div className=''>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer