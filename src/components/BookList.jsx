import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

function BookList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books from fake API
  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/books?_quantity=20')
      .then(res => res.json())
      .then(data => {
        const booksData = data.data.map((book, index) => ({
          id: index,
          title: book.title,
          author: book.author,
          year: new Date(book.published).getFullYear(),
          category: book.genre || "General",
          description: book.description,
          image: `https://placehold.co/300x400?text=${encodeURIComponent(book.title.split(' ')[0])}&font=roboto&bg=000&color=fff`
        }));
        setBooks(booksData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch books", err);
        setLoading(false);
      });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list-page main-content">
      <h2>Library Books</h2>

      <input
        type="text"
        placeholder="Search by title, author, or category..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <p>Loading books...</p>
      ) : (
        <div className="book-list">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              category={book.category}
              image={book.image}
              description={book.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;
