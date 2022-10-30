export default function RepoDisplay({ repoDetails }) {
  return (
    <article className="repoDisplay">
      <header>
        <span className="img">
          <img src={repoDetails.owner.avatar_url} alt="" width="30px" />
        </span>
        <span className="names">
          <p>Repository name: {repoDetails.name}</p>
          <p>Visibility: {repoDetails.visibility}</p>
          <p></p>
        </span>
      </header>
      <main className="repoMain">
        <p>Forks: {repoDetails.forks}</p>
        <p>By: {repoDetails.owner.login}</p>
        <p>Created: {repoDetails.created_at} </p>
        <p>Last Updated: {repoDetails.updated_at}</p>
        <p>Description: {repoDetails.description}</p>
      </main>
    </article>
  );
}
