import styles from "./Footer.module.css";
import img from "../../assets/logo footer.svg";
import {
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={img} alt="Logo da empresa" />
      </div>

      <div className={styles.socialIcons}>
        <a href="#" className={styles.socialLink}>
          <FaTiktok className={styles.icon} />
        </a>
        <a href="#" className={styles.socialLink}>
          <FaInstagram className={styles.icon} />
        </a>
        <a href="#" className={styles.socialLink}>
          <FaFacebook className={styles.icon} />
        </a>
        <a href="#" className={styles.socialLink}>
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="#" className={styles.socialLink}>
          <FaTwitter className={styles.icon} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
