import { createContext, useContext, useEffect, useState } from "react";

import RepoDisplay from "../Components/RepoDisplay";

import { AppContext } from "../App";

import { Outlet, useNavigate } from "react-router-dom";

export const PaginationContext = createContext();

export default function Repos() {
  const [currentPage, setCurrentPage] = useState(1);
  const { userRepoDetails } = useContext(AppContext);
 

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/repositories/page/${currentPage}`);
  }, [currentPage]);

  return (
    <PaginationContext.Provider
      value={{
        length: userRepoDetails.length,
        userRepoDetails,
        itemsPerPage: 2,
        currentPage: currentPage,
        setCurrentPage: setCurrentPage,
      }}
    >
      {userRepoDetails.length ? (
        <section className="repos">
          <header>
            <h2>Repositories</h2>
          </header>
          <Outlet />
        </section>
      ) : null}
    </PaginationContext.Provider>
  );
}
