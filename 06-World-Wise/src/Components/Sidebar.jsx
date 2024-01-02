import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "./sidebar.module.css";
import AppNav from "./AppNav";

const sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav/>
      <Outlet/>
      <p></p>
      <footer className={styles.footer}> 
        <p>
            &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};
export default sidebar;
