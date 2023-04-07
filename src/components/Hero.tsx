import useSWR from "swr";
import { API_KEY, API_URL } from "../constants";
import { useEffect, useState } from "react";
import { IMovie } from "../interfaces/movie";
import { Link } from "react-router-dom";
import "../styles/hero.scss";

function Hero() {
  const { data, error } = useSWR(
    `${API_URL}/movie/now_playing/?api_key=${API_KEY}&language=en-US&page=1`
  );
  const [randomMovie, setRandomMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    if (error) console.log(error);

    if (data) {
      setRandomMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    }
  }, [data, error]);

  if (!randomMovie) return null;

  return (
    <section
      className="hero-movie"
      style={{
        background: `linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%), url('https://image.tmdb.org/t/p/original${
          randomMovie && randomMovie.backdrop_path
        }') no-repeat center/cover`,
      }}
    >
      {randomMovie && (
        <div className="hero-movie-container">
          <div>
            <h2 className="title">{randomMovie.title}</h2>
            <p className="tagline">{randomMovie.media_type}</p>
          </div>

          <p className="storyline">{`${randomMovie.overview.substring(
            0,
            200
          )}...`}</p>

          <div className="hero-footer">
            <Link to={`/movie/${randomMovie.id}`}>Details →</Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
