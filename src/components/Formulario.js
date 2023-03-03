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
        <p className={classes.textoContainer}>
          Para efetuar o pagamento da sua passagem de ônibus, basta clicar no
          botão abaixo
        </p>
      )}
      {botao && (
        <button className={classes.botao} onClick={abrirFormulario}>
          Comprar Passagem de Ônibus
        </button>
      )}
      {formulario && <PreencherDados />}
    </div>
  );
}

export default Formulario;
