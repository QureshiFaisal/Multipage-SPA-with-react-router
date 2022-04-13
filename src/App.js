import { Route, Switch } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";
import { Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
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
        <Route page="/new-quote">
          <NewQuote></NewQuote>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
