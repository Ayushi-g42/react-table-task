import React, { useEffect, useState } from "react";
import "./style.css";

const Pagination = ({
  totalItem,
  previousPage,
  nextPage,
  onClickNext = () => {},
  onClickPrevious = () => {},
}) => {
  return (
    <div className="btn-group">
      <button
        className="btn"
        disabled={previousPage == null}
        onClick={() => onClickPrevious()}
      >
        Previous
      </button>
      <button
        className="btn"
        disabled={nextPage == null}
        onClick={() => onClickNext()}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
