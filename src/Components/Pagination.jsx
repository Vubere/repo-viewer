import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { PaginationContext } from "../Pages/Repos";

export default function Paginations() {
  const [paginatedArr, setPaginatedArr] = useState([]);
  const { length, itemsPerPage, currentPage, setCurrentPage } =
    useContext(PaginationContext);
  const pageNum = Math.ceil(length / itemsPerPage)

  useEffect(() => {
    setPaginatedArr(paginationFuntion(length, itemsPerPage, currentPage));
  }, [currentPage]);

  const changePage = (num) => {
    if (!Number(num)) return;
    setCurrentPage(num);
  };
  const prev = (currentPage) => {
    if (currentPage === 1) return currentPage;
    else setCurrentPage(currentPage - 1);
  };

  const next = (currentPage) => {
    if (currentPage === pageNum) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <button disabled={currentPage === 1}
      onClick = {()=>prev(currentPage)}>
        <Link
          to={`/repositories/page/${
            currentPage != 1 ? currentPage - 1 : currentPage
          }`}
        >
          prev
        </Link>
       </button>
      {paginatedArr.map((num) => {
        return (
          <button
            onClick={() => changePage(num)}
            disabled={num === currentPage}
          >
            <Link to={`/repositories/page/${num}`} key={num}>
              {num}
            </Link>
          </button>
        );
      })}
      <button disabled={currentPage === pageNum}
      onClick={()=>next(currentPage)}>
        <Link
          to={`/repositories/page/${
            currentPage < pageNum?
             currentPage + 1
              : currentPage
          }`}
        >
          next
        </Link>
      </button>
    </div>
  );
}

//for paginations
const paginationFuntion = (length, itemsPerPage, currentPage) => {
  const pages = Math.ceil(length / itemsPerPage);
  return setPaginationNumbers(currentPage, pages);
};
function setPaginationNumbers(currentPage, length) {
  if (length < 8) {
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr[i] = i + 1;
    }
    return arr;
  }
  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5, "...", length];
  } else if (currentPage > 3 && currentPage < length - 4) {
    return [
      1,
      "...",
      currentPage,
      currentPage + 1,
      currentPage + 2,
      "...",
      length,
    ];
  } else {
    return [1, "...", length - 4, length - 3, length - 2, length - 1, length];
  }
}
