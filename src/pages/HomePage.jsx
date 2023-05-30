import { fetchTitles } from 'api/tmdb_api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
    const [movies, setTitles] = useState([]);

    useEffect(() => {
        async function fetchAppTitles() {
            const result = await fetchTitles();
            setTitles(result);
        }
        fetchAppTitles();
    }, []);

    return (
        <ul>
            {movies.map(movie => {
                <li key={movie.id}>
                    <Link to={`movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
            })}
        </ul>
    );
}
export default HomePage;