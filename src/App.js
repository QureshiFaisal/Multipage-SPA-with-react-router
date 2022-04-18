import React, { Suspense } from "react";

import { Route, Switch } from "react-router-dom";
// import AllQuotes from "./components/pages/AllQuotes";
// import NewQuote from "./components/pages/NewQuote";
// import QuoteDetail from "./components/pages/QuoteDetail";
import { Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import NotFound from "./components/pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
const AllQuotes = React.lazy(() => import("./components/pages/AllQuotes"));
const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes></AllQuotes>
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail></QuoteDetail>
          </Route>
          <Route path="/new-quote">
            <NewQuote></NewQuote>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
