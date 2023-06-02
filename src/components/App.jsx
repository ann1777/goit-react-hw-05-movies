import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './navigation';
import { AppBox, GlobalStyle } from 'components/Theme';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('pages/MoviePage/MoviePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/cast/Cast'));
const Reviews = lazy(() => import('components/reviews/Reviews'));

export const App = () => {
  return (
    // <div class="appBox">
    <AppBox>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast/" element={<Cast />}></Route>
            <Route path="reviews/" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle/>
    </AppBox>

    // </div>
  );
};
