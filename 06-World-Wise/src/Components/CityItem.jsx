/* eslint-disable react/prop-types */
// import Button from "./Button";
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
const CityItem = ({ city }) => {
  const { cityName, emoji, date,id,position } = city;
  // console.log(position)

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  return (
    <Link className={styles.cityItems} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <div className={styles.cityElements}>
        <span className={styles.emoji}>{emoji}</span>
        <h4 className={styles.cityName}>{cityName}</h4>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.btn}>&times;</button>
      </div>
    </Link>
  );
};
export default CityItem;
