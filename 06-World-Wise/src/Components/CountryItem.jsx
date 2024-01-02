/* eslint-disable react/prop-types */
import styles from './countryItem.module.css'
const CountryItem = ({ country }) => {
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>{country.emoji}</span>
      <span className={styles.cityName}>{country.country}</span>
    </li>
  );
};
export default CountryItem;
