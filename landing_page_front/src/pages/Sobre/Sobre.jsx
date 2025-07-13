import styles from "./Sobre.module.css";

function Sobre() {
  return (
    <section className={styles.container}>
      <div className={styles.sobreSection}>
        <h2>Sobre o Projeto</h2>
        <p>
          Esta landing page foi desenvolvida para facilitar a divulgação de
          veículos semi-novos, conectando lojistas e clientes de forma prática e
          moderna.
        </p>
        <p>
          O sistema permite exibir detalhes do veículo, informações do vendedor
          e contato direto via WhatsApp, proporcionando uma experiência simples
          e eficiente para quem deseja comprar ou vender.
        </p>
        <p>
          Projeto criado por João Vitor Pagani &copy; {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}

export default Sobre;
