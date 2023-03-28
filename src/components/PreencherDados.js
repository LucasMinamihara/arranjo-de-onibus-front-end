import { useState } from "react";

import classes from "./PreencherDados.module.css";

function PreencherDados() {
  const [comprarPassagens, setComprarPassagens] = useState(false);
  const [quantidadeDePessoas, setQuantidadeDePessoas] = useState("Digite");
  const [valorUltrapassado, setValorUltrapassado] = useState(false);
  const [armazenandoEntradas, setArmazenandoEntrada] = useState([]);

  function armazenandoEntrada(e) {
    e.preventDefault();

    console.log("dados enviados com sucesso!");
  }

  function enviandoDados() {}

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

        {comprarPassagens &&
          Array.from(
            { length: quantidadeDePessoas },
            (_, index) => index + 1
          ).map((posicaoEntrada, index) => (
            <div className={classes.flex} key={index}>
              <span className={classes.numeroDoPassageiro}>
                {posicaoEntrada}°
              </span>
              <input placeholder={"Nome"}></input>
              <span className={classes.numeroDoPassageiro}>
                {posicaoEntrada}°
              </span>
              <input placeholder={"E-mail"}></input>
            </div>
          ))}
        <button type="submit">
          Clique aqui para ver se os valores foram armazenados corretamente!
        </button>
      </div>
    </form>
  );
}

export default PreencherDados;
