import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

//dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import ErrorBoundary from "./ErrorBoundary";

const App = lazy(() => import("./App"));
const Main = lazy(() => import("./Pages/Home"));
const Repos = lazy(()=>import('./Pages/Repos'))

const PageNotFound = lazy(()=>import('./PageNotFound'))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route pathName="/" element={<App />}>
              <Route index element={<Main />} />
              <Route path="*" element={<PageNotFound/>}/>
              <Route path='/repos' element={<Repos/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
