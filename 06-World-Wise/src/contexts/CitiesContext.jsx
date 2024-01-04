/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState([]);

  const baseURL = "http://localhost:9000";

  useEffect(function () {
    async function fetchCities() {
      const res = await fetch(`${baseURL}/cities`);
      const data = await res.json();
      setCities(data);
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    const res = await fetch(`${baseURL}/cities/${id}`);
    const data = await res.json();
    setCurrentCity(data);
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity, }}>
      {children}
    </CitiesContext.Provider>
  );
};
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
