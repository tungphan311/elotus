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
