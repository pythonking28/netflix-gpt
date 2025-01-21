import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const SecondaryContainer = () =>{
    const {nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies} = useSelector(store => store.movies)
    return (
        <div className="mt-[28rem] z-11 relative">
            <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
            <MovieList title={"Top-Rated"} movies={topRatedMovies} />
            <MovieList title={"Popular"} movies={popularMovies} />
            <MovieList title={"Upcoming"} movies={upcomingMovies} />
        </div>
        /* 
        MovieList - Popular
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horror

        */
    )
}

export default SecondaryContainer