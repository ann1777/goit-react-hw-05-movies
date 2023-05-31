import { fetchMovies } from 'api/tmdb_api';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  MoviesList,
  MovieItem,
  MovieLink,
} from './MoviePage.styled';

function MoviePage() {
  const [inputValue, setInputValue] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const searchQuery = inputValue.get('name') ?? '';
  const location = useLocation();

  const onHandleInput = name => {
    const searchParams = name !== '' ? { name } : {};
    setInputValue(searchParams);
  };

//   const onHandleInput = e => {
//     e.preventdefault();
//     setInputValue({evt: e.target.evtName.value });
//     e.currentTarget.reset();
//   };

  useEffect(() => {
    async function fetching() {
      const result = await fetchMovies(searchQuery);
      if (result.length === 0) {
        return setStatus('rejected');
      }
      setMovies(result);
      setStatus('loaded');
    }
    if (!searchQuery) {
      return;
    }
    fetching();
  }, [searchQuery]);

  const onHandleSubmit = async e => {
    e.preventdefault();
    try {
      if (!searchQuery) {
        throw new Error('Empty string is not allowed!');
      }
      const result = await fetchMovies(searchQuery.trim(''));
      setMovies(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchForm onSubmit={onHandleSubmit}>
        <SearchButton type="submit">
          <span>Search for movies</span>
        </SearchButton>

        <SearchInput
          type="text"
          name="search"
          value={inputValue}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={onHandleInput}
        />
      </SearchForm>
      {status === 'idle' && <div>Try to seach something!</div>}
      {status === 'rejected' && <div>Nothing found, folks!</div>}
      {status === 'loaded' && (
        <MoviesList>
          {movies.map(movie => (
            <MovieItem key={movie.id}>
              <MovieLink to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </MovieLink>
            </MovieItem>
          ))}
        </MoviesList>
      )}
    </>
  );
}
export default MoviePage;
