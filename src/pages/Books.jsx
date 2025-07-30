import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Books.css';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then((res) => res.json())
      .then(setBooks);
  }, []);

  return (
    <div className="books-page">
      <h2 className="books-title">All Dr. Seuss Books</h2>
      <div className="book-grid">
        {books.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id} className="book-card">
            <img
  src={book.image && book.image.startsWith('http') ? book.image : '/default-book.png'}
  alt={book.title}
  className="book-image"
/>

            <h3 className="book-title">{book.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Books;
