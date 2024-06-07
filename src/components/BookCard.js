import React from 'react';

const BookCard = ({ book, addToBookshelf, removeFromBookshelf }) => {
  const { title, author_name, edition_count, key } = book;

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Author: {author_name ? author_name.join(', ') : 'Unknown'}</p>
      <p>Edition Count: {edition_count}</p>
      {addToBookshelf && (
        <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
      )}
      {removeFromBookshelf && (
        <button onClick={() => removeFromBookshelf(key)}>
          Remove from Bookshelf
        </button>
      )}
    </div>
  );
};

export default BookCard;