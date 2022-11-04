import { createContext, useContext, useEffect, useState } from "react";

import { AppContext } from "../App";

import { Outlet, Link} from "react-router-dom";

import back from "../assets/back.svg";

export const PaginationContext = createContext();

export default function Repos() {
  const [currentPage, setCurrentPage] = useState(1);
  const { userRepoDetails } = useContext(AppContext);

  useEffect(() => {
    document.title = "repository list display";
  }, []);

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
  );
}
