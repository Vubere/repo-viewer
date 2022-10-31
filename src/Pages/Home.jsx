import { useContext } from "react";

import { Link } from "react-router-dom";

import { AppContext } from "../App";

export default function Main() {
  const { userDetails } = useContext(AppContext);
  console.log(userDetails);

  return (
    userDetails?.name && (
      <main className="main">
        <>
          <article className="">
            <img src={userDetails.avatar_url} alt="" />
            <p>
              <span>Welcome, my name is</span>{" "}
              <span>{userDetails.name.toUpperCase()}.</span>{" "}
              <span>I am a {userDetails.bio}.</span>{" "}
              <span>I am based in {userDetails.location}.</span>{' '}
              <span>
                I build web apps using React, Redux, TypeScript, Javascript,
                SASS, CSS and HTML5.{" "}
              </span>
              <span>Hit the link below to see a list of my github repositories.</span>
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
