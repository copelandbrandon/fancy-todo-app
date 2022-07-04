import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadQuote, selectQuote } from "../../features/quote/quoteSlice";
import { useEffect } from "react";
import "./QuoteWidget.css";

export const QuoteWidget = () => {
  const dispatch = useAppDispatch();
  const quote = useAppSelector(selectQuote);

  useEffect(() => {
    dispatch(loadQuote());
  }, [dispatch]);

  console.log(quote);
  return (
    <div className="quote-container">
      <p>{`"${quote.contents.quotes[0].quote}"`}</p>
      <p className="quote-author">{`-${quote.contents.quotes[0].author}`}</p>
    </div>
  );
};
