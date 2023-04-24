import React from "react";
import MovieCard from "./MovieCard.js";
import { movies } from "../movies.js";

function App() {
  return (
    <div>
      <h1 className="heading">My Movies</h1>
      {movies.map((item, index) => {
        return (
          <MovieCard
            key={index}
            movieName={movies[index].name}
            imgAdress={movies[index].imgUrl}
            like={movies[index].liked}
            releaseDate={movies[index].year}
          />
        );
      })}
    </div>
  );
}

export default App;
