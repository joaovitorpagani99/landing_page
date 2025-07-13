import styles from "../header/Header.module.css";
import logo from "../../assets/Logo.svg";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

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
              <Link
                to="/"
                className={active === "home" ? styles.active : ""}
                onClick={() => {
                  setActive("home");
                  setMenuOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={active === "contato" ? styles.active : ""}
                onClick={() => {
                  setActive("contato");
                  setMenuOpen(false);
                }}
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={active === "sobre" ? styles.active : ""}
                onClick={() => {
                  setActive("sobre");
                  setMenuOpen(false);
                }}
              >
                Sobre
              </Link>
            </li>
          </ul>

          <Link
            href="https://wa.me/5561992453208"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp style={{ marginRight: 8, verticalAlign: "middle" }} />
            Fale com o lojista
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
