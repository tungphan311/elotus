import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";

function NowPlaying() {
  return (
    <main>
      <Hero />
      <MovieSection type="now_playing" title="Now Playing Movies" />
    </main>
  );
}

export default NowPlaying;
