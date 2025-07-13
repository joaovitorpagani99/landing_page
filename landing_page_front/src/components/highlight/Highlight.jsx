import styles from "../highlight/Highlight.module.css";

import jeep from "../../assets/jeep-wrangler.svg";

function Highlight() {
  return (
    <section className={styles.containerRoot}>
      <div className={styles.container}>
        <div>
          <h1>Jeep Wrangler</h1>
        </div>
        <div className={styles.subtext}>
          <span>Seminovo em excelente estado,</span>
          <span>confira os detalhes abaixo.</span>
        </div>
      </div>

      <div className={styles.containerImg}>
        <img src={jeep} />
      </div>
    </section>
  );
}

export default Highlight;
