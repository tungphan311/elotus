import { useParams } from "react-router-dom";
import useSWR from "swr";
import Loader from "../components/Loader";
import { API_KEY, API_URL } from "../constants";
import "../styles/movie-detail.scss";
import TitularInfo from "../components/TitularInfo";
import { IMovieDetail } from "../interfaces/movie";
import Status from "../components/Status";
import Error from "../components/Error";

function MovieDetail() {
  const { id } = useParams();
  const { data, error } = useSWR<IMovieDetail>(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,credits,similar,recommendations`
  );

  if (!data) return <Loader />;
  if (error) return <Error />;

  const {
    poster_path: posterPath,
    title,
    vote_average: voteAverage,
    tagline,
    overview,
    release_date: releaseDate,
    genres,
    credits,
    videos,
    homepage,
    status,
    budget,
    revenue,
    production_companies: productionCompanies,
    production_countries: productionCountries,
    original_language: originalLanguage,
    runtime,
    backdrop_path: backdropPath,
  } = data;

  return (
    <main className="movie-details">
      <div
        className="movie-hero"
        style={{
          background: `linear-gradient(#ddd, transparent), url('https://image.tmdb.org/t/p/original${data.backdrop_path}') no-repeat top/cover`,
        }}
      ></div>

      <section className="info">
        <TitularInfo
          posterPath={posterPath}
          title={title}
          voteAverage={voteAverage}
          tagline={tagline}
          overview={overview}
          releaseDate={releaseDate}
          genres={genres}
          credits={credits}
          videos={videos}
          homepage={homepage}
          id={id}
        />
        <Status
          status={status}
          budget={budget}
          revenue={revenue}
          productionCompanies={productionCompanies}
          productionCountries={productionCountries}
          originalLanguage={originalLanguage}
          runtime={runtime}
          backdropPath={backdropPath}
          releaseDate={releaseDate}
        />
      </section>
    </main>
  );
}

export default MovieDetail;
