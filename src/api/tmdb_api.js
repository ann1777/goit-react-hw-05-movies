const BASE_URL = `https://api.themoviedb.org/3`;
const searchParam = new URLSearchParams({
  api_key: '5cbdf993e68eb64b81d53ec37d948601',
});

export async function fetchTitles() { 
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/day?${searchParam}`
    );
    const parsed = await response.json();
    const titles = parsed.results;
    console.log(titles);
    return titles;
  } catch (error) {
    throw new Error(console.log(error));
  }
}

export async function fetchMovies(searchQuery) {
  const searchParam = new URLSearchParams({
    api_key: '5cbdf993e68eb64b81d53ec37d948601',
    query: searchQuery,
  });
  try {
    const response = await fetch(`${BASE_URL}/search/movie?${searchParam}`);
    const parsed = await response.json();
    const titles = parsed.results;
    console.log(titles);
    return titles;
  } catch (error) {
    throw new Error(console.log(error));
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?${searchParam}`);
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw new Error(console.log(error));
  }
}

export async function fetchMovieCast(movieId) {
  try {
    const responce = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?${searchParam}`
    );
    const parsed = await responce.json();
    return parsed;
  } catch (error) {
    throw new Error(console.log(error));
  }
}

export async function fetchMovieReviews(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/reviews?${searchParam}`
    );
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw new Error(console.log(error));
  }
}
