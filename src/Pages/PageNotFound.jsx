
import { Helmet } from "react-helmet-async";


export default function PageNotFound(){

  return(

    <>
    <Helmet>
      <title>page not found</title>
      <meta name="description" content="page not found" />
    </Helmet>
    <section className="pageNotFound">
      <h3>404</h3>
      <p>Page Not Found</p>
    </section>
    </>
  )
}