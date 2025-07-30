import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((res) => res.json())
      .then(setBook);
  }, [id]);

  if (!book) return <p className="loading-text">Loading...</p>;

  return (
    <div className="book-details">
      <h2 className="book-details-title">{book.title}</h2>
<img
  src={book.image && book.image.startsWith('http') ? book.image : '/default-book.png'}
  alt={book.title}
  className="book-image"
/>

      <p className="book-details-description">{book.description}</p>
    </div>
  );
}

export default BookDetails;
