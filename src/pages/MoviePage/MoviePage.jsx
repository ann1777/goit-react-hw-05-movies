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
        <SearchForm onSubmit={onHandleSubmit}>
            <SearchButton 
            type="submit">
                <span>Search for movies</span>
            </SearchButton>

            <SearhInput
            type="text"
            name="search"
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={onHandleInput}
            />
        </SearchForm>
        <MoviesList>
            {movies.map(movie => {
                <MovieItem key={movie.id}>
                    <MovieLink to={`${movie.id}`}>
                        {movie.title}
                    </MovieLink>
                </MovieItem>
            })}
        </MoviesList>

        </>
    );
}
export default MoviePage;