import React from "react";

const PageSelector = ({
  handleLimitChange,
  handlePageClick,
  p,
  limit,
  total_count
}) => {
  return (
    <section className="pageSelector">
      <div className="pages">
        {p !== 1 && (
          <button className="prev" onClick={() => handlePageClick(-1)}>
            Prev
          </button>
        )}
        <p className="num">Page: {p}</p>
        {Math.ceil(total_count / limit) !== p && (
          <button className="next" onClick={() => handlePageClick(1)}>
            Next
          </button>
        )}
      </div>
      <div className="items">
        <form>
          <label>
            Items per page:{" "}
            <select onChange={handleLimitChange} value={limit}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </label>
        </form>
        <p>
          Showing articles: {(p - 1) * limit + 1} -{" "}
          {p * limit > total_count
            ? p * limit - (p * limit - total_count)
            : p * limit}{" "}
          of {total_count}
        </p>
      </div>
    </section>
  );
};

export default PageSelector;
