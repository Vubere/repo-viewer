import { useEffect } from "react";


export default function PageNotFound(){

  useEffect(() => {
    document.title = "page not found";
  }, []);

  return(
    <section className="pageNotFound">
      <h3>404</h3>
      <p>Page Not Found</p>
    </section>
  )
}