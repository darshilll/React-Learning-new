/* eslint-disable no-unused-vars */

import Logo from "./Logo";
import styles from "./NavPage.module.css";
import { NavLink } from "react-router-dom";

const Navpage = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.login_btn}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navpage;
