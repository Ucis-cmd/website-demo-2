import { useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHandler = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <nav className={classes.navbar}>
      <a href="#" className={classes.logo}>
        WHITE
      </a>
      <a className={classes.toggleButton} onClick={toggleHandler}>
        ☰
      </a>
      <div
        className={
          isActive
            ? `${classes.navLinks} ${classes.active}`
            : `${classes.navLinks}`
        }
      >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
