import { motion } from "framer-motion";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useSWR from "swr";
import defaultImage from "../assets/default-image.jpg";
import { IMovieResponse } from "../interfaces/movie";
import "../styles/search.scss";
import { getDateName } from "../utils/movie";
import InfiniteLoader from "./InfiniteLoader";

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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useSWR<IMovieResponse>(
    `https://api.themoviedb.org/3/search/movie?api_key=54b94c812ae977596ee0eec873960261&query=${searchQuery}`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <IoSearchOutline size={24} />
        <div>
          <label htmlFor="search-field">Search</label>
          <input
            type="search"
            name="search-field"
            id="search-field"
            placeholder="Search the/movieflix"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            enterKeyHint="search"
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={`searched-data ${searchQuery ? "active" : ""}`}
        >
          {!data && <InfiniteLoader />}
          {data &&
            data.results.map(
              ({ id, title, release_date, poster_path, media_type }) => (
                <motion.article variants={item} key={id}>
                  <Link to={`${`/movie/${id}`}`}>
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w200${poster_path}`
                          : defaultImage
                      }
                      alt=""
                      className="poster"
                    />
                    <div>
                      <h3>{title}</h3>
                      <p>{release_date ? getDateName(release_date) : ""}</p>
                      <p>{media_type}</p>
                    </div>
                  </Link>
                </motion.article>
              )
            )}
        </motion.div>
      </form>
    </>
  );
}

export default Search;
