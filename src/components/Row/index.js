import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./style.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      fetch(`https://api.themoviedb.org/3${fetchUrl}`)
        .then((response) => response.json())
        .then((ans) => setMovies(ans.results));
      // const request = await axios.get(fetchUrl); // <-- When using a variable from outside
      // setMovies(request.data.results); // of useEffect(), you HAVE TO include it
      // return request; // inside the '[]' at the end of useEffect()
    }
    fetchData();
  }, [fetchUrl]); // <-- Here's where we need to put the outside variable

  // ^-- If you leave the '[]' blank, this code only runs once when the 'Row' loads.
  // If you put a variable like 'movies' inside the '[]', this code will run once
  // when the page first loads and everytime that varible changes. That variable is
  // called the dependency.

  // https://developers.google.com/youtube/player_parameters
  // console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    console.log(movie.title);
    console.log(movie.name);
    console.log(movie.riginal_name);
    console.log(movie.original_title);

    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || movie.name || movie.original_title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
