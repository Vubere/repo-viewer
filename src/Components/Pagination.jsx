import { useEffect, useState } from "react";





export default function Paginations({length, itemsPerPage=3, currentPage, setCurrentPage}){

  const [paginatedArr, setPaginatedArr] = useState([])

  useEffect(()=>{
    setPaginatedArr(paginationFuntion(length, itemsPerPage, currentPage))
  },[currentPage])

  const changePage = (num) => {
    if(!Number(num)) return
    setCurrentPage(num)
  }

  return (
    <div>
      {paginatedArr.map((num)=>{
        return <button onClick={()=>changePage(num)}
        disabled={num===currentPage}>{num}</button>
      })}
    </div>
  )
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
