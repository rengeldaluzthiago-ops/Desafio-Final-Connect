import styles from "./Perfil.module.scss";
function Perfil() {
  return (
    <section className={styles.containerTelaPerfil}>
      <article>
        <img src="src/assets/foto minha.jpeg" alt="src/assets/foto minha.jpeg" />
        <div className={styles.cardInfo}>
          <h2> Thiago Rengel </h2>
          <h3> Voluntário Ativo</h3>
          <p className={styles.paragrafoSobreMim}>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>
          <address>
            <p> Blumenau, SC</p>
            <p>Emailrengeldaluzthiago@gemail.com</p>
            <p> Membro desde Janeiro de 2022</p>
          </address>
          <ul>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
export default Perfil;