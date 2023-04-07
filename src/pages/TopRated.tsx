import React from "react";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";

function TopRated() {
  return (
    <main>
      <Hero />
      <MovieSection type="top_rated" title="Top Rated Movies" />
    </main>
  );
}

export default TopRated;
