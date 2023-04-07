import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import Home from "../pages/Home";
import NowPlaying from "../pages/NowPlaying";
import TopRated from "../pages/TopRated";
import MovieDetail from "../pages/MovieDetail";

function AppRoute() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.NOW_PLAYING} element={<NowPlaying />} />
      <Route path={ROUTES.TOP_RATED} element={<TopRated />} />
      <Route path={`/movie/:id`} element={<MovieDetail />} />
    </Routes>
  );
}

export default AppRoute;
