import { Routes, Route, Outlet } from "react-router-dom";
import { ROUTES } from "../constants";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const Home = lazy(() => import("../pages/Home"));
const NowPlaying = lazy(() => import("../pages/NowPlaying"));
const TopRated = lazy(() => import("../pages/TopRated"));
const MovieDetail = lazy(() => import("../pages/MovieDetail"));

function AppRoute() {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        }
      >
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.NOW_PLAYING} element={<NowPlaying />} />
        <Route path={ROUTES.TOP_RATED} element={<TopRated />} />
        <Route path={`/movie/:id`} element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
