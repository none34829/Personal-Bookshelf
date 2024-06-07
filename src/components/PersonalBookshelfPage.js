import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = localStorage.getItem('bookshelf');
    if (storedBookshelf) {
      setBookshelf(JSON.parse(storedBookshelf));
    }
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  const removeFromBookshelf = (key) => {
    const updatedBookshelf = bookshelf.filter((book) => book.key !== key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <h2>My Bookshelf</h2>
      {bookshelf.length === 0 ? (
        <p>Your bookshelf is empty.</p>
      ) : (
        bookshelf.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            removeFromBookshelf={removeFromBookshelf}
          />
        ))
      )}
    </div>
  );
};

export default BookshelfPage;