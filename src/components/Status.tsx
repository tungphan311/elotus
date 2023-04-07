import { ICompany, ICountry } from "../interfaces/movie";
import { formatTime, getDateName, getLanguageName } from "../utils/movie";

type StatusProps = {
  status: string;
  budget: number;
  revenue: number;
  productionCompanies: ICompany[];
  productionCountries: ICountry[];
  originalLanguage: string;
  releaseDate: string;
  runtime: number;
  backdropPath: string;
};

const Status = ({
  status,
  budget,
  revenue,
  productionCompanies,
  productionCountries,
  originalLanguage,
  releaseDate,
  runtime,
  backdropPath,
}: StatusProps) => {
  return (
    <section
      className="status"
      style={{
        background: `linear-gradient(#080705, #080705), url('https://image.tmdb.org/t/p/original${backdropPath}') no-repeat center/cover`,
      }}
    >
      <div className="container">
        {status ? (
          <div>
            <p>Staus</p>
            <p>{status}</p>
          </div>
        ) : null}

        {releaseDate ? (
          <div>
            <p>Release Date</p>
            <p>{getDateName(releaseDate)}</p>
          </div>
        ) : null}

        {originalLanguage ? (
          <div>
            <p>Original Language</p>
            <p>{getLanguageName(originalLanguage)}</p>
          </div>
        ) : null}

        {runtime ? (
          <div>
            <p>Runtime</p>
            <p>{formatTime(runtime)}</p>
          </div>
        ) : null}

        {productionCompanies ? (
          <div>
            <p>Production Company</p>
            <p>{productionCompanies[0].name}</p>
          </div>
        ) : null}

        {productionCountries ? (
          <div>
            <p>Country of Origin</p>
            <p>{productionCountries[0].name}</p>
          </div>
        ) : null}

        {budget ? (
          <div>
            <p>Budget</p>
            <p>${budget.toLocaleString()}</p>
          </div>
        ) : null}

        {revenue ? (
          <div>
            <p>Revenue</p>
            <p>${revenue.toLocaleString()}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Status;
