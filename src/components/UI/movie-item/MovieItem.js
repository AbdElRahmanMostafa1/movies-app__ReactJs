import React from "react";

import Rating from "../rating/Rating";
import { baseImageURL } from "../../../shared/url";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MovieItem = ({ id, imageURL, title, rate, reviewsNum }) => {
  const test = title.length > 18 ? `${title.slice(0, 18)}...` : title;
  return (
    <li>
      <Card
        style={{
          width: "18px",
          minWidth: "16rem",
          maxWidth: "18px",
          margin: "10px",
        }}
      >
        <Link to={`/movie/${id}`}>
          <LazyLoadImage
            alt={title}
            src={`${baseImageURL}/${imageURL}`}
            width={"100%"}
            effect="blur"
          />
        </Link>
        <Card.Body>
          <Link to={`/movie/${id}`}>
            <Card.Title className="text-center">{test}</Card.Title>
          </Link>
          <Card.Text>
            <Rating rate={rate} reviewsNum={reviewsNum} />
          </Card.Text>
          <Link to={`/movie/${id}`}>
            <Button variant="success" className="w-100">
              Movie Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </li>
  );
};
export default MovieItem;
