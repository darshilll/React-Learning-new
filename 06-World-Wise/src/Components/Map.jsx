/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./map.module.css";
const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => {
      navigate("form")
    }}>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <p className={styles.map}>map</p>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 30 });
        }}
      >
        change position
      </button>
    </div>
  );
};
export default Map;
