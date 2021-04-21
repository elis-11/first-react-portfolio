import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <ul>
        <li>
          <Link className="nav--link" to="/">
            Elisa
          </Link>
        </li>
        <li>
          <Link className="nav--link" to="/work">
            Work
          </Link>
        </li>
        <li>
          <Link className="nav--link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav--link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;