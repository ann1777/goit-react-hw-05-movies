import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/tmdb_api';
// import axios from 'axios';
import { CastList, CastItem } from './Cast.styled';

function Cast() {
  const [casts, setCasts] = useState();
  const { movieId } = useParams();
  // const params = useParams();

  useEffect(() => {
    try {
      async function fetchCasts() {
      const result = await fetchMovieCast(movieId);
      setCasts(result);
      console.log(result)
    }
    fetchCasts();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US &api_key=5cbdf993e68eb64b81d53ec37d948601`
  //     )
  //     .then(res => setDetails(res.data.cast));
  // }, [movieId]);

  return (
    <div>
      <CastList>
        {casts.map(cast => {
            return (
              <CastItem key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                  alt={`${cast.name} portrait`}
                  width="100"
                />
                <div>
                  <p>Name: {cast.name}</p>
              <p>Character: {cast.character}</p>
                </div>
            </CastItem>
            );          
            // <CastItem key={cast.id}>
            //   {cast.profile_path && (
            //     <img
            //       src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
            //       alt={cast.name}
            //       width="100"
            //     />
            //   )}
            //   <p>{cast.name}</p>
            //   <p>Character: {cast.character}</p>
            // </CastItem>
          })}
      </CastList>
    </div> 
  );
}
export default Cast;
