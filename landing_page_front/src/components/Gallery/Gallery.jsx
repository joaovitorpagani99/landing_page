import { useEffect, useState } from "react";
import { getVehicle } from "../../service/vehicleService";
import styles from "./Gallery.module.css";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const vehicle = await getVehicle();
        setImages(vehicle.images || []);
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  if (loading) return <p>Carregando galeria...</p>;

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
