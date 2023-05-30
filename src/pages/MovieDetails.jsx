import { fetchMovieDetails } from 'api/tmdb_api';
import { useState, useParams, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MovieDetails() {
    const [details, setDetails] = useState([]);

    const params = useParams();

    useEffect(() => {
        async function fetchMovieDetails() {
            const result = await fetchMovieDetails(params.id);
            setDetails(result);
        }
        fetchMovieDetails();
    }, [params]);

    return (
        <div>
            <NavLink to="/movies">
                Go back
            </NavLink>
            <div>
                {' '}
                <img
                src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
                alt={details.title}
                />
                <div>
                    <h1>
                        {details.title} ({details.release_date})
                    </h1>
                    <p>Userscore: {details.vote_average}</p>
                    <h2>Overview</h2>
                    <p>{details.overview}</p>
                    <h3>Genres</h3>
                    <p>{details.genres.map(genre.name)}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;