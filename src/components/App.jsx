export const App = () => {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movie" element={<MoviePage/>}/>
      <Route path="/movie/id" element={<MovieDetails/>}/>
    </Routes>
    </>
  );
};
