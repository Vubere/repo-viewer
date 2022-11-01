import { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import { AppContext } from "../App";



export default function Main() {
  const { userDetails } = useContext(AppContext);
  
  useEffect(()=>{
    document.title = "repository list app"
  },[])

  return (
    userDetails?.name && (
      <main className="main">
        <>
          <article className="">
            <img src={userDetails.avatar_url} alt="" />
            <p>
              <span className="name">{userDetails.name.toUpperCase()}</span>{" "}
              <span>{userDetails.bio}.</span>{" "}
              <span>Based in {userDetails.location}.</span>{' '}
              <span>
                Builds web apps using React, Redux, TypeScript, Javascript,
                SASS, CSS and HTML5.{" "}
              </span>
              <span>Hit the link below to see a list of his github repositories.</span>
            </p>
          </article>
          <Link to="/repositories">
            <aside>Github Repositories</aside>
          </Link>
        </>
      </main>
    )
  );
}
