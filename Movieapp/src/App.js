import {useEffect, useState} from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

// b1fb059

const API_URL  = 'https://www.omdbapi.com?apikey=b1fb059';
// const movie1 = {
//     "Title": "The Amazing Spiderman 2 Webb Cut",
//     "Year": "2021",
//     "imdbID": "tt18351128",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
// }
const App  = () => {
    const [movies, setMoives] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMoives(data.Search);
    }

    useEffect(() => {
        searchMovies('Avengers');
    }, []);
    return (
        <div className='app'>
            <h1>MovieLight</h1>

            <div className='search'>
                <input
                  placeholder="Search for movies"
                  value= {searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <img
                 src={searchIcon} 
                 alt="search" 
                 onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie ={movie} />
              ))}
            </div>
                 ) : 
                 (
                    <div className="empty">
                       <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App 