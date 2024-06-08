// src/components/BookSearchPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import LoadingSpinner from './LoadingSpinner';
import './BookSearchPage.css';


const BookSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (searchTerm.trim()) {
        setIsSearching(true);
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${searchTerm}&limit=10&page=1`
        );
        setBooks(response.data.docs);
        setIsSearching(false);
      } else {
        setBooks([]);
      }
    }, 500);
    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addToBookshelf = (book) => {
    const storedBookshelf = localStorage.getItem('bookshelf') || '[]';
    const bookshelf = JSON.parse(storedBookshelf);
    if (!bookshelf.some((b) => b.key === book.key)) {
      const updatedBookshelf = [...bookshelf, book];
      localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    }
  };

  return (
    <div className="book-search-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a book..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {isSearching && <LoadingSpinner />}
      </div>
      <div className="book-results">
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
