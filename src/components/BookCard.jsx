import { Link } from 'react-router-dom';
import React, { useState } from 'react';



function BookCard({ id, title, genre, author, year, image }) {
  const imagePath = `/images/${image}`; 
  const [isBorrowed, setIsBorrowed] = useState(false);

  const handleBorrow = () => {
    setIsBorrowed(true);
  };

  return (
    <div className="book-card">
      <img
        src={image} 
        style={{ width: '100%', height: '200px' , borderRadius: '4px' }}
      />
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Year:</strong> {year}</p>
      
      {isBorrowed ? (
        <button className="borrowed-btn" disabled>Borrowed</button>
      ) : (
        <button className="borrow-btn" onClick={handleBorrow}>Borrow</button>
      )}
    </div>
  );
}

export default BookCard;
