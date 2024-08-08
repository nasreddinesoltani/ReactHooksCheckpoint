import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import data from "./data";
import AddMovie from "./Components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState(data);
  const moviesHandler = (filmjdid) => {
    setMovies([...movies, filmjdid]);
  };

  return (
    <div>
      <AddMovie moviesHandler={moviesHandler} />
      <MovieList data={movies} />
    </div>
  );
};

export default App;
