import { useEffect, useState } from "react";
import "./row.css";
import axios from "../../axios";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};
type Movie = {
  id: string;
  name?: string;
  backdrop_path?: string;
  title?: string;
  original_name?: string;
  overview?: string;
  poster_path: string;
};
function Row({ title, fetchUrl, isLargeRow }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData(Url: string) {
      const req = await axios.get(Url);
      setMovies(req.data.results);
      return req;
    }
    fetchData(fetchUrl);
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
