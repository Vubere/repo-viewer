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
              <span>I am a frontend web developer.</span>{" "}
              <span>
                I build web apps using React, Redux, TypeScript, Javascript,
                SASS, CSS and HTML5.{" "}
              </span>
                <span>
                  Hit the link below to see a list of my github repos.
                </span>
            </p>
          </article>
          <aside>
            <Link to="./repos">Github Repositories</Link>
          </aside>
        </>
      </main>
    )
  );
}
