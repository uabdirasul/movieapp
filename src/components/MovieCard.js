import React from "react";

const MovieCard = (props) => {
  return (
    <div className="card">
      <h2>{props.movieName}</h2>
      <img src={props.imgAdress} alt="props.movieName" />
      <p>{props.like}% ❤️</p>
      <p>{props.releaseDate}</p>
    </div>
  );
};

export default MovieCard;
