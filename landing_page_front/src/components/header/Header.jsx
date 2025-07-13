import styles from "../header/Header.module.css";
import logo from "../../assets/Logo.svg";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getClient } from "../../service/vehicleService";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [client, setClient] = useState({});

  useEffect(() => {
    async function fetchClient() {
      try {
        const response = await getClient();
        setClient(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchClient();
  }, []);

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

          <a
            href={`https://wa.me/${client.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp style={{ marginRight: 8, verticalAlign: "middle" }} />
            Fale com {`- ${client.name}`}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
