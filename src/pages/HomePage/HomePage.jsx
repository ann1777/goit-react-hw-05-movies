import { fetchTitles } from 'api/tmdb_api';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { TrendingMovies, MovieItem, Suspense, Link } from './HomePage.styled';

function HomePage() {
  const [movies, setTitles] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const result = await fetchTitles();
      setTitles(result);
    }
    fetchTrendingMovies();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrendingMovies>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </MovieItem>
        ))}
      </TrendingMovies>
    </Suspense>
  );
}
export default HomePage;
