import { fetchMovieDetails } from 'api/tmdb_api';
import { useState, useEffect, useLocation, Suspense } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import {
  // NavLink,
  MovieDetailsWrapper,
  MovieDetailsSubWrapper,
} from './MovieDetails.styled';

function MovieDetails() {
  const [details, setDetails] = useState();

  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    try{
      async function fetchMvDetails() {
      const result = await fetchMovieDetails(params.movieId);
      setDetails(result);
    }
    fetchMvDetails();
    } catch (error) {
      console.log(error);
    }  
  }, [params]);

  return (
    <>
      <NavLink to={
          location.state?.from
            ? `/${location.state?.from?.pathname}${location.state?.from?.search}`
            : '/movies'
        }
      >Go back</NavLink>
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
            {details && details.title} 
            ({details && details.release_date.slece(0, 4)})
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
              <NavLink to="cast" state={{ from: location.state?.from }}>Cast</NavLink>
            </li>
            <li>
              <NavLink to="Reviews" state={{ from: location.state?.from }}>Reviews</NavLink>
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
