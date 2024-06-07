import { Routes, Route } from 'react-router-dom';
import BookSearchPage from './components/BookSearchPage';
import BookshelfPage from './components/PersonalBookshelfPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookSearchPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </div>
  );
}

export default App;