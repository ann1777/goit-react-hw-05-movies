
export async function fetchTitles() {
    const BASIC_URL = `https://api.themoviedb.org/3`;
    const searchParam = new URLSearchParams({
      api_key: '5cbdf993e68eb64b81d53ec37d948601',
    });
    try {
      const response = await fetch(
        `${BASIC_URL}/trending/movie/day?${searchParam}`
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
    const BASIC_URL = `https://api.themoviedb.org/3`;
    const searchParam = new URLSearchParams({
      api_key: '5cbdf993e68eb64b81d53ec37d948601',
      query: searchQuery,
    });
    try {
      const response = await fetch(`${BASIC_URL}/search/movie?${searchParam}`);
      const parsed = await response.json();
      const titles = parsed.results;
      console.log(titles);
      return titles;
    } catch (error) {
      throw new Error(console.log(error));
    }
  }

  export async function fetchMovieDetails(id) {
    const BASIC_URL = `https://api.themoviedb.org/3`;
    const searchParam = new URLSearchParams({
      api_key: '5cbdf993e68eb64b81d53ec37d948601',
    });
    try {
      const response = await fetch(
        `${BASIC_URL}/movie/${id}?${searchParam}`
      );
      const parsed = await response.json();
      return parsed;
    } catch (error) {
      throw new Error(console.log(error));
    }
  }

  export async function fetchMovieCast(id) {
    const BASIC_URL = `https://api.themoviedb.org/3`;
    const searchParam = new URLSearchParams({
        api_key: '5cbdf993e68eb64b81d53ec37d948601',
    });
    try {
        const responce = await fetch(
            `${BASIC_URL}/movie/${id}/credits?${searchParam}`
        );
        const parsed = await responce.json();
        return parsed;
    } catch (error) {
        throw new Error(console.log(error));
    }
  }

  export async function fetchMovieReviews(id) {
    const BASIC_URL = `https://api.themoviedb.org/3`;
    const searchParam = new URLSearchParams({
        api_key: '5cbdf993e68eb64b81d53ec37d948601',
    });
    try {
        const response = await fetch(
        `${BASIC_URL}/movie/${movieId}/reviews?${searchParam}`
        );
        const parsed = await response.json();
        return parsed;
    } catch (error) {
        throw new Error(console.log(error));
    }
}

