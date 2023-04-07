import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getAverageRatings } from "../utils/movie";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

type MovieProp = {
  id: number;
  title: string;
  posterPath: string;
  voteAverage: number;
  releaseDate: string;
};

const Movie = ({
  id,
  title,
  posterPath,
  voteAverage,
  releaseDate,
}: MovieProp) => {
  const { ref, inView } = useInView();
  return (
    <>
      <motion.article
        ref={ref}
        variants={item}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Link to={`${`/movie/${id}`}`} title={title} className="fade-in">
          <img
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            alt={`${title} poster`}
            loading="lazy"
          />
        </Link>

        <div className="movie-info">
          <Link to={`/movie/${id}`}>
            <h3>{title}</h3>
          </Link>
          <div className="movie-other-info">
            {releaseDate ? (
              <p className="movie-type"> {releaseDate.slice(0, 4)}</p>
            ) : null}
            <p className="movie-rating">
              <span
                className={
                  voteAverage ? getAverageRatings(voteAverage) : undefined
                }
              >
                {voteAverage}
              </span>
              /10
            </p>
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default Movie;
