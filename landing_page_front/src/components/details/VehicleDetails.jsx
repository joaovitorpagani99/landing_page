import styles from "./VehicleDetails.module.css";
import img from "./../../assets/jeep-wrangler.svg";
import {
  FaCar,
  FaCalendarAlt,
  FaPaintBrush,
  FaTachometerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { BiSolidFactory } from "react-icons/bi";

function VehicleDetails({ vehicle }) {
  return (
    <section className={styles.detailsContainer}>
      <div className={styles.infoColumn}>
        <h2 className={styles.title}>Tudo sobre o Jeep Wrangler</h2>
        <p className={styles.description}>
          Preparado para qualquer terreno, o Jeep Wrangler entrega toda a força
          para você viver sua aventura com o motor 2.0L Turbo com 272 cv e
          torque de 400Nm.
        </p>

        <div className={styles.specs}>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>
              <BiSolidFactory className={styles.icon} /> Marca
            </span>
            <span className={styles.specValue}>{vehicle?.brand || "Jeep"}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>
              <FaCar className={styles.icon} /> Modelo
            </span>
            <span className={styles.specValue}>{vehicle?.model || "Wrangler"}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>
              <FaCalendarAlt className={styles.icon} /> Ano
            </span>
            <span className={styles.specValue}>{vehicle?.year || "2025"}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>
              <FaPaintBrush className={styles.icon} /> Cor
            </span>
            <span className={styles.specValue}>{vehicle?.color || "Azul"}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>
              <FaTachometerAlt className={styles.icon} /> Quilometragem
            </span>
            <span className={styles.specValue}>{vehicle?.mileage || "45.000"} km</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>
              <FaMoneyBillWave className={styles.icon} /> Valor
            </span>
            <span className={styles.specValue}>R$ {vehicle?.price || "89.900,00"}</span>
          </div>
        </div>
      </div>

      <div className={styles.img}>
        <img src={img} alt="Jeep Wrangler" className={styles.vehicleImage} />
      </div>
    </section>
  );
}

export default VehicleDetails;
