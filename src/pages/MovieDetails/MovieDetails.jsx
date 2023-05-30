import { fetchMovieDetails } from 'api/tmdb_api';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import {
  NavLink,
  MovieDetailsWrapper,
  MovieDetailsSubWrapper,
} from './MovieDetails.styled';

function MovieDetails() {
  const [details, setDetails] = useState();

  const params = useParams();

  useEffect(() => {
    async function fetchMvDetails() {
      const result = await fetchMovieDetails(params.id);
      setDetails(result);
    }
    fetchMvDetails();
  }, [params]);

  return (
    <>
      <NavLink to="/movies">Go back</NavLink>
      <MovieDetailsWrapper>
        {' '}
        {details && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
            alt={details.title}
          />
        )}
        <MovieDetailsSubWrapper>
          <h1>
            {details && details.title} ({details && details.release_date})
          </h1>
          <p>Userscore: {details && details.vote_average}</p>
          <h2>Overview</h2>
          <p>{details && details.overview}</p>
          <h3>Genres</h3>
          <p>{details && details.genres.map(genre => genre.name).join(', ')}</p>
        </MovieDetailsSubWrapper>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="Reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
      </MovieDetailsWrapper>
      <Suspense fallback={<div>Loading...</div>} e>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
