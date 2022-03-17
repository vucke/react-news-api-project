import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../img/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/stories">Stories</NavLink>
          </li>
          <li>
            <NavLink to="">Playground</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
