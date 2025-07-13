import styles from "../header/Header.module.css";
import logo from "../../assets/Logo.svg";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.menuButton} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`${styles.navigation} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <a
                href="#sobre"
                className={active === "home" ? styles.active : ""}
                onClick={() => {
                  setActive("home");
                  setMenuOpen(false);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className={active === "contato" ? styles.active : ""}
                onClick={() => {
                  setActive("contato");
                  setMenuOpen(false);
                }}
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#anunciar"
                className={active === "sobre" ? styles.active : ""}
                onClick={() => {
                  setActive("sobre");
                  setMenuOpen(false);
                }}
              >
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
