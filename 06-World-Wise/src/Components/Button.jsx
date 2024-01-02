/* eslint-disable react/prop-types */
import styles from "./button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};
export default Button;
