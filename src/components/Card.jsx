import React from "react";

const Card = ({ title, poster, releaseDate, overview, backdrop }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500/${backdrop}`} />
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} />
      <p>{overview}</p>
      <p>release date: {releaseDate}</p>
    </div>
  );
};

export default Card;
