import React from 'react';
import moment from 'moment';
import closeIcon from '../../images/closeIcon.svg';
import './ModalMovie.css';

const ModalMovie = (props) => {
  if (!props.modalOpen){ 
    return null
  };
  if (!props.movie){
     return null;
  }
  
  const date = moment(props.movie.release_date).format('MMMM DD YYYY');
  const onClose = () => props.setModalOpen(false);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <div className="modal-close_mve" onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </div>
        <div className="modal-begin">
          <h1 className="modal-title">{props.movie.title}</h1>
          <img
            className="modal-image"
            src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
            alt="movie poster"
          />
        </div>
        <div className="modal-end">
          <div className="modal-close" onClick={onClose}>
            <img src={closeIcon} alt="close" />
          </div>
          <span className="modal-date">
            <strong>Release date: </strong>
            {date}
          </span>
          <p className="modal-overview">{props.movie.overview}</p>
          <span className="vote">
            <strong>{props.movie.vote_average}</strong> / 10 (
            {props.movie.vote_count} total votes)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModalMovie;