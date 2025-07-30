import { Link } from 'react-router-dom';
import './Navigation.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Seuss Treasury</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">Books</Link>
        <Link to="/quotes" className="nav-link">Quotes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
