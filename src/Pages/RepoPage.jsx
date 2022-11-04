import { useContext, useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { pageIndex } from "../helper/pageIndexStore";
import { PaginationContext } from "./Repos";

import link from "../assets/link.svg";
import copy from "../assets/copy.svg";
import back from "../assets/back.svg";

export default function RepoPage() {
  const { userRepoDetails, itemsPerPage } = useContext(PaginationContext);
  const repo = userRepoDetails[pageIndex.item];
  const cloneRef = useRef();
  const [languages, setLanguages] = useState([]);
  const [percentages, setPercentages] = useState([]);

  useEffect(() => {
    if (languages.length == 0) {
      (async () => {
        const res = await fetch(repo.languages_url);
        const data = await res.json();
        let tempL = [],
          tempP = [],
          sum = 0;
        for (let i in data) {
          sum += data[i];
          tempL.push(i);
        }
        for (let i in data) {
          tempP.push(Math.ceil((data[i] / sum) * 100));
        }
        setLanguages(tempL);
        setPercentages(tempP);
      })();
    }
  }, []);



  return (
    <>
      <Helmet>
        <title>repository page of {repo.name}</title>
        <meta name="description" content={`details of ${repo.name} repository`} />
        <link rel="canonical" href={`/repositories/${repo.name}`} />
      </Helmet>
      <section className="repoPage">
        <Link
          to={`/repositories/page/${Math.ceil(
            (pageIndex.item + 1) / itemsPerPage
          )}`}
        >
          <img src={back} alt="" className="back" />
        </Link>
        <header className="repoPageHeader">
          <h3>{repo.full_name}</h3>
          <ul>
            <li>{repo.name}:</li>
            <li>{repo.description}</li>
            <li className="visibility">{repo.visibility}</li>
            <div className="links">
              <li>
                <img src={link} alt="link icon" />
                <a href={repo.html_url} target="blank">
                  github page
                </a>
              </li>
              {repo.homepage ? (
                <li>
                  <img src={link} alt="link icon" />
                  <a href={repo.homepage} target="blank">
                    web site
                  </a>
                </li>
              ) : null}
            </div>
            <li className="clone">
              clone
              <span
                ref={cloneRef}
                style={{
                  display: "none",
                }}
              >
                {repo.clone_url}
              </span>
              <button onClick={() => copyText(cloneRef.current)}>
                <img src={copy} alt="" />
              </button>
            </li>
          </ul>
        </header>
        <main className="repoPageBody">
          <ul>
            <li>Language: {repo.language}</li>
            <li>Created: {repo.created_at.slice(0, 10)}</li>
            <li>Last Updated: {repo.updated_at.slice(0, 10)}</li>
            <li>Forking: {repo.allow_forking ? "allowed" : "not allowed"}</li>
            {!!repo.allow_forking && <li>Forks: {repo.forks}</li>}
            {!!repo.open_issues && <li>Issues: {repo.open_issues}</li>}
            <li>Watchers: {repo.watchers}</li>
            {languages.length ? (
              <>
                <h5>Languages:</h5>
                <ul className="languages">
                  {languages.map((val, i) => {
                    return (
                      <li>
                        {val} : {percentages[i]}%
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : null}
          </ul>
        </main>
      </section>
    </>
  );
}

const copyText = (ref) => {
  navigator.clipboard.writeText(ref.innerText);
  alert("Copied " + ref.innerText);
};
