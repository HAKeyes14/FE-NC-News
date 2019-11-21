import React from "react";

const PageSelector = ({ handleChange, handleClick, p, limit, total_count }) => {
  return (
    <section className="pageSelector">
      <div className="pages">
        {p !== 1 && (
          <button className="prev" onClick={() => handleClick(-1)}>
            Prev
          </button>
        )}
        <p className="num">Page: {p}</p>
        {Math.ceil(total_count / limit) !== p && (
          <button className="next" onClick={() => handleClick(1)}>
            Next
          </button>
        )}
      </div>
      <form className="items">
        <label>
          Items per page:{" "}
          <select onChange={handleChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </form>
    </section>
  );
};

export default PageSelector;
