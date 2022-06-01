import React from "react";
import { Pagination } from "react-bootstrap";

const AppPagination = ({
  active,
  maxPaginationNum,
  changeActiveHandler,
}) => {
  let items = [];

  for (let number = 1; number <= maxPaginationNum; number++) {
    const changeActivePage = () => {
      changeActiveHandler(number);
    };

    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={changeActivePage}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination className="justify-content-center flex-wrap">
      {items}
    </Pagination>
  );
};

export default AppPagination;
