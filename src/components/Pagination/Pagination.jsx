import "./Pagination.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Pagination({
  currentPage,
  setCurrentPage,
  totalEvents,
  eventsPerPage,
}) {
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="page-btn"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <FiChevronLeft />
        Previous
      </button>

      <div className="page-numbers">
        {pages.map((page) => (
          <button
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="page-btn"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
