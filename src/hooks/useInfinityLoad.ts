import useSWRInfinite from "swr/infinite";
import { IMovie, IMovieResponse } from "../interfaces/movie";
import { flattenArr } from "../utils/arrray";

const apiKey = import.meta.env.VITE_API_KEY;
const apiURL = import.meta.env.VITE_API_URL;

const mapResponseToMovies = (data: IMovieResponse[]): IMovie[] => {
  return flattenArr(data.map((item) => item.results));
};

const useInfiniteLoad = (type: string) => {
  const { data, error, size, setSize } = useSWRInfinite<IMovieResponse>(
    (index) =>
      `${apiURL}/movie/${type}/?api_key=${apiKey}&language=en-US&page=${
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
