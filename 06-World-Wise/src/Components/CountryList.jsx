/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem";
import styles from "./countryList.module.css";
import useCities from "../contexts/CitiesContext";

const CountryList = () => {
  const { cities, isLoading } = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((country) => (
          <CountryItem country={country} key={country.id} />
        ))}
      </ul>
    </div>
  );
};
export default CountryList;
