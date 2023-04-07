export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: false;
  vote_average: number;
}

export interface IMovieResponse {
  page: number;
  results: IMovie[];
  total_pages?: number;
  total_results: number;
}

export interface IVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface ICast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface ICrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

export interface ICredit {
  cast: ICast[];
  crew: ICrew[];
}

export interface ICompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ICountry {
  iso_3166_1: string;
  name: string;
}

export interface IMovieDetail extends IMovie {
  homepage: string;
  imdb_id: string;
  videos: {
    results: IVideo[];
  };
  genres: IGenre[];
  credits: ICredit;
  tagline: string;
  status: string;
  budget: number;
  revenue: number;
  production_companies: ICompany[];
  production_countries: ICountry[];
  runtime: number;
}
