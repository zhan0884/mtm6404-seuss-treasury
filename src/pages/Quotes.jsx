import { useEffect, useState } from 'react';
import './Quotes.css';

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(res => res.json())
      .then(data => setQuotes(data));
  }, []);

  return (
    <div className="quotes-container">
      <h1 className="quotes-heading">Random Dr. Seuss Quotes</h1>
      <div className="quotes-list">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-book">— <strong>{quote.book.title}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}
