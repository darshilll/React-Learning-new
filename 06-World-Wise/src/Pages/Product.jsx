import styles from "./Product.module.css";
import Navpage from "../Components/Navpage";

const Product = () => {
  return (
    <main className={styles.pricing}>
      <Navpage />
      <section className={styles.section}>
        <div>
          <img
            src="/public/img-1.jpg"
            alt="img1"
            className={styles.img_pricing}
          />
        </div>
        <div>
          <h1 className={styles.heading}>
          About WorldWide.
          <br/>
          </h1>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
};
export default Product;
