import classes from "./PreencherDados.module.css";

function CriandoEntradas(props) {
  return Array.from(
    { length: props.quantidadeDePessoas },
    (_, index) => index + 1
  ).map((posicaoEntrada, index) => (
    <div className={classes.flex} key={index}>
      <span className={classes.numeroDoPassageiro}>{posicaoEntrada}°</span>
      <input
        placeholder={"Nome"}
        id={`nome_${index}`}
        name={`nome_${index}`}
      ></input>
      <span className={classes.numeroDoPassageiro}>{posicaoEntrada}°</span>
      <input
        placeholder={"E-mail"}
        id={`email_${index}`}
        name={`email_${index}`}
      ></input>
    </div>
  ));
}

export default CriandoEntradas;
