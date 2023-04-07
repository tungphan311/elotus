import defaultImage from "../assets/default-image.jpg";
import { AiOutlineLink } from "react-icons/ai";
import { getAverageRatings } from "../utils/movie";
import { ICredit, IGenre, IVideo } from "../interfaces/movie";

type TitularInfoProps = {
  posterPath: string;
  title: string;
  voteAverage: number;
  tagline: string;
  overview: string;
  releaseDate: string;
  genres: IGenre[];
  credits: ICredit;
  videos: { results: IVideo[] };
  homepage: string;
  id: string | undefined;
};

const TitularInfo = ({
  posterPath,
  title,
  voteAverage,
  tagline,
  overview,
  releaseDate,
  genres,
  credits,
  videos,
  homepage,
  id,
}: TitularInfoProps) => {
  const video = videos.results.find(({ type }) => type === "Trailer");

  return (
    <section className="titular-info">
      <div className="container">
        <img
          src={
            posterPath
              ? `https://image.tmdb.org/t/p/original${posterPath}`
              : defaultImage
          }
          alt={title}
          title={title}
        />

        <div className="details">
          <div className="detail">
            <div>
              <h2>
                <a href={homepage} target="_blank" rel="noreferrer">
                  <span>{title}</span> <AiOutlineLink className="link-icon" />
                </a>
              </h2>
              <div className="tag">
                {releaseDate ? (
                  <p className="year">{releaseDate.slice(0, 4)}</p>
                ) : null}
                <div>
                  {genres ? (
                    <p className="tags">
                      {genres.map((genre) => genre.name).join(", ")}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            {voteAverage ? (
              <h2
                className={`rating ${
                  voteAverage ? getAverageRatings(voteAverage) : null
                }`}
              >
                {voteAverage}
                <span>/10</span>
              </h2>
            ) : null}
          </div>

          <div className="story">
            {tagline ? <p className="tagline">{tagline}</p> : null}

            {overview ? <p className="storyline">{overview}</p> : null}
          </div>

          <div className="crew">
            {credits.crew ? (
              <p>
                <strong>Director(s):</strong>{" "}
                {credits.crew
                  .map((crews) =>
                    crews.department === "Directing" ? crews.name : null
                  )
                  .filter(Boolean)
                  .join(", ")}
              </p>
            ) : null}

            {credits.crew ? (
              <p>
                <strong>Writer(s):</strong>{" "}
                {credits.crew
                  .map((crews) =>
                    crews.department === "Writing" ? crews.name : null
                  )
                  .filter(Boolean)
                  .join(", ")}
              </p>
            ) : null}
          </div>
        </div>

        <div className="video">
          {video ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              key={video.key}
            ></iframe>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default TitularInfo;
