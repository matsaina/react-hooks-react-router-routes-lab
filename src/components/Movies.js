import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
 
 
      {movies.map((movie) => {
        return (
          <>
            <div key={movie.name}>
              
              <p>{movie.title}</p>  
              <p>{movie.time}</p>  
              <ul>
                {movie.genres.map((movie, index) => {
                  return <li key={index}>{movie}</li>;
                })}
              </ul>
            </div>
          </>
        );
      })}
 
    </div>
  );
}

export default Movies;
