import { motion } from "framer-motion";
import { IMovie } from "../interfaces/movie";
import Movie from "./Movie";

type MoviesProps = {
  movies: IMovie[];
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

function Movies({ movies }: MoviesProps) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="movies"
    >
      {movies
        ? movies.map((movie) => (
            <Movie
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              voteAverage={movie.vote_average}
              releaseDate={movie.release_date}
              key={movie.id}
            />
          ))
        : null}
    </motion.section>
  );
}

export default Movies;
