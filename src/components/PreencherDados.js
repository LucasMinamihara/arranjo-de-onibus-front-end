import { useState } from "react";

import classes from "./PreencherDados.module.css";

function PreencherDados() {
  const [comprarPassagens, setComprarPassagens] = useState(false);
  const [quantidadeDePessoas, setQuantidadeDePessoas] = useState(0);
  const [quantidadeDeEntradas, setQuantidadeDeEntradas] = useState([]);

  function ativarEntradas() {}

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
      </div>
    </form>
  );
}

export default PreencherDados;
