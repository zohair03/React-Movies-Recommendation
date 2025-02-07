import axios from "axios";
import React, { useState } from "react";

const SearchBar = () => {
  const [movie, setMovie] = useState("");
  const [data, setData] = useState([]);

  function handleChange(event) {
    setMovie(event.target.value);
  }

   const handleClick = async() => {
    const response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2RkNjA4YjJkYzM0NDMyZTlmNTk5M2ZiNzdlMmU1OCIsIm5iZiI6MTczODkzNDE0My42MjUsInN1YiI6IjY3YTYwNzdmZGYzMzZmMzhhYjg1ZTliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ONsNYG70-VXlF6ywRXcVsuRt1JonP9GXyZ0mJszD65U",
        query: movie,
      },
    });
    // setData(response.data.results);
    console.log(response.PromiseResult);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="search a movie"
        value={movie}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search movie</button>
    </div>
  );
};

export default SearchBar;
