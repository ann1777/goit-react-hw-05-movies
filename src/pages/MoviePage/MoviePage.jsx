import { fetchMovies } from 'api/tmdb_api';
import { useState } from 'react';
import { SearchButton, SearchForm, SearchInput, MoviesList, MovieItem, MovieLink } from './MoviePage.styled';

function MoviePage() {
    const [value, setInputValue] = useState('');
    const [movies, setMovies] = useState([]);

    const onHandleInput = e => {
        setInputValue(e.currentTarget.value);
    }

    const onHandleSubmit = async e => {
        e.preventdefault();
        try {
            if (!value) {
                throw new Error('Empty string is not allowed!');
            }
            const result = await fetchMovies(value.trim(''));
            setMovies(result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <SearchForm onSubmit={onHandleSubmit}>
            <SearchButton 
            type="submit">
                <span>Search for movies</span>
            </SearchButton>

            <SearchInput
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