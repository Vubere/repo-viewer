import { createContext, useContext, useEffect, useState } from "react";

import RepoDisplay from "../Components/RepoDisplay";

import { AppContext } from "../App";

import { Outlet, useNavigate } from "react-router-dom";

export const PaginationContext = createContext();

export default function Repos() {
  const [currentPage, setCurrentPage] = useState(1);
  const { userRepoDetails } = useContext(AppContext);


  return (
    <section className="repos">
      {userRepoDetails.length ? (
        <PaginationContext.Provider
          value={{
            length: userRepoDetails.length,
            userRepoDetails,
            itemsPerPage: 2,
            currentPage: currentPage,
            setCurrentPage: setCurrentPage,
          }}
        >
          <header>
            <h2>Repositories</h2>
          </header>
          <Outlet />
        </PaginationContext.Provider>
      ) : (
        <div>can't find repositories</div>
      )}
    </section>
  );
}
