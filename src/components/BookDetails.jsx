import { useParams } from 'react-router-dom';
import books from '../books';

function BookDetails() {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  return (
    <div className="book-details-page">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Description:</strong> {book.description}</p>
    </div>
  );
}

export default BookDetails;