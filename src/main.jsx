import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

//dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

//components
import ErrorBoundary from "./Pages/ErrorBoundary";
import Loading from "./Components/Loading";
import RepoIndex from "./Components/RepoIndex";

const App = lazy(() => import("./App"));
const Main = lazy(() => import("./Pages/Home"));
const Repos = lazy(() => import("./Pages/Repos"));
const RepoPaginated = lazy(() => import("./Components/ReposPaginated"));
const RepoPage = lazy(() => import("./Pages/RepoPage"));

const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

const ThrowErrorPage = lazy(() => import("./Pages/ThrowErrorPage"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Routes>
              <Route pathName="/" element={<App />}>
                <Route index element={<Main />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/error" element={<ThrowErrorPage />} />
                <Route path="/repositories" element={<Repos />}>
                  <Route index element={<RepoIndex />} />
                  <Route path="page/:page" element={<RepoPaginated />} />
                  <Route path=":reponame" element={<RepoPage />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
