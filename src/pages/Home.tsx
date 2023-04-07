import React from "react";
import useSWR, { Fetcher } from "swr";
import { IMovieResponse } from "../interfaces/movie";
import { getNowPlayingMovies } from "../services";

// const fetcher: Fetcher<IMovieResponse> = (page: number) =>
//   getNowPlayingMovies(page);

function Home() {
  // const [page]
  // const result = useSWR('', fetcher)
  return <div>Home</div>;
}

export default Home;
