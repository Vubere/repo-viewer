import { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";

import { Link } from "react-router-dom";


export default function RepoPage(){
  const {userRepoDetails} = useContext(AppContext)
  const {reponame} = useParams()
  const [repo] = userRepoDetails.filter((repo)=>repo.name===reponame)
  const cloneRef = useRef()

  useEffect(()=>{
    //fetch and show .commments_url and dsiplay no comments if unavailable
    //fetch contributors and show if available
    //forks_url
    //.languages url to fetch language
    //.open_issues for issues open
  
  },[])
  return (
    <section>
      <Link to={"/repositories/page/1"}>back</Link>
      <header className="repoPageHeader">
        <ul>
          <li>{repo.full_name}</li>
          <li>By: {repo.owner.login}</li>
          <li>name: {repo.name}</li>
          <li>visibility: {repo.visibility}</li>
          <li>Description:{repo.description}</li>
          <li>
            Link to github page of repository: <a href={repo.html_url}>Here</a>
          </li>
          <li>
            Copy to clone:{" "}
            <span ref={cloneRef}
            style={{
              'display':'none'
            }}>{repo.clone_url}</span>
            <button onClick={() => copyText(cloneRef.current)}>copy</button>
          </li>
        </ul>
      </header>
      <main className="repoPageBody">
        <ul>
          <li>Language: {repo.language}</li>
          <li>Created: {repo.created_at}</li>
          <li>Last Updated: {repo.updated_at}</li>
          <li>forking:{repo.allow_forking ? "allowed" : "not allowed"}</li>
          {repo.allow_forking&&<li>forks:{repo.forks}</li>}
          {repo.homepage ? (
            <li>
              View repositories website: <a href={repo.homepage}>here</a>
            </li>
          ) : null}
          <li>watchers: {repo.watchers}</li>
        </ul>
      </main>
    </section>
  );
}

function copyText(ref) {
  navigator.clipboard.writeText(ref.innerText);
  alert("Copied " + ref.innerText);
}

