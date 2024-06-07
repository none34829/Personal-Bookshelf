import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import BookFlow from './BookFlow';

const BookSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchTerm.trim()) {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${searchTerm}&limit=10&page=1`
        );
        setBooks(response.data.docs);
      } else {
        setBooks([]);
      }
    };

    fetchBooks();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addToBookshelf = (book) => {
    const storedBookshelf = localStorage.getItem('bookshelf') || '[]';
    const bookshelf = JSON.parse(storedBookshelf);
    const updatedBookshelf = [...bookshelf, book];
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;