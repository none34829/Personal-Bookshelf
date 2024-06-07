import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Book Search</Link>
        </li>
        <li>
          <Link to="/bookshelf">My Bookshelf</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;