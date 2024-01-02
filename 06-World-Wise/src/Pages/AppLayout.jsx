/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import Sidebar from "../Components/sidebar";
import Map from "../Components/Map";
import styles from "./AppLayout.module.css"
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map/>
    </div>
  );
};
export default AppLayout;
