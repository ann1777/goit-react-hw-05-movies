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
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('idle');
  const searchQuery = searchParams.get('q') ?? '';
  const location = useLocation();

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

  const onHandleChange = ({target}) => {
    setInputValue(target.value);
  }

  const onHandleSubmit = e => {
    e.preventDefault();
    console.log(inputValue);
    setSearchParams(inputValue ? {
      q: inputValue,
    }
    : {})

  };

  return (
    <>
      <SearchForm  onSubmit={onHandleSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          placeholder="Input search query"
          onChange={onHandleChange}
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
              to={`/movies/${movie.id.toString()}`} 
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
