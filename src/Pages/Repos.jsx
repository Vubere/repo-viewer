import { useContext, useState } from "react";

import RepoDisplay from "../Components/RepoDisplay";

import { AppContext } from "../App";

import Paginations from "../Components/Pagination";

export default function Repos() {
  const [currentPage, setCurrentPage] = useState(1)
  const { userRepoDetails } = useContext(AppContext);
 

  console.log(userRepoDetails);

  return (
    <>
      {userRepoDetails.length ? (
        <section className="repos">
          <header>
            <h2>repos</h2>
          </header>
          {userRepoDetails.map((repoDetails) => (
            <RepoDisplay key={repoDetails.id} repoDetails={repoDetails} />
          ))}
          <Paginations length={userRepoDetails.length} itemsPerPage={3} currentPage = {currentPage} setCurrentPage={setCurrentPage}/>
        </section>
      ) : null}
    </>
  );
}

