import { fetchTitles } from 'api/tmdb_api';
import { useState, useEffect, Suspense } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { TrendingMovies, MovieItem } from './HomePage.styled';

function HomePage() {
  const [movies, setTitles] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      async function fetchTrendingMovies() {
        const result = await fetchTitles();
        setTitles(result);
      }
      fetchTrendingMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
    <h1>Hello</h1>
    <Suspense fallback={<div>Loading...</div>}>
      {' '}
      <TrendingMovies>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </MovieItem>
        ))}
      </TrendingMovies>
    </Suspense>
    </>
  );
}
export default HomePage;
