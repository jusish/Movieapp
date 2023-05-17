import { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !==
            'https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg'
              ? movie.Poster
              : 'https://via.placeholder.com/400'
          }
          alt={movie.title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
        <button onClick={openModal} className="open">
          Watch Trailer
        </button>
      </div>
      <div className="model">
        {isOpen && (
          <div>
            <button onClick={closeModal} className="close">
              Close
            </button>
            <div>
              <h1>{movie.title}</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
