import { fetchMovies } from 'api/tmdb_api';
import { useEffect, useState, Suspense } from 'react';
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

  useEffect(() => {
    async function fetching() {
      const result = await fetchMovies(searchQuery);
      if (result.length === 0) {
        console.log("Nothing founded for your query");
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
      if (!e.currentTarget.search.value.trim()) {
        throw new Error('Empty string is not allowed!');
      }
      const result = await fetchMovies(searchQuery.trim(''));
      onHandleInput(e.currentTarget.search.value);
      setMovies(result);
      setInputValue('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchForm onSubmit={onHandleSubmit}>
        <SearchInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Input search query"
          onChange={onHandleInput}
        />
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>
      </SearchForm>
      <Suspense fallback={<div>Loading...</div>}>
      {' '}
      {/* {status === 'idle' && <div>Try to seach something!</div>} */}
      {status === 'rejected' && <div>Nothing found, folks!</div>}
      {status === 'loaded' && (
        <MoviesList>
          {movies.map(movie => (
            <MovieItem key={movie.id}>
              <MovieLink 
              to={`${movie.id}`} 
              state={{ from: location }}>
                {movie.title}
              </MovieLink>
            </MovieItem>
          ))}
        </MoviesList>
      )}
      </Suspense>
    </>
  );
}
export default MoviePage;
