import "./Pagination.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Pagination() {
  return (
    <div className="pagination">
      <button className="page-btn">
        <FiChevronLeft />
        Previous
      </button>

      <div className="page-numbers">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>

        <span>...</span>

        <button>12</button>
      </div>

      <button className="page-btn">
        Next
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
