import { useState } from "react";
import classes from "./Formulario.module.css";
import PreencherDados from "./PreencherDados";

function Formulario() {
  const [botao, setBotao] = useState(true);
  const [formulario, setFormulario] = useState(false);

  function abrirFormulario(e) {
    e.preventDefault();
    setBotao(false);
    setFormulario(true);
  }

  return (
    <div className={classes.container}>
      {botao && (
        <>
          <p className={classes.textoContainer}>Selecione uma opção</p>
          <button className={classes.botao} onClick={abrirFormulario}>
            Comprar Passagem de Ônibus
          </button>
          <button className={classes.botao}>Como funciona o pagamento</button>
          <button className={classes.botao}>Informações da empresa</button>
          <button className={classes.botao}>
            Visualizar lista de pagamento
          </button>
        </>
      )}

      {formulario && <PreencherDados />}
    </div>
  );
}

export default Formulario;
