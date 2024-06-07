import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import './BookShelfPage.css';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = localStorage.getItem('bookshelf');
    if (storedBookshelf) {
      setBookshelf(JSON.parse(storedBookshelf));
    }
  }, []);

  const removeFromBookshelf = (key) => {
    const updatedBookshelf = bookshelf.filter((book) => book.key !== key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="bookshelf-page">
      <h2>My Bookshelf</h2>
      {bookshelf.length === 0 ? (
        <p className="empty-bookshelf">Your bookshelf is empty.</p>
      ) : (
        <div className="book-grid">
          {bookshelf.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              removeFromBookshelf={removeFromBookshelf}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookshelfPage;