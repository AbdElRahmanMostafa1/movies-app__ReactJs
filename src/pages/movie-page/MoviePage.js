import React, { useEffect } from "react";
import styles from "./moviePage.module.css";

import {
  Alert,
  LoadingSpinner,
  MovieCategory,
  Rating,
} from "../../components/UI";
import { Col, Container, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { baseImageURL } from "../../shared/url";
import { fetchSingleMovie } from "../../store/moviesSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MoviePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { isLoading, singleMovie, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchSingleMovie(params.id));
  }, [dispatch, params.id]);

  if (isLoading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <Alert msg={error} />;
  }

  const movieCategories = singleMovie?.genres.map((cat) => (
    <MovieCategory key={cat.id}> {cat.name} </MovieCategory>
  ));

  return (
    <Container className="container">
      <article className="mb-3">
        <Link to={"/"}>
          <Button variant="success">Back </Button>{" "}
        </Link>
      </article>

      <Row className="justify-content-center">
        <Col lg={4} md={6}>
          <LazyLoadImage
            src={`${baseImageURL}/${singleMovie?.poster_path}`}
            alt=""
            width={"100%"}
            effect="blur"
            className="rounded"
          />
        </Col>
        <Col lg={8} md={6}>
          <div>
            <div>
              <h3 className={"my-3 text-center"}> {singleMovie?.title} </h3>
              <p className={styles.desc}> {singleMovie?.overview} </p>
            </div>
            <hr />
            <div>
              <span className="fw-600">
                {singleMovie?.production_countries.length === 1
                  ? "Country"
                  : "Countries"}
                :
              </span>{" "}
              {singleMovie?.production_countries.map((country) => (
                <span style={{ marginRight: "5px" }} key={country.iso_3166_1}>
                  {" "}
                  {country.name}{" "}
                </span>
              ))}
            </div>
            <hr />
            <div>
              <span className="fw-600">Release Date:</span>{" "}
              {singleMovie?.release_date}
            </div>
            <hr />
            <div>
              <p style={{ fontWeight: "600" }} className="text-center">
                {" "}
                {singleMovie?.adult
                  ? "For Adults Only"
                  : "For Children and Adults"}{" "}
              </p>
            </div>
            <hr />
            <div className="rating d-flex justify-content-center">
              <Rating rate={singleMovie?.vote_average} />
            </div>
            <hr />
            <div className={`d-flex flex-wrap justify-content-center`}>
              {movieCategories}
            </div>
            <hr />
            <a target={"_blank"} rel="noreferrer" href={singleMovie?.homepage}>
              <Button variant={"success"} className="w-100">
                {" "}
                Movie Homepage{" "}
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
