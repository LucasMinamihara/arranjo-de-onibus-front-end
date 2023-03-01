import { useState } from "react";

import classes from "./PreencherDados.module.css";

function PreencherDados() {
  const [comprarPassagens, setComprarPassagens] = useState(false);
  const [quantidadeDePessoas, setQuantidadeDePessoas] = useState(0);
  const [quantidadeDeEntradas, setQuantidadeDeEntradas] = useState([]);

  function ativarEntradas() {
    setComprarPassagens(true);
    console.log(quantidadeDePessoas);
  }

  function enviandoEntradas() {
    for (let i = 1; i < quantidadeDePessoas; i++) {
      setQuantidadeDeEntradas(
        ...quantidadeDeEntradas,
        <>
          <input placeholder={`Qual o nome do ${i} ° passageiro`}></input>
          <input placeholder={`Qual o email do ${i} ° passageiro`}></input>
        </>
      );
    }
    return quantidadeDeEntradas;
  }

  return (
    <form>
      <div className={classes.container}>
        {!comprarPassagens && (
          <>
            <h3>Quantidade de passagens</h3>
            <input
              type={"number"}
              placeholder="Digite"
              className={classes.entrada}
              onChange={(e) => setQuantidadeDePessoas(e.target.value)}
            ></input>
            <button onClick={ativarEntradas} className={classes.botao}>
              Comprar Passagens
            </button>
          </>
        )}
        {comprarPassagens && enviandoEntradas()}
      </div>
    </form>
  );
}

export default PreencherDados;
