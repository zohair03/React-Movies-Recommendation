import React, { useState } from "react";

const SearchBar = ({ query }) => {
  const [movie, setMovie] = useState("");

  function handleChange(event) {
    setMovie(event.target.value);
  }

  const handleClick = () => {
    query(movie)
  };

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






