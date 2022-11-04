import { createContext, useContext, useEffect, useState } from "react";

import { AppContext } from "../App";

import { Outlet, Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import back from "../assets/back.svg";

export const PaginationContext = createContext();

export default function Repos() {
  const [currentPage, setCurrentPage] = useState(1);
  const { userRepoDetails } = useContext(AppContext);

 

  return (
    <>
      <Helmet>
        <title>repository list display</title>
        <meta name="description" content="List of Victor's repository" />
        <link rel="canonical" href={`/repositories`} />
      </Helmet>
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
              <Link to="/">
                <img src={back} alt="" className="back" />
              </Link>
              <h2>Repositories</h2>
            </header>
            <main>
              <Outlet />
            </main>
          </PaginationContext.Provider>
        ) : (
          <div>can't find repositories</div>
        )}
      </section>
    </>
  );
}
