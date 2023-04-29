import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors);
  return (
    <div>
      <h1>Directors Page</h1>

      {directors.map((director) => {
        return (
          <>
            <div key={director.name}>
              {director.name}

              <ul>
                {director.movies.map((movie, index) => {
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

export default Directors;
