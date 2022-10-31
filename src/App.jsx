import { createContext } from "react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

//components
import Navbar from "./Components/Navbar";

//styles
import "./Styles/main.css";

//creating app context
export const AppContext = createContext();

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [userRepoDetails, setUserRepoDetails] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://api.github.com/users/vubere");
        const userData = await res.json();
        const res2 = await fetch(userData.repos_url);
        const repoData = await res2.json();
        setUserDetails(userData);
        setUserRepoDetails(repoData);
        setLoading(false)
      } catch ({ message }) {
        setError(message);
      }
    })();
  }, []);

  return (

    <AppContext.Provider value={{ userDetails, userRepoDetails }}>
      <main className="App">
        <Navbar />
        {
          !loading?
          error==''?
          <Outlet />:
          <div>data fetch failed check your internet connection and try again</div>
        :<div>loading...</div>
      }
      </main>
    </AppContext.Provider>
  );
}

export default App;
