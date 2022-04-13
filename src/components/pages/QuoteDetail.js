import { Route, useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning react is fun!" },
  { id: "q2", author: "Maximillian", text: "Learning react is great!" },
];
const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/:quoteId/comment`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
