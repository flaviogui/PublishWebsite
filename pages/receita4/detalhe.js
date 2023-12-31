import React, { useEffect, useState } from "react";

const MovieDetails = ({ imdbID }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://www.omdbapi.com/?apikey=16a58b53&i=${imdbID}`;
      const res = await fetch(url);
      const json = await res.json();
      setMovieDetails(json);
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movieDetails) return <div>Carregando detalhes do filme...</div>;

  return (
    <div>
      <h2>{movieDetails.Title}</h2>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <p>Ano: {movieDetails.Year}</p>
      
    </div>
  );
};

export default MovieDetails;