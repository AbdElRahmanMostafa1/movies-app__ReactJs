import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies } from "../../store/moviesSlice";
import { MovieItem, LoadingSpinner, Alert } from "../UI";

const MoviesList = ({ active }) => {
  const dispatch = useDispatch();
  const { allMovies, isLoading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchAllMovies(active));
  }, [dispatch, active]);

  if (isLoading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <Alert msg={error} />;
  }

  const MoviesList = allMovies?.results?.map((movie) => (
    <MovieItem
      key={movie.id}
      id={movie.id}
      imageURL={movie.backdrop_path}
      title={movie.title}
      rate={movie.vote_average}
      reviewsNum={movie.vote_count}
    />
  ));
  return (
    <ul className="p-0 d-flex flex-wrap justify-content-center align-items-center">
      {MoviesList}
    </ul>
  );
};

export default MoviesList;
