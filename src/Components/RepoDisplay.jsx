import { Link } from "react-router-dom";
import { pageIndex } from "../helper/pageIndexStore";

export default function RepoDisplay({ repoDetails, index }) {
  return (
    <article className="repoDisplay">
      <header>
        <h1>{repoDetails.full_name}</h1>
        <p className="desc"> {repoDetails.description}</p>
        <p>By: {repoDetails.owner.login}</p>
      </header>
      <main className="repoMain">
        <p className="visibility">{repoDetails.visibility}</p>
        <p className="lang">Language: {!!repoDetails.language?repoDetails.language:'N/A'}</p>
        <p>Forks: {repoDetails.forks}</p>
        <p>Created: {repoDetails.created_at.slice(0, 10)} </p>
        <p>Last Updated: {repoDetails.updated_at.slice(0, 10)}</p>
      </main>
      <footer>
        <Link
          to={`/repositories/${repoDetails.name}`}
          onClick={() => (pageIndex.page = index)}
        >
          View Repository
        </Link>
      </footer>
    </article>
  );
}
