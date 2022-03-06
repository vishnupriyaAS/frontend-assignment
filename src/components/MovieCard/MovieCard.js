import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
  return (
    <div className="card" onClick={() => props.getMovieDetails(props.id)}>
      <div className="card-image__container">
        <div className="rating">{props.rating}</div>
        <img
          className="card-image"
          src={`https://image.tmdb.org/t/p/original${props.image}`}
          alt="movie poster"
        />
      </div>
      <div className="card-title">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default MovieCard;