import React from "react";

import Pagination from "react-bootstrap/Pagination";

const PaginationBar: React.FC = () => {
  return (
    <Pagination size="sm">
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>

      <Pagination.Next />
    </Pagination>
  );
};

export default PaginationBar;
