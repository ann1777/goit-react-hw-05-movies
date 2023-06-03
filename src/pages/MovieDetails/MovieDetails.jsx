import { fetchMovieDetails } from 'api/tmdb_api';
// import axios from 'axios';
import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import {
  MovieDetailsWrapper,
  MovieDetailsSubWrapper,
  StyledLink,
  StyledButton,
  MoreInfoLinks
} from './MovieDetails.styled';


function MovieDetails() {
  const [details, setDetails] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    try {
      async function fetchMvDetails() {
        const result = await fetchMovieDetails(params.movieId);
        setDetails(result);
      }
      fetchMvDetails();
    } catch (error) {
      console.log(error);
    }
  }, [params]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=5cbdf993e68eb64b81d53ec37d948601`
  //     )
  //     .then(res => setFilm(res.data));
  // }, [movieId]);

  return (
    <>
      <StyledButton
        type="button" onClick={() => navigate(backLink)}
      >       
        Go back
      </StyledButton>
      <MovieDetailsWrapper>
        {' '}
        {details && (
          <img
          src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
          alt="poster"
          />
        )}
        <MovieDetailsSubWrapper>
        <h1>
            {details && details.title} (
            {details && details.release_date.slice(0, 4)})
          </h1>
          <p>Userscore: {details && details.vote_average}</p>
          <h2>Overview</h2>
          <p>{details && details.overview}</p>
          <h3>Genres</h3>
          <p>{details && details.genres.map(genre => genre.name).join(', ')}</p>
        </MovieDetailsSubWrapper>
        <div>
          <p>Additional information</p>
          <MoreInfoLinks>
            <li>
              <StyledLink to="cast" state={{ from: location.state?.from }}>
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink to="reviews" state={{ from: location.state?.from }}>
                Reviews
              </StyledLink>
            </li>
          </MoreInfoLinks>
        </div>
      </MovieDetailsWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
