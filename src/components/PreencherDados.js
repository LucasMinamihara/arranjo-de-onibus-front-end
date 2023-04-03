import { useState } from "react";
import CriandoEntradas from "./CriandoEntradas";

import classes from "./PreencherDados.module.css";

function PreencherDados() {
  const [comprarPassagens, setComprarPassagens] = useState(false);
  const [quantidadeDePessoas, setQuantidadeDePessoas] = useState("Digite");
  const [valorUltrapassado, setValorUltrapassado] = useState(false);

  function enviandoDados(evento) {
    evento.preventDefault();

    const formData = new FormData(evento.target);
    const data = Object.fromEntries(formData);

    for (let index = 0; index < quantidadeDePessoas; index++) {
      let nome = data[`nome-${index}`];
      let email = data[`email-${index}`];
    }
    console.log(formData);
    console.log(data);
  }

  function ativarEntradas(evento) {
    let quantidadeMaximaUltrapassada = quantidadeDePessoas > 6;

    evento.preventDefault();

    if (quantidadeMaximaUltrapassada) {
      setValorUltrapassado(true);

      return;
    }

    setComprarPassagens(true);
  }

  function alterandoQuantidadeDePessoas(e) {
    if (valorUltrapassado) setValorUltrapassado(false);

    setQuantidadeDePessoas(e.target.value);
  }

  return (
    <form onSubmit={enviandoDados}>
      <div className={classes.container}>
        {!comprarPassagens && (
          <>
            <p>Quantidade de Passageiros</p>

            <input
              type={"number"}
              placeholder="Digite"
              value={quantidadeDePessoas}
              className={
                valorUltrapassado ? classes.entradaComErro : classes.entrada
              }
              onChange={alterandoQuantidadeDePessoas}
            ></input>
            {valorUltrapassado && (
              <p className={classes.valorDePessoasUltrapassado}>
                É permitido apenas a compra de até 6 passagens por pessoa
              </p>
            )}

            <button onClick={ativarEntradas} className={classes.botao}>
              Comprar Passagens
            </button>
          </>
        )}

        {comprarPassagens && (
          <>
            <CriandoEntradas quantidadeDePessoas={quantidadeDePessoas} />
            <button type="submit">Efetuar pagamento das passagens!</button>
          </>
        )}
      </div>
    </form>
  );
}

export default PreencherDados;
