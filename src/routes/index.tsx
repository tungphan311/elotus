import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import Home from "../pages/Home";
import NowPlaying from "../pages/NowPlaying";

function AppRoute() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.NOW_PLAYING} element={<NowPlaying />} />
    </Routes>
  );
}

export default AppRoute;
