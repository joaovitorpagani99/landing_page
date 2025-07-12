import styles from "./Gallery.module.css";

function Gallery({images}) {
  return (
    <section className={styles.gallery}>
      <h3 className={styles.title}>Veja cada detalhe do veículo </h3>
      <div className={styles.grid}>
        {images.map((img) => (
          <div key={img.id} className={styles.card}>
            <img src={img.url} alt="Foto do veículo" className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
