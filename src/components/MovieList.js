import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="pt-3">
      <div className={`mx-10 my-3 text-3xl font-semibold ${title==="Now Playing"? "text-white": "text-black"}`}>{title}</div>
      <div className="flex flex-col mx-5 mt-1 mb-4 overflow-x-scroll ">
        <div className="flex gap-5 w-max ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterImagePath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
