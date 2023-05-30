import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
const HomePage = lazy(() => import('pages/HomePage'));
const MoviePage = lazy(() => import('pages/MoviePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));


export const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movie" element={<MoviePage/>}/>
        <Route path="/movie/id" element={<MovieDetails/>}>
          <Route path="cast/" element={<Cast/>}></Route>
          <Route path="reviews/" element={<Reviews/>}></Route>
        </Route>
        <Route path="*" element={<Home/>}/>
      </Route>     
    </Routes>
    </>
  );
};
