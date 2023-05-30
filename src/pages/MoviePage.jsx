import { fetchMovies } from 'api/tmdb_api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MoviePage() {
    const [value, setInputValue] = useState('');
    const [movies, setMovies] = useState([]);

    const onHandleInput = e => {
        setInputValue(e.currentTarget.value);
    }

    const onHandleSubmit = async e => {
        e.preventdefault();
        const result = await fetchMovies(value);
        setMovies(result);
    };

    return (
        <>
        <form onSubmit={onHandleSubmit}>
            <button 
            type="submit">
                <span>Search for movies</span>
            </button>

            <input
            type="text"
            name="search"
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={onHandleInput}
            />
            </form>
            <ul>
                {movies.map(movie => {
                    <li key={movie.id}>
                        <Link to={`${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                })}
            </ul>
        </>
    );
}
export default MoviePage;