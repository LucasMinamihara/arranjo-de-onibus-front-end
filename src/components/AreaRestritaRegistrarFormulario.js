import { useState } from "react";
import classes from "./AreaRestritaRegistrarFormulario.module.css";

function AreaRestritaRegistrarFormulario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function cadastrar(e) {
    e.preventDefault();

    console.log(senha === confirmarSenha);
  }

  function voltarParaLogar() {
    props.setRegistrar(false);
  }

  return (
    <>
      <h2 className={classes.estiloTexto}>Registrar</h2>
      <span className={classes.voltar} onClick={voltarParaLogar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </span>

      <span className={classes.fechar} onClick={props.fecharModal}>
        X
      </span>
      <form onSubmit={cadastrar} className={classes.flex}>
        <input
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        ></input>
        <input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="Senha"
          type={"password"}
          onChange={(e) => setSenha(e.target.value)}
        ></input>
        <input
          placeholder="Confirmar Senha"
          type={"password"}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        ></input>
        <button className={classes.botaoCadastrar}>Cadastrar</button>
      </form>
    </>
  );
}

export default AreaRestritaRegistrarFormulario;
