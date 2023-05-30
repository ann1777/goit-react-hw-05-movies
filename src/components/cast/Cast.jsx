import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/tmdb_api';
import { CastList, CastItem } from './Cast.styled';

function Cast() {
  const [details, setDetails] = useState();

  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const result = await fetchMovieCast(params.id);
      setDetails(result);
    }
    fetchMovie();
  }, [params]);

  return (
    <div>
      <CastList>
        {details &&
          details.cast.map(cast => {
            <CastItem key={cast.id}>
              {cast.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.name}
                  width="100"
                />
              )}
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </CastItem>;
          })}
      </CastList>
    </div>
  );
}
export default Cast;
