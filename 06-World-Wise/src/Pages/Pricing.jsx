import Navpage from "../Components/Navpage";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <main className={styles.pricing}>
      <Navpage />
      <section className={styles.section}>
        <div>
          <h1 className={styles.heading}>
            Simple pricing.
            <br />
            Just $9/month.
          </h1>
          <p className={styles.content}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <div>
          <img
            src="/public/img-2.jpg"
            alt="img1"
            className={styles.img_pricing}
          />
        </div>
      </section>
    </main>
  );
};
export default Pricing;
