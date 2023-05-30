import { fetchTitles } from 'api/tmdb_api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


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
        <TrendingMovies>
            {movies.map(movie => {
                <MovieItem key={movie.id}>
                    <Link to={`movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </MovieItem>
            })}
        </TrendingMovies>
    );
}
export default HomePage;