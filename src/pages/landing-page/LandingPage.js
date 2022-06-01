import React, { useState } from "react";

import { Container } from "react-bootstrap";
import MoviesList from "../../components/movies-list/MoviesList";
import { AppPagination } from "../../components/UI";

const LandingPage = () => {
  const [active, setActive] = useState(1);
  const maxPaginationNum = 5;

  const changeActiveHandler = (num) => {
    setActive(num);
  };

  return (
    <Container className="p-0">
      <MoviesList active={active} />
      <AppPagination
        active={active}
        changeActiveHandler={changeActiveHandler}
        maxPaginationNum={maxPaginationNum}
      />
    </Container>
  );
};

export default LandingPage;
