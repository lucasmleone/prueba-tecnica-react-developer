/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";

import retrieveMedia from "../logic/retrieveMedia";
export default function () {
  const [movies, setMovie] = useState();

  useEffect(() => {
    retrieveSeries();
  }, []);

  const retrieveSeries = () => {
    try {
      retrieveMedia().then((medias) => {
        let movies = medias.filter(
          (media) =>
            media.programType.includes("movie") && media.releaseYear >= 2010
        );
        setMovie(
          movies.sort((movieA, movieB) => {
            movieA.title.toLowerCase();
            movieB.title.toLowerCase();
            if (movieA.title > movieB.title) {
              return 1;
            }
            if (movieA.title < movieB.title) {
              return -1;
            } else {
              return 0;
            }
          })
        );
      });
    } catch (error) {
      //toast with error
    }
  };

  return (
    <div>
      {movies ? (
        <ul>
          {movies.slice(0, 20).map((movie) => (
            <li>
                <img src={movie["images"]["Poster Art"]["url"]} alt="img movie" />
              <h1>{movie.title}</h1>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
