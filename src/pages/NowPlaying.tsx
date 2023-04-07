import { useInView } from "react-intersection-observer";
import useInfiniteLoad from "../hooks/useInfinityLoad";
import { Suspense, useEffect } from "react";
import Loader from "../components/Loader";
import Search from "../components/Search";
import Movies from "../components/Movies";
import InfiniteLoader from "../components/InfiniteLoader";

function NowPlaying() {
  const { ref, inView } = useInView();
  const { movies, error, isLoadingMore, size, setSize } =
    useInfiniteLoad("now_playing");

  useEffect(() => {
    console.log(inView);
    if (inView) {
      setSize(size + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <div>
            <h2 className="overall-title">Now Playing Movies</h2>
            <Search />
          </div>

          <Suspense fallback={<Loader />}>
            <Movies movies={movies} />
          </Suspense>

          <button ref={ref} style={{ margin: "auto" }}>
            {isLoadingMore ? <InfiniteLoader /> : null}
          </button>
        </div>
      </section>
    </main>
  );
}

export default NowPlaying;
