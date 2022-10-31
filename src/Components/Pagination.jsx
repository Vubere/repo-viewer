import { useContext, useEffect, useState } from "react";

import { PaginationContext } from "../Pages/Repos";



export default function Paginations(){

  const [paginatedArr, setPaginatedArr] = useState([])
  const {length, itemsPerPage, currentPage,setCurrentPage} = useContext(PaginationContext)



  useEffect(()=>{
    setPaginatedArr(paginationFuntion(length, itemsPerPage, currentPage))
  },[currentPage])

  const changePage = (num) => {
    if(!Number(num)) return
    setCurrentPage(num)
  }
  const prev = (currentPage) => {
    if(currentPage===1) return
    else setCurrentPage(currentPage-1)
  }
  console.log(length)
  const next = (currentPage) => {
    if (currentPage === Math.ceil(length / itemsPerPage)) return;
    else setCurrentPage(currentPage + 1);
  }
  
  return (
    <div>
      <button onClick={() => prev(currentPage)} disabled={currentPage === 1}>
        prev
      </button>
      {paginatedArr.map((num) => {
        return (
          <button
          key={num}
            onClick={() => changePage(num)}
            disabled={num === currentPage}
          >
            {num}
          </button>
        );
      })}
      <button
        onClick={() => next(currentPage)}
        disabled={currentPage === Math.ceil(length / itemsPerPage)}
      >
        next
      </button>
    </div>
  );
}






//for paginations
const paginationFuntion = (length, itemsPerPage, currentPage) => {
  console.log(length, itemsPerPage,currentPage)
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
