import { Suspense, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useInfiniteLoad from "../hooks/useInfinityLoad";
import InfiniteLoader from "./InfiniteLoader";
import Loader from "./Loader";
import Movies from "./Movies";
import Search from "./Search";

type MovieSectionProps = {
  type: string;
  title: string;
};

function MovieSection({ type, title }: MovieSectionProps) {
  const { ref, inView } = useInView();
  const { movies, isLoadingMore, size, setSize } = useInfiniteLoad(type);

  useEffect(() => {
    if (inView) {
      setSize(size + 1);
    }
  }, [inView]);

  return (
    <section className="section">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="overall-title">{title}</h2>
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
  );
}

export default MovieSection;
