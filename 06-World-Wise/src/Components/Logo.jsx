import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/"><img
      src="/src/assets/Images/logo.png"
      alt="Worldwise logo"
      className={styles.logo}
    />
    </Link>
   
  );
};
export default Logo;
