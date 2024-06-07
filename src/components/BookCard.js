import React from 'react';
import './BookCard.css';

const BookCard = ({ book, addToBookshelf, removeFromBookshelf }) => {
  const { title, author_name, edition_count, key } = book;
  return (
    <div className="book-card">
      <div className="book-cover">
        {/* Add a placeholder book cover image or use the book's cover_i property */}
        <img src="https://via.placeholder.com/150" alt={title} />
      </div>
      <div className="book-details">
        <h3>{title}</h3>
        <p>Author: {author_name ? author_name.join(', ') : 'Unknown'}</p>
        <p>Edition Count: {edition_count}</p>
        <div className="book-actions">
          {addToBookshelf && (
            <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
          )}
          {removeFromBookshelf && (
            <button onClick={() => removeFromBookshelf(key)}>
              Remove from Bookshelf
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;