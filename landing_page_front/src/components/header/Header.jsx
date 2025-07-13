import styles from "../header/Header.module.css";
import logo from "../../assets/Logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#sobre">Home</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>
              <a href="#anunciar">Sobre</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
