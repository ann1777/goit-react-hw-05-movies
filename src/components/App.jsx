import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from 'components/navigation/Navigation';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('pages/MoviePage/MoviePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/cast/Cast'));
const Reviews = lazy(() => import('components/reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense failback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/movie/id" element={<MovieDetails />}>
              <Route path="cast/" element={<Cast />}></Route>
              <Route path="reviews/" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
