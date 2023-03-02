import { useState } from "react";
import classes from "./FormularioAreaRestrita.module.css";

function FormularioAreaRestrita(props) {
  function logar(e) {
    e.preventDefault();
    console.log(email, senha);
  }

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div>
      <h3 className={classes.estilo}>Acesse sua conta</h3>
      <span className={classes.fechar} onClick={props.fecharModal}>
        X
      </span>
      <form className={classes.flex} onSubmit={logar}>
        <input
          placeholder="Digite seu E-mail"
          className={classes.entrada}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="Digite sua Senha"
          className={classes.entrada}
          onChange={(e) => setSenha(e.target.value)}
          type={"password"}
        ></input>

        <button className={classes.botao}>Logar</button>
      </form>
    </div>
  );
}

export default FormularioAreaRestrita;
