import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./style.css";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl); // <-- When using a variable from outside
      setMovies(request.data.results); // of useEffect(), you HAVE TO include it
      return request; // inside the '[]' at the end of useEffect()
    }
    fetchData();

    // axios.get(fetchUrl).then((result) => {
    //   setMovies(result.data.results);
    // });
  }, [fetchUrl]); // <-- Here's where we need to put the outside variable
  //  If we leave the '[]' blank, this code only runs once when the 'Row' loads.
  // If we put a variable like 'movies' inside the '[]', this code will run once
  // when the page first loads and everytime that varible changes. That variable is
  // called the dependency.

  return (
    <div>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
