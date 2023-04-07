import useSWRInfinite from "swr/infinite";
import { IMovie, IMovieResponse } from "../interfaces/movie";
import { flattenArr } from "../utils/arrray";
import { API_KEY, API_URL } from "../constants";

const mapResponseToMovies = (data: IMovieResponse[]): IMovie[] => {
  return flattenArr(data.map((item) => item.results));
};

const useInfiniteLoad = (type: string) => {
  const { data, error, size, setSize } = useSWRInfinite<IMovieResponse>(
    (index) =>
      `${API_URL}/movie/${type}/?api_key=${API_KEY}&language=en-US&page=${
        index + 1
      }`
  );

  const movies = data ? mapResponseToMovies(data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  return { movies, error, isLoadingMore, size, setSize };
};

export default useInfiniteLoad;
