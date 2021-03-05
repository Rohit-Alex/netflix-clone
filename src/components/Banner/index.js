import React, { useEffect, useState } from "react";
import axios from "../../axios";
import request from "../../request";
// import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(request.fetchTrending);
      setMovie(
        result.data.results[Math.floor() * result.data.results.length - 1]
      );
      return result;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents"></div>
    </header>
  );
};
export default Banner;
