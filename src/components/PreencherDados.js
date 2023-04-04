import { useState } from "react";
import verificandoEmail from "./Apis/conferindoEmailValido";
import CriandoEntradas from "./CriandoEntradas";

import classes from "./PreencherDados.module.css";

function PreencherDados() {
  const [comprarPassagens, setComprarPassagens] = useState(false);
  const [quantidadeDePessoas, setQuantidadeDePessoas] = useState("Digite");
  const [valorUltrapassado, setValorUltrapassado] = useState(false);
  const [dadosFaltando, setDadosFaltando] = useState(false);

  function enviandoDados(evento) {
    evento.preventDefault();

    const formData = new FormData(evento.target);
    const data = Object.fromEntries(formData);

    for (let i = 0; i < quantidadeDePessoas; i++) {
      let nome = data[`nome_${i}`];
      console.log(nome);

      let email = data[`email_${i}`];
      console.log(email);

      let faltandoDados = !nome && !data;

      if (!faltandoDados) {
        setDadosFaltando(true);
        return;
      }

      verificandoEmail();
    }
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
            {dadosFaltando && (
              <p className={classes.dadosPendentes}>Dados Pendentes!</p>
            )}
            <button type="submit">Efetuar pagamento das passagens!</button>
          </>
        )}
      </div>
    </form>
  );
}

export default PreencherDados;
