import { useCounter, useFetch} from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, error } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {/* {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer mt-1">{author}</footer>
        </blockquote>
      )} */}

      {/* Mismo Codigo mas optimizado: */}
      {
        isLoading ? <LoadingQuote/> : <Quote author={author} quote={quote}/>
      }
      
      <button className="btn btn-primary" onClick={() => increment(1)} disabled={isLoading}>Next Quote</button>
    </>
  );
};
