import classes from "./Responsaveis.module.css";

function Responsáveis() {
  return (
    <>
      <h3>Informações dos responsáveis pelo arranjo</h3>
      <div className={classes.container}>
        <div className={classes.infFernando}>
          <div>Nome</div>
          <div>Telefone</div>
          <div>E-mail</div>
        </div>
        <div className={classes.infRafael}>
          <div>Nome</div>
          <div>Telefone</div>
          <div>E-mail</div>
        </div>
        <div className={classes.infLucas}>
          <div>Nome</div>
          <div>Telefone</div>
          <div>E-mail</div>
        </div>
      </div>
    </>
  );
}

export default Responsáveis;
